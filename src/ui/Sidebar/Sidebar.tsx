import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

import {Box, IconButton, Typography, useTheme} from '@mui/material';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationCityIcon from '@mui/icons-material/LocationCity';


import {useState} from "react";
import Item from "../Item";
import {tokens} from "../Theme/theme";


export default function Sidebar() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	// const [isCollapsed, setIsCollapsed] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [selected, setSelected] = useState("CreateEventPage");
	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important",
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .pro-inner-item:hover": {
					color: "#868dfb !important",
				},
				"& .pro-menu-item.active": {
					color: "#6870fa !important",
				},
			}}

		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					<MenuItem
						 onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100]
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.greenAccent[400]}>
									Loca
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon/>
								</IconButton>
							</Box>
						)}
					</MenuItem>

					<Box paddingLeft={isCollapsed ? undefined : "1%"}>
						<Item
							title="Создать событие"
							to="/"
							icon={<HomeOutlinedIcon/>}
							selected={selected}
							setSelected={setSelected}

						/>
						<Item
							title="Add city Location"
							to="/city"
							icon={<LocationCityIcon/>}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Создать Бизнес карту"
							to="/business"
							icon={<LocationCityIcon/>}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};
