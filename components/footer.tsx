import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-violet-500 text-white py-10 pt-15">
      <div className="px-15 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Nama & Deskripsi Kos */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Wisma Violet</h3>
          <p className="text-sm">
            Kos putri yang aman dan strategis di Depok, dekat kampus UI. Nyaman,
            bersih, dan lengkap.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Navigasi</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentang" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="#fasilitas" className="hover:underline">
                Fasilitas
              </a>
            </li>
            <li>
              <a href="#kamar" className="hover:underline">
                Kamar
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold mb-2">Kontak</h4>
          <p className="text-sm">
            <MapPin className="inline mr-1" /> Jl. Kedoya Raya No.56 RT 04/03,
            Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424
          </p>
          <p className="text-sm">
            <Phone className="inline mr-1" /> 0857-1700-9228
          </p>
          <p className="text-sm">
            <Mail className="inline mr-1" /> wismaviolet1@gmail.com
          </p>
        </div>
      </div>

      <div className="px-15 text-sm text-gray-300 mt-8">
        &copy; {new Date().getFullYear()} Wisma Violet. All rights reserved.
      </div>
    </footer>
  );
}
