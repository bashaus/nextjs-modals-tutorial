"use client";

import { Photo } from "@/libraries/photos";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import * as S from "./styles";

export type PhotoViewerProps = Readonly<{
  photo: Photo;
}>;

export default function PhotoViewer({ photo }: PhotoViewerProps) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 9 }}>
        <S.Image {...photo} />
      </Grid>

      <Grid size={{ md: 3 }}>
        <Typography variant="h5" component="h1">
          {photo.alt}
        </Typography>
      </Grid>
    </Grid>
  );
}
