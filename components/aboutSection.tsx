export default function AboutSection() {
  return (
    <section id="tentang" className="py-10 bg-white">
      <div className="px-15">
        <h2 className="text-4xl font-bold text-violet-500 mb-6">
          Tentang Wisma Violet
        </h2>
        <iframe
          className="text-center mx-auto mb-6 w-full md:w-1/2"
          height={315}
          src="https://www.youtube.com/embed/A7GbtwECGoo?si=_PLu3UjX387IUlAc"
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p className="text-gray-700 leading-relaxed text-[21px] font-medium">
          Wisma Violet adalah kos khusus putri yang berlokasi strategis di dekat
          Kampus UI, Depok. Menyediakan fasilitas lengkap, lingkungan tenang,
          serta keamanan 24 jam dengan akses mudah ke transportasi dan tempat
          makan.
        </p>
      </div>
    </section>
  );
}
