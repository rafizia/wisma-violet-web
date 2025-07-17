import Image from "next/image";

const images = [
  "/gallery/IMG_20231024_123248081.MP.jpg",
  "/gallery/IMG_20231024_120442392.jpg",
  "/gallery/IMG_20231024_114019465 (1).jpg",
  "/gallery/IMG_20231024_121954946.MP.jpg",
  "/gallery/IMG_20231024_122015322.MP.jpg",
  "/gallery/IMG_20231024_121236397.MP.jpg",
];

export default function GallerySection() {
  return (
    <section id="galeri" className="py-10 bg-white">
      <div className="mx-auto px-10 md:px-15">
        <h2 className="text-4xl font-bold text-violet-500 mb-10">Galeri Kos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded shadow hover:scale-105 hover:z-10 transition duration-300"
              width={500}
              height={500}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#kamar"
            className="bg-violet-500 text-white px-6 py-5 rounded-lg w-full md:w-auto inline-block hover:bg-violet-700 transition duration-300 text-lg font-semibold"
          >
            Lihat Gambar Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}
