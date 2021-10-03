import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

/**
 * a button that opens a menu when clicked
 * @param {object} props
 * @param {*} props.children
 * @param { (value: string) => void} props.onClick
 * @param {{ value: string, label: string }[]} props.options
 */
function MenuButton({ children, onClick, options }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = event => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => setAnchorEl(null);

    const handleClick = event => {
        event.stopPropagation();
        const { value } = event.currentTarget.dataset;
        onClick(value);
        closeMenu();
    };

    return (
        <>
            <Button onClick={openMenu} title="Add light" variant="contained">
                {children}
            </Button>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
                {options.map(({ value, label }) => (
                    <MenuItem onClick={handleClick} data-value={value}>
                        {label ?? value}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default MenuButton;
