import React, { useEffect, useRef } from "react";
import { useKey } from "@/SceneController/hook";
import { useActiveModel } from "@/state";

import { Button } from "@mui/material";
import AttachmentSetting from "./AttachmentSetting";
import { simpleHandler } from "../simpleHandler";

const weaponIcon = (
    <img className="btn-icon" src="img/appIcon/weapon.png" alt="Add Weapon" />
);

function SimpleWeaponControl({ openModal }) {
    const { activeModel } = useActiveModel();
    const [key, update] = useKey();
    const removeListener = useRef(() => void 0);

    const showWeapon = activeModel?.bones.list.includes("jWeaponR");
    const weaponLeft = activeModel?.attachment.jWeaponL?.[0];
    const weaponRight = activeModel?.attachment.jWeaponR?.[0];
    const addWeapon = () => openModal("weapon", simpleHandler.weapon);

    useEffect(() => {
        // remove old listener
        removeListener.current();

        const listener = activeModel?.addEventListener(
            "AttachmentChanged",
            update
        );
        removeListener.current = () =>
            activeModel?.removeEventListener("AttachmentChanged", listener);

        return removeListener.current;
    }, [activeModel]);

    return showWeapon ? (
        <>
            <Button
                variant="contained"
                data-mode="weapon"
                onClick={addWeapon}
                startIcon={weaponIcon}
            >
                Add Weapon
            </Button>
            <React.Fragment key={key}>
                {weaponLeft && (
                    <AttachmentSetting
                        target={weaponLeft}
                        label="Left Weapon"
                    />
                )}
                {weaponRight && (
                    <AttachmentSetting
                        target={weaponRight}
                        label="Right Weapon"
                    />
                )}
            </React.Fragment>
        </>
    ) : (
        <></>
    );
}

export default SimpleWeaponControl;
