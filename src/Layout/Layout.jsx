// src/Layout.jsx
import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Nav from "../componenents/Nav";

export default function Layout({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6E00FE",
          },
        },
        typography: {
          fontFamily: 'Cairo, sans-serif',
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav toggleMode={toggleMode} />
      <Box component="main" 
      // sx={{ mt: 8, px: 2 }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
