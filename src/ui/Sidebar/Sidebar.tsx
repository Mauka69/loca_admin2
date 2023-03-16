import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

import { Box, colors, IconButton, Typography } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useState } from 'react';
import ItemSide from '../Item';

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('CreateEventPage');
	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `var(--bg-color-primary) !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
								<Typography variant="h3" color={colors.grey[100]}>
									Текст
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<ItemSide
							title="Home"
							to="/"
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
							Data
						</Typography>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
}
