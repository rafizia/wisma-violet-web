import { Hospital, TrainFront, University, Store } from "lucide-react";

export default function MapSection() {
  return (
    <section id="lokasi" className="py-7 bg-white">
      <div className="mx-10 md:mx-15">
        <h2 className="text-4xl font-bold text-violet-500 mb-6">Lokasi Kos</h2>
        <p className="text-lg md:text-[21px] font-medium text-gray-700 mb-8">
          Jl. Kedoya Raya No.56 RT 04/03, Pondok Cina, Kecamatan Beji, Kota
          Depok, Jawa Barat 16424
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full aspect-[16/9]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.217020038395!2d106.83690059999999!3d-6.365954200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec13bef9eba9%3A0xbed620a0b2fd7728!2sKost%20Putri%20Wisma%20Violet!5e0!3m2!1sid!2sid!4v1752678686879!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col space-y-5 text-lg md:text-[21px] text-gray-700 font-medium">
            <h3>
              <Hospital className="inline-block mr-2" /> 0.25 km dari Rumah
              Sakit Bunda Margonda
            </h3>
            <h3>
              <University className="inline-block mr-2" /> 0.54 km dari
              Universitas Gunadarma Kampus D
            </h3>
            <h3>
              <TrainFront className="inline-block mr-2" /> 0.62 km dari Stasiun
              Pondokcina
            </h3>
            <h3>
              <TrainFront className="inline-block mr-2" /> 0.81 km dari Stasiun
              Universitas Indonesia
            </h3>
            <h3>
              <Store className="inline-block mr-2" /> 0.83 km dari Margo City
            </h3>
            <h3>
              <University className="inline-block mr-2" /> 1.22 km dari
              Universitas Indonesia
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
