import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f8f2d2] text-[#252b83]">
      {/* Strip gambar kain di bagian paling atas */}
      <div className="relative h-2 w-full overflow-hidden">
        <Image
          src="/images/footer-textile.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto grid min-h-[540px] max-w-[1920px] grid-cols-1 gap-14 px-8 py-24 md:grid-cols-2 md:items-center md:px-16 lg:px-32">
        <div className="flex flex-col gap-28">
          <Image
            src="/images/spark_text.png"
            alt="Sparks!"
            width={579}
            height={328}
            className="h-auto w-48 md:w-64"
          />

          <a
            href="https://www.instagram.com/sparks_ind/"
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-5 text-2xl transition-opacity hover:opacity-65 md:text-4xl"
            aria-label="Instagram Sparks"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-9 w-9 md:h-11 md:w-11"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" />
            </svg>

            <span>@sparks_ind</span>
          </a>
        </div>

        <p className="max-w-3xl text-2xl leading-[1.45] md:text-4xl">
          Sparks! is an Indonesian brand created for those of you who sparkle.
          We explore heritage, culture, and traditional textiles, reimagining
          them in ways that feel fresh, bold, and full of life.
        </p>
      </div>
    </footer>
  );
}
