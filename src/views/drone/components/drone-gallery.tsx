import { Section } from "@/shared/components/section";
import { Title } from "@/shared/components/title";
import { dronePhotos } from "../drone-photos";

export const DroneGallery: React.FC = () => {
  if (dronePhotos.length === 0) return null;

  return (
    <Section id="gallery">
      <Title title="Galeria" />
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {dronePhotos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid mb-4">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
