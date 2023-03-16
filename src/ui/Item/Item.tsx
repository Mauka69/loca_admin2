import {MenuItem} from "react-pro-sidebar";
import {Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {tokens} from "../Theme/theme";

interface ItemProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: Function;
}

export default function Item({title, to, icon, selected, setSelected}: ItemProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography variant ="10px">{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    );
}