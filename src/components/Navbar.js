import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";

function Navbar() {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };

  return (
    <div>
      {" "}
      <AppBar position="static" color="transparent">
        {" "}
        <Toolbar>
          <Typography size="large" edge="start" marginRight="auto">
            the logo will be here
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button href="/" color="inherit">
              Home
            </Button>
            <Button
              variant="contained"
              onClick={handleClick}
              to="about"
              key="about"
            >
              ABOUT{" "}
            </Button>
            <Button color="inherit"> RESOURCES </Button>
            <Button color="inherit"> IMPACT </Button>
            <Button color="inherit" key="contact">
              <Link to="contact"> CONTACT US </Link>
            </Button>

            <Link to="contact">ContactMe</Link>
          </Stack>

          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose} to="about">
              {" "}
              WHAT WE DO{" "}
            </MenuItem>
            <MenuItem component={Link} href="/about">
              {/* <Button href="/about"> MEET THE TEAM</Button> */}
              MEET THE TEAM
            </MenuItem>
            <MenuItem onClick={handleClose}> SUPPORT </MenuItem>
            <MenuItem onClick={handleClose}> PARTNERS </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
