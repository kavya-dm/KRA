"use client";

import { ReactNode, createContext, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import themeOptions from "../theme";

// Context to expose theme toggle function
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Provides theme and color mode context to the app
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light"); // Stores theme mode

  // Toggles light/dark mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Creates MUI theme based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: { ...themeOptions.palette, mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
