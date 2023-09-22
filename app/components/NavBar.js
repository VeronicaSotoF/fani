"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const NavBar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <Link href="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <AdbIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "5px" }}
            >
              FANI
            </Typography>
          </IconButton>
        </Link>
        <Stack direction="row" spacing={2}>
          <Link href="/news">
            <Button color="inherit">News</Button>
          </Link>
          <Link href="/testimonials">
            <Button color="inherit">Testimonials</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
