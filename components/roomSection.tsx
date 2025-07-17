import RoomCard from "./roomCard";

const rooms = [
  {
    name: "Regular Single A",
    price: "Rp 1.300.000",
    images: [
      "/rooms/regular_A/Screenshot 2025-07-17 111025.png",
      "/rooms/regular_A/Screenshot 2025-07-17 111034.png",
      "/rooms/regular_A/Screenshot 2025-07-17 111043.png",
      "/rooms/regular_A/Screenshot 2025-07-17 111051.png",
      "/rooms/regular_A/Screenshot 2025-07-17 111059.png",
      "/rooms/regular_A/Screenshot 2025-07-17 111107.png",
    ],
    features: [
      "Kasur Single",
      "Meja",
      "Kamar Mandi Dalam",
      "Lemari",
      "Termasuk Listrik",
    ],
  },
  {
    name: "Regular Single B",
    price: "Rp 1.150.000",
    images: [
      "/rooms/regular_B/fe123ef9-d9b.jpg",
      "/rooms/regular_B/556b2779-5e4.jpg",
      "/rooms/regular_B/d2d672b8-9c2.jpg",
      "/rooms/regular_B/4e27bad9-c32.jpg",
      "/rooms/regular_B/798b3489-3eb.jpg",
    ],
    features: ["Kasur queen", "Meja besar", "Kamar mandi dalam", "AC", "WiFi"],
  },
  {
    name: "Regular Single C",
    price: "Rp 1.200.000",
    images: [
      "/rooms/regular_C/2ce92ef8-75f.jpg",
      "/rooms/regular_C/018b5ad2-bda.jpg",
      "/rooms/regular_C/4c237fb1-80b.jpg",
      "/rooms/regular_C/ed41b07a-9a9.jpg",
      "/rooms/regular_C/636de9b6-2c1.jpg",
    ],
    features: [
      "Kasur king",
      "Lemari besar",
      "Kamar mandi dalam",
      "AC",
      "Balkon",
      "WiFi",
    ],
  },
];

export default function RoomSection() {
  return (
    <section id="kamar" className="py-10 bg-white">
      <div className="px-15 mx-auto">
        <h2 className="text-4xl font-bold text-violet-500 mb-10">
          Tipe Kamar & Harga
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#kamar"
            className="bg-violet-500 text-white px-6 py-5 rounded-lg w-full md:w-auto inline-block hover:bg-violet-700 transition duration-300 text-lg font-semibold"
          >
            Lihat Tipe Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}
