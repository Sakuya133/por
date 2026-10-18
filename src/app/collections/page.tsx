import Image from "next/image";
import Link from "next/link";
import { Tiny5 } from "next/font/google";

import { collections, type Collection } from "@/data/collections";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

type PixelPlusProps = {
  className: string;
  color: string;
};

function PixelPlus({ className, color }: PixelPlusProps) {
  return (
    <span
      aria-hidden="true"
      className={`absolute aspect-square ${className}`}
      style={{ color }}
    >
      <span className="absolute inset-y-0 left-1/3 w-1/3 bg-current" />
      <span className="absolute inset-x-0 top-1/3 h-1/3 bg-current" />
    </span>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="block w-full max-w-[549px] focus-visible:ring-2 focus-visible:ring-[#F0EACC] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2B2A7A]"
    >
      <figure>
        <div className="relative aspect-[4/3] w-full">
          {collection.cover && (
            <Image
              src={collection.cover}
              alt={collection.coverAlt}
              fill
              sizes="(max-width: 767px) calc(100vw - 5.5rem), (max-width: 1023px) calc(50vw - 6rem), 549px"
              className="object-cover"
            />
          )}
        </div>
        <figcaption
          className={`${tiny5.className} mt-4 text-center text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-normal text-[#F0EACC]`}
        >
          {collection.id} - {collection.title}
        </figcaption>
      </figure>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100svh] flex-1 overflow-hidden bg-[#2B2A7A]">
        <div className="mx-auto max-w-[1440px] px-6 pt-36 pb-40 sm:px-12 lg:px-16">
          <div className="relative pl-10 sm:pl-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-8 left-0 h-24 w-8 sm:w-14"
            >
              <PixelPlus
                color="#303795"
                className="left-0 top-0 w-5 sm:w-10"
              />
              <PixelPlus
                color="#ED735F"
                className="right-0 top-9 w-4 sm:w-7"
              />
              <PixelPlus
                color="#F0EACC"
                className="bottom-0 left-1 w-3 sm:w-5"
              />
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-16">
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-5 bottom-8 h-20 w-24 sm:right-12 sm:bottom-10 sm:h-28 sm:w-32"
        >
          <PixelPlus
            color="#ED735F"
            className="left-0 top-0 w-7 sm:w-10"
          />
          <PixelPlus
            color="#F0EACC"
            className="right-0 top-8 w-8 sm:top-12 sm:w-12"
          />
          <PixelPlus
            color="#303795"
            className="bottom-0 left-9 w-5 sm:left-14 sm:w-7"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
