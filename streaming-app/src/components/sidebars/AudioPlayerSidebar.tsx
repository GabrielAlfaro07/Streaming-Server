import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const AudioPlayerSidebar: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: 240, flexShrink: 0 }}
      >
        <List>
          <ListItem component={Link} to="/audio/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/audio/genres">
            <ListItemText primary="Genres" />
          </ListItem>
          <ListItem component={Link} to="/audio/trends">
            <ListItemText primary="Trends" />
          </ListItem>
          <ListItem component={Link} to="/audio/search">
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <div style={{ flexGrow: 1, padding: 16 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AudioPlayerSidebar;
