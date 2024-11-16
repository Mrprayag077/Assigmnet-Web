import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon"; // Import added
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import BusinessIcon from "@mui/icons-material/Business";
import MovieIcon from "@mui/icons-material/Movie";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ScienceIcon from "@mui/icons-material/Science";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ComputerIcon from "@mui/icons-material/Computer";

export default function SideBar({ open, toggleDrawer }) {
  const categories = [
    { name: "Business", icon: <BusinessIcon /> },
    { name: "Entertainment", icon: <MovieIcon /> },
    { name: "General", icon: <PublicIcon /> },
    { name: "Health", icon: <HealthAndSafetyIcon /> },
    { name: "Science", icon: <ScienceIcon /> },
    { name: "Sports", icon: <SportsSoccerIcon /> },
    { name: "Technology", icon: <ComputerIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 216, height: "100%", bgcolor: "#303036", color: "#fff" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          bgcolor: "#1f1f23",
          borderBottom: "1px solid #444",
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Categories
        </Typography>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Categories List */}
      <List sx={{ mt: 1 }}>
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fff" }}>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      anchor="left"
      PaperProps={{
        sx: { position: "relative", zIndex: 999, bgcolor: 'transparent', transition: "transform 0.3s ease-in-out", },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
