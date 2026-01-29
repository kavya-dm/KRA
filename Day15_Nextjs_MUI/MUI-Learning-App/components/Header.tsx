"use client";

import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "./ThemeRegistry";

// Application header with theme toggle button
export default function Header() {
  const { toggleColorMode } = useContext(ColorModeContext); // Access theme toggle

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MUI Learning App
        </Typography>

        <IconButton color="inherit" onClick={toggleColorMode}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
