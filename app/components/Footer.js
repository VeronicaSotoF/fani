"use client";

import { Stack, Box } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Stack
      sx={{
        width: "100%",
        position: "relative",
        bottom: 0,
      }}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      py={4}
      bgcolor={"tomato"}
    >
      <Stack>
        <Box>Fani</Box>
        <Box>About us</Box>
      </Stack>
      <Stack>Get connected</Stack>
      <Stack>
        <Box mb={2}>Support</Box>
        <Box>Help center</Box>
        <Box>Community</Box>
        <Box>GitHub</Box>
      </Stack>
      <Stack>Company</Stack>
      <Stack>
        <Box mb={2}>Social</Box>
        <Box>
          <Link href="/">Twitter</Link>
        </Box>
        <Box>Facebook</Box>
        <Box>LinkedIn</Box>
      </Stack>
    </Stack>
  );
}
