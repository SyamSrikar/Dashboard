import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Sidebar=()=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#27187c' }}>
      <nav aria-label="main mailbox folders">
        <List>

        {/* {
            links.map((object)=>{
                <ListItem disableGutters={true} >
                    <ListItemButton>
                    <ListItemIcon>
                        < {object.icon}  style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={object.text} />
                    </ListItemButton>
                </ListItem>
            })
        } */}

          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon  style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: "white" }}/>
              </ListItemIcon>
              <ListItemText primary="Manage Subscription" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: "white" }}/>
              </ListItemIcon>
              <ListItemText primary="Young Brain" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: "white" }}/>
              </ListItemIcon>
              <ListItemText primary="Mid Career" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: "white" }}/>
              </ListItemIcon>
              <ListItemText primary="Vendor" style={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon style={{ color: "white" }}/>
              </ListItemIcon>
              <ListItemText primary="Consultant" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Reports" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters={true} >
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Signout" style={{ color: "white" }}/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar