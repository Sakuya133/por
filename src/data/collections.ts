export type CollectionGalleryImage = {
  src: string;
  alt: string;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  cover: string | null;
  coverAlt: string;
  description?: string;
  gallery?: CollectionGalleryImage[];
};

export const collections: Collection[] = [
  {
    id: "001",
    slug: "beach-resort",
    title: "Beach Resort",
    cover: "/images/collection/beach_resort.svg",
    coverAlt: "Beach Resort collection cover",
    gallery: [
      { src: "/images/collection/001/blue_dress.svg", alt: "Blue dress — Beach Resort" },
      { src: "/images/collection/001/blue_pant.svg", alt: "Blue pants — Beach Resort" },
      { src: "/images/collection/001/yellow_dress.svg", alt: "Yellow dress — Beach Resort" },
      { src: "/images/collection/001/yellow_pant.svg", alt: "Yellow pants — Beach Resort" },
    ],
  },
];
