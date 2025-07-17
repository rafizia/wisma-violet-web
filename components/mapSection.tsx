export default function MapSection() {
  return (
    <section id="lokasi" className="py-7 bg-white">
      <div className="mx-15">
        <h2 className="text-4xl font-bold text-violet-500 mb-6">Lokasi Kos</h2>
        <p className="text-[21px] font-medium text-gray-700 mb-8">
          Jl. Kedoya Raya No.56 RT 04/03, Pondok Cina, Kecamatan Beji, Kota
          Depok, Jawa Barat 16424
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.217020038395!2d106.83690059999999!3d-6.365954200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec13bef9eba9%3A0xbed620a0b2fd7728!2sKost%20Putri%20Wisma%20Violet!5e0!3m2!1sid!2sid!4v1752678686879!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
