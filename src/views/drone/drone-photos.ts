// Add your drone photos here.
// Example:
//   import photo1 from "@/assets/drone/photo1.jpg";
//   import photo2 from "@/assets/drone/photo2.jpg";
//
// Then add them to the array below:
//   { id: "1", src: photo1, alt: "Aerial view of a residential property" },

export interface DronePhoto {
  id: string;
  src: string;
  alt: string;
}

export const dronePhotos: DronePhoto[] = [];
