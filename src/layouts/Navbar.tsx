import Image from "next/image";
import Link from "next/link";
import { Tiny5 } from "next/font/google";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid h-24 max-w-[1440px] grid-cols-3 items-center px-8 md:px-16"
      >
        <Link
          href="/about"
          className={`${tiny5.className} justify-self-start text-[53.75px] font-normal text-[#F0EACC] transition-opacity hover:opacity-70`}
        >
          About
        </Link>

        <Link href="/" aria-label="Back to home" className="justify-self-center">
          <Image
            src="/images/navbar/spark.png"
            alt="Website logo"
            width={88}
            height={88}
            priority
            className="h-[58px] w-[58px] object-contain md:h-[70px] md:w-[70px]"
          />
        </Link>

        <Link
          href="/collections"
          className={`${tiny5.className} justify-self-end text-[53.75px] font-normal text-[#F0EACC] transition-opacity hover:opacity-70`}
        >
          Collections
        </Link>
      </nav>
    </header>
  );
}
