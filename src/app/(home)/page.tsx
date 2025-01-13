import { photos } from "@/libraries/photos";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import * as S from "./styles";

export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={2}>
        {Object.entries(photos).map(([id, photo]) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <Link href={`/photos/${id}`}>
              <S.Image {...photo} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
