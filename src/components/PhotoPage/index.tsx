import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

export type PhotoLockupProps = PropsWithChildren;

export default function PhotoLockup({ children }: PhotoLockupProps) {
  return <Container>{children}</Container>;
}
