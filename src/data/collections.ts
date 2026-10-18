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
    cover: null,
    coverAlt: "Beach Resort collection cover",
  },
];
