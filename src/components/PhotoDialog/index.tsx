"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export type PhotoDialogProps = Readonly<PropsWithChildren>;

export default function PhotoDialog({ children }: PhotoDialogProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Dialog open maxWidth="md" fullWidth onClose={handleClose}>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
