import "helpers/typedef";

/**
 * @type {{ [weaponType: string]: AnimationData[]}}
 */
const aniGenericSkills = {
    Sword: [
        {
            name: "Front Flip Attack",
            code: "SWD_001_02",
        },
        {
            name: "2 Slashes Backflip",
            code: "SWD_001_03",
        },
        {
            name: "Multiple Slashes Backflip",
            code: "SWD_001_04",
        },
        {
            name: "Diagonal Slash",
            code: "SWD_002_02",
        },
        {
            name: "2 Diagonal Slashes",
            code: "SWD_002_03",
        },
        {
            name: "Jump Slash Downward",
            code: "SWD_002_04",
        },
        {
            name: "Front Slash",
            code: "SWD_003_02",
        },
        {
            name: "Spin",
            code: "SWD_003_04",
        },
        {
            name: "Spin Overhead",
            code: "SWD_004_02",
        },
        {
            name: "2 Spins",
            code: "SWD_004_03",
        },
        {
            name: "3 Spins",
            code: "SWD_004_04",
        },
        {
            name: "Volleyball?",
            code: "SWD_005_04",
        },
    ],
    Blade: [
        {
            name: "2 Slashes Jumpback",
            code: "KAT_001_02",
        },
        {
            name: "3 Slashes",
            code: "KAT_001_03",
        },
        {
            name: "Multiple Slashes",
            code: "KAT_001_04",
        },
        {
            name: "Draw Slash",
            code: "KAT_002_02",
        },
        {
            name: "Draw Double Slashes",
            code: "KAT_002_03",
        },
        {
            name: "Draw Triple Slashes",
            code: "KAT_002_04",
        },
        {
            name: "Spin and Slash",
            code: "KAT_003_02",
        },
        {
            name: "Jump Spin and Slash",
            code: "KAT_003_03",
        },
        {
            name: "Charge and Slash",
            code: "KAT_003_04",
        },
    ],
    Dagger: [
        {
            name: "2 Slashes",
            code: "DAG_001_02",
        },
        {
            name: "4 Slashes",
            code: "DAG_001_03",
        },
        {
            name: "5 Slashes",
            code: "DAG_001_04",
        },
        {
            name: "2 Horizontal 2 Diagonal",
            code: "DAG_002_02",
        },
        {
            name: "4 Horizontal 2 Diagonal",
            code: "DAG_002_03",
        },
        {
            name: "Multiple Horizontal Spins",
            code: "DAG_002_04",
        },
        {
            name: "Diagonal Spin",
            code: "DAG_003_02",
        },
        {
            name: "2 Diagonal Spins",
            code: "DAG_003_03",
        },
        {
            name: "3 Diagonal Spins",
            code: "DAG_003_04",
        },
        {
            name: "2 Horizonal Spins",
            code: "DAG_004_02",
        },
        {
            name: "Slash and 2 Horizonal Spins",
            code: "DAG_004_03",
        },
        {
            name: "2 Slashes and 2 Horizonal Spins",
            code: "DAG_004_04",
        },
    ],
    Axe: [
        {
            name: "Jump and Smash",
            code: "AXE_001_02",
        },
        {
            name: "Double Hit",
            code: "AXE_001_03",
        },
        {
            name: "3 Steps Attack",
            code: "AXE_001_04",
        },
        {
            name: "Horizontal Swing",
            code: "AXE_003_02",
        },
        {
            name: "2 Horizontal Swings",
            code: "AXE_003_03",
        },
        {
            name: "2 Swings 2 Smashes",
            code: "AXE_003_04",
        },
        {
            name: "1 Spin",
            code: "AXE_004_02",
        },
        {
            name: "2 Spins",
            code: "AXE_004_03",
        },
        {
            name: "3 Spins",
            code: "AXE_004_04",
        },
        {
            name: "Front Charge",
            code: "AXE_005_02",
        },
        {
            name: "Front Charge 2",
            code: "AXE_005_03",
        },
        {
            name: "Front Charge 3",
            code: "AXE_005_04",
        },
    ],
    Lance: [
        {
            name: "3 Thrusts",
            code: "LAN_001_02",
        },
        {
            name: "5 Thrusts",
            code: "LAN_001_03",
        },
        {
            name: "11 Thrusts",
            code: "LAN_001_04",
        },
        {
            name: "Spin",
            code: "LAN_002_02",
        },
        {
            name: "Front Flip Ground Stab",
            code: "LAN_002_03",
        },
        {
            name: "Launch Weapon to Ground",
            code: "LAN_002_04",
        },
        {
            name: "Jump Ground Stab",
            code: "LAN_003_02",
        },
        {
            name: "Dive from Midair",
            code: "LAN_003_03",
        },
        {
            name: "Dive from Midair 2",
            code: "LAN_003_04",
        },
    ],
    Bow: [
        {
            name: "Front Shot",
            code: "BOW_001_02",
        },
        {
            name: "Front Shot 2",
            code: "BOW_001_03",
        },
        {
            name: "Front Shot 3",
            code: "BOW_001_04",
        },
        {
            name: "Jump Shot",
            code: "BOW_002_02",
        },
        {
            name: "Jump Shot 2",
            code: "BOW_002_03",
        },
        {
            name: "Jump Shot 3",
            code: "BOW_002_04",
        },
        {
            name: "Triple Shots",
            code: "BOW_003_02",
        },
        {
            name: "Triple Shots 2",
            code: "BOW_003_03",
        },
        {
            name: "Triple Shots 3",
            code: "BOW_003_04",
        },
    ],
    Wand: [
        {
            name: "Generic Skill",
            code: "ROD_001_02",
        },
        {
            name: "Generic Skill 2",
            code: "ROD_001_03",
        },
        {
            name: "Generic Skill 3",
            code: "ROD_001_04",
        },
        {
            name: "Generic Skill 4",
            code: "ROD_002_02",
        },
        {
            name: "Generic Skill 5",
            code: "ROD_002_03",
        },
        {
            name: "Generic Skill 6",
            code: "ROD_002_04",
        },
        {
            name: "Generic Skill 7",
            code: "ROD_003_02",
        },
    ],
    Staff: [
        {
            name: "Generic Skill",
            code: "CAN_001_99",
        },
        {
            name: "Generic Skill 2",
            code: "CAN_002_99",
        },
        {
            name: "Generic Skill 3",
            code: "CAN_003_99",
        },
    ],
    Manacaster: [
        {
            name: "Front Shoot",
            code: "GUN_001_01",
        },
        {
            name: "Front Shoot 2",
            code: "GUN_002_01",
        },
        {
            name: "Burst Shoot",
            code: "GUN_003_01",
        },
        {
            name: "Shoot with Recoil",
            code: "GUN_004_01",
        },
        {
            name: "Shoot Upward",
            code: "GUN_005_01",
        },
        {
            name: "Buff",
            code: "GUN_006_01",
        },
    ],
};
export default aniGenericSkills;
