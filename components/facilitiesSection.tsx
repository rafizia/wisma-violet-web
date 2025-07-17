import {
  Wifi,
  CircleParking,
  Refrigerator,
  CookingPot,
  AirVent,
  Shirt,
} from "lucide-react";

const facilities = [
  { name: "WiFi", icon: <Wifi className="w-10 h-10 text-violet-500" /> },
  { name: "Area Jemur", icon: <Shirt className="w-10 h-10 text-violet-500" /> },
  {
    name: "Parkir Motor",
    icon: <CircleParking className="w-10 h-10 text-violet-500" />,
  },
  {
    name: "Kulkas",
    icon: <Refrigerator className="w-10 h-10 text-violet-500" />,
  },
  { name: "Dapur", icon: <CookingPot className="w-10 h-10 text-violet-500" /> },
  { name: "AC*", icon: <AirVent className="w-10 h-10 text-violet-500" /> },
];

export default function FacilitySection() {
  return (
    <section id="fasilitas" className="py-10 bg-white">
      <div className="px-10 md:px-15 mx-auto">
        <h2 className="text-4xl font-bold text-violet-500 mb-10">Fasilitas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-xl"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-violet-500 font-bold text-xl pt-3">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
