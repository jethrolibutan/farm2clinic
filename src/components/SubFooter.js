import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SubFooter() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: "center",
          backgroundColor: " #3c3c3c",
          paddingTop: "45px",
          paddingBottom: "45px",
        }}
      >
        <Link href="https://www.youtube.com" rel="noopener" target="_blank">
          <IconButton
            sx={{
              backgroundColor: "white",
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Link>

        <Link
          href="https://instagram.com/farm2clinic/"
          rel="noopener"
          target="_blank"
        >
          <IconButton
            sx={{
              backgroundColor: "white",
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Link>

        <Link
          href="https://twitter.com/farm2clinic"
          rel="noopener"
          target="_blank"
        >
          <IconButton
            sx={{
              backgroundColor: "white",
            }}
          >
            <TwitterIcon />
          </IconButton>
        </Link>
        <Link
          href="https://youtube.com/channel/UCpuQAa3TLdvy8VKbUpnIVkA"
          rel="noopener"
          target="_blank"
        >
          <IconButton
            sx={{
              backgroundColor: "white",
            }}
          >
            <YouTubeIcon />
          </IconButton>
        </Link>
      </Stack>
    </div>
  );
}

export default SubFooter;
