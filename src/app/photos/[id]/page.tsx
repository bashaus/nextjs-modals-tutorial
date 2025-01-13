import PhotoLockup from "@/components/PhotoPage";
import PhotoViewer from "@/components/PhotoViewer";
import { photos } from "@/libraries/photos";
import { notFound } from "next/navigation";

export type PhotoPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const photo = photos[id];
  if (!photo) {
    notFound();
  }

  return (
    <PhotoLockup>
      <PhotoViewer photo={photo} />
    </PhotoLockup>
  );
}
