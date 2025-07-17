import Image from "next/image";
import Header from "@/components/header";
import AboutSection from "@/components/aboutSection";
import FacilitySection from "@/components/facilitiesSection";
import RoomSection from "@/components/roomSection";
import GallerySection from "@/components/gallerySection";
import MapSection from "@/components/mapSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-10">
        <img
          src="/cover/violet.png"
          alt="Wisma Violet Cover"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="bg-white py-10 px-10 md:px-15">
        <div>
          <h1 className="text-4xl font-bold text-violet-500 mb-4">
            Wisma Violet
          </h1>
          <p className="text-[21px] text-gray-700 font-medium">
            Tempat tinggal nyaman, aman, dan strategis untuk mahasiswi dan
            karyawati.
          </p>
        </div>
        <div className="text-center mt-5 md:text-left">
          <a
            href="#kamar"
            className="bg-violet-500 text-white w-full md:w-auto rounded-xl inline-block py-5 md:px-40 hover:bg-violet-700 transition duration-300 text-lg font-semibold"
          >
            Lihat Kamar
          </a>
        </div>
      </section>
      <AboutSection />
      <MapSection />
      <FacilitySection />
      <RoomSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
