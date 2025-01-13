"use client";

import { styled } from "@mui/material/styles";

export const Image = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "auto",
  aspectRatio: "1 / 1",
}));
