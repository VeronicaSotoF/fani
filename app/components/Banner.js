"use client";

import Image from "next/image";
import StarsAnimation from "./animations/StarsAnimation";
import { Stack } from "@mui/material";

export default function Banner({ title, imageSrc }) {
  return (
    <>
      <Stack spacing={4} alignItems="center" mt={6}>
        <h1>{title}</h1>
        <Image src={imageSrc} alt="Picture of a ovni" priority />
      </Stack>

      <StarsAnimation />
    </>
  );
}
