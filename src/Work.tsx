import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 200;
const drawer = (
    <div className="">
        <Toolbar />
        <Divider />
        <List>
            {['PlayStation', `NASA L'SPACE MCA`, 'CMU Japanese Language Assistant'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
    </div>
);
export const Work:React.FC<{}> = () => {
    const [mobileOpen,setMobileOpen] = React.useState<boolean>(false);
    return (
        <div>

            <div className="flex flex-row">
                <AppBar
                position="relative"
                color="transparent"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                >
                    <Toolbar variant="regular">
                        <IconButton 
                        sx={{
                            display:{sm: 'none'}
                        }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <MenuIcon color="primary"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer
            variant="temporary"
            sx={{
                display:{xs:'flex',sm: 'none'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
               {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display:{xs:'none',sm: 'flex'},
                flexShrink: 0,
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
               {drawer}
            </Drawer>
        </div>
    );
};