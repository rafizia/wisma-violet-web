export default function ContactSection() {
  return (
    <section id="kontak" className="py-15 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-violet-500 mb-6">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 mb-4 font-medium text-lg">
          Tertarik untuk melihat atau memesan kamar? Jangan ragu untuk
          menghubungi kami!
        </p>

        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://wa.me/6285717009228"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg inline-block font-semibold transition duration-300"
          >
            Hubungi via WhatsApp
          </a>

          <div className="text-gray-700 text-lg mt-4 font-medium">
            <p>Telepon: 0857-1700-9228</p>
            <p>Email: wismaviolet1@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
