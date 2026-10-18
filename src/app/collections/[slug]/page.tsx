import Image from "next/image";
import { Tiny5 } from "next/font/google";
import { notFound } from "next/navigation";

import { collections } from "@/data/collections";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map(({ slug }) => ({ slug }));
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[100svh] flex-1 bg-[#2B2A7A]">
        <article className="mx-auto max-w-[1440px] px-6 pt-36 pb-24 sm:px-12 lg:px-16">
          <h1
            className={`${tiny5.className} text-[clamp(3rem,8vw,6.5rem)] leading-none font-normal text-[#F0EACC]`}
          >
            {collection.title}
          </h1>

          {collection.cover && (
            <div className="relative mt-10 aspect-[4/3] w-full max-w-[1098px]">
              <Image
                src={collection.cover}
                alt={collection.coverAlt}
                fill
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1199px) 80vw, 1098px"
                className="object-cover"
              />
            </div>
          )}

          {collection.description && (
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#F0EACC] sm:text-xl">
              {collection.description}
            </p>
          )}

          {collection.gallery && collection.gallery.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collection.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] w-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 45vw, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
