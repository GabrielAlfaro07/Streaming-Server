import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const VideoPlayerSidebar: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: 240, flexShrink: 0 }}
      >
        <List>
          <ListItem component={Link} to="/video/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/video/genres">
            <ListItemText primary="Genres" />
          </ListItem>
          <ListItem component={Link} to="/video/trends">
            <ListItemText primary="Trends" />
          </ListItem>
          <ListItem component={Link} to="/video/search">
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </Drawer>

      <div style={{ flexGrow: 1, padding: 16 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default VideoPlayerSidebar;
