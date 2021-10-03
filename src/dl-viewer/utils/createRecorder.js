import { getDateTimeString } from ".";
import { downloadBlob } from "./downloader";

/** list of video mime types to check for */
const videoMimeTypes = [
    "video/mp4;codecs=h264",
    "video/webm;codecs=h264",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
];

const supportedMimeTypes = videoMimeTypes.filter(MediaRecorder.isTypeSupported);

/**
 * create a media recorder for a canvas element
 * @param {HTMLCanvasElement} canvas
 */
export default function createRecorder(canvas) {
    if (!supportedMimeTypes.length) return undefined;

    const chunks = [];
    const mimeType = supportedMimeTypes[0];

    const record = {
        settings: {
            frameRate: 30,
            fileName: "ani",
            mimeType,
            appendDate: true,
        },
        get supportedMimeTypes() {
            return supportedMimeTypes;
        },
        get mimeType() {
            return this.settings.mimeType;
        },
        set mimeType(type) {
            this.supportedMimeTypes.includes(type) &&
                (this.settings.mimeType = type);
        },
        start() {
            if (this.recorder) return;

            const { fileName, frameRate, mimeType } = this.settings;
            const mediaStream = canvas.captureStream(frameRate || 30);
            const track = mediaStream.getTracks()[0];
            const recorder = new MediaRecorder(mediaStream, { mimeType });
            recorder.onstart = () => (chunks.length = 0);
            recorder.ondataavailable = ({ data }) => chunks.push(data);
            recorder.onstop = () => {
                track.stop();
                this.recorder = undefined;
                const format = this.settings.mimeType.includes("webm")
                    ? "webm"
                    : "mp4";
                const blob = new Blob(chunks, { type: `video/${format}` });

                const append = this.settings.appendDate
                    ? `_${getDateTimeString()}`
                    : "";
                const fullFileName = `${fileName || "ani"}${append}.${format}`;

                downloadBlob(blob, fullFileName);
            };
            recorder.start();
            this.recorder = recorder;
        },
        get state() {
            return this.recorder?.state ?? "idle";
        },
    };

    ["pause", "resume", "stop"].forEach(fn => {
        Object.defineProperty(record, fn, {
            value: () => record.recorder?.[fn](),
        });
    });

    return record;
}
