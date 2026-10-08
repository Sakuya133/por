import Image from "next/image";
import Link from "next/link";
import { Tiny5 } from "next/font/google";

import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

// TODO: Add the final product cutouts to these paths when the assets are available.
const newestCollection = [
  {
    src: "/images/collections/blue-dress.png",
    alt: "Blue dress",
  },
  {
    src: "/images/collections/blue-pants.png",
    alt: "Blue pants",
  },
  {
    src: "/images/collections/cream-patterned-dress.png",
    alt: "Cream and yellow patterned dress",
  },
  {
    src: "/images/collections/orange-pants.png",
    alt: "Orange pants",
  },
] as const;

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

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        <Image
          src="/images/background/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <section
          aria-label="Sparks introduction"
          className="relative min-h-[100svh] overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute left-[5vw] top-[23%] h-24 w-28 sm:h-32 sm:w-40 lg:left-[7vw] lg:h-40 lg:w-48"
          >
            <PixelPlus
              color="#F0EACC"
              className="left-0 top-0 w-14 sm:w-20 lg:w-24"
            />
            <PixelPlus
              color="#ED735F"
              className="bottom-0 right-0 w-9 sm:w-12 lg:w-14"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-[16%] left-[8vw] h-24 w-28 sm:h-32 sm:w-40 lg:bottom-[13%] lg:left-[11vw] lg:h-40 lg:w-48"
          >
            <PixelPlus
              color="#303795"
              className="right-0 top-0 w-14 sm:w-20 lg:w-24"
            />
            <PixelPlus
              color="#C8A9DD"
              className="bottom-0 left-0 w-9 sm:w-12 lg:w-14"
            />
          </div>

          <Image
            src="/images/spark_text.png"
            alt="Sparks!"
            width={579}
            height={328}
            priority
            sizes="(max-width: 768px) 72vw, 579px"
            className="absolute left-1/2 top-[43%] h-auto w-[72vw] max-w-[579px] -translate-x-1/2 -translate-y-1/2"
          />

          <a
            href="#newest-collection"
            aria-label="Scroll to newest collection"
            className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 p-3 text-white transition-transform hover:translate-y-1 sm:bottom-8"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 18"
              fill="none"
              className="h-[18px] w-8 drop-shadow-sm"
            >
              <path
                d="M3 3L16 15L29 3"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </section>

        <section
          id="newest-collection"
          aria-labelledby="newest-collection-title"
          className="relative min-h-[100svh] scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32"
        >
          <PixelPlus
            color="#303795"
            className="left-[4vw] top-[13%] z-10 w-12 sm:w-16 lg:left-[5vw] lg:w-20"
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-12">
            <h2
              id="newest-collection-title"
              className={`${tiny5.className} text-center text-[clamp(2.75rem,6vw,5.5rem)] leading-none font-normal text-white drop-shadow-md`}
            >
              Newest Collection
            </h2>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-3 gap-y-12 sm:mt-20 sm:gap-x-10 sm:gap-y-16 lg:gap-x-16 lg:gap-y-20">
              {newestCollection.map((product) => (
                <div
                  key={product.src}
                  className="relative aspect-[3/4] w-full"
                >
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 32vw"
                    className="object-contain drop-shadow-[0_18px_24px_rgba(35,23,19,0.22)]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center sm:mt-20">
              <Link
                href="/collections"
                className={`${tiny5.className} inline-block text-[clamp(2rem,4vw,3.5rem)] leading-none font-normal text-white drop-shadow-md transition-opacity hover:opacity-70`}
              >
                See all collections
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-[5%] right-[3vw] z-10 h-28 w-40 sm:h-36 sm:w-52 lg:bottom-[7%] lg:right-[2vw] lg:h-44 lg:w-56"
          >
            <PixelPlus
              color="#ED735F"
              className="right-[30%] top-0 w-10 sm:w-14 lg:w-16"
            />
            <PixelPlus
              color="#F0EACC"
              className="bottom-0 right-0 w-12 sm:w-16 lg:w-20"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
