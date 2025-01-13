import { PhotoPageProps } from "@/app/photos/[id]/page";
import PhotoDialog from "@/components/PhotoDialog";
import PhotoViewer from "@/components/PhotoViewer";
import { photos } from "@/libraries/photos";
import { notFound } from "next/navigation";

export default async function HomePageModalsSlotPhotoInterceptor({
  params,
}: PhotoPageProps) {
  const { id } = await params;

  const photo = photos[id];
  if (!photo) {
    notFound();
  }

  return (
    <PhotoDialog>
      <PhotoViewer photo={photo} />
    </PhotoDialog>
  );
}
