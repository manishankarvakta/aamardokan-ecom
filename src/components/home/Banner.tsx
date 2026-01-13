import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/image/banner1.jpeg"
        alt="Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay (50% opacity) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Fresh Groceries, Delivered Fast
          </h1>
          <p className="mt-2 text-sm sm:text-base opacity-90">
            Shop quality produce, dairy, snacks, and more.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-md bg-white text-emerald-700 px-4 py-2 text-sm font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
