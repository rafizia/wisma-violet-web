"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Room = {
  name: string;
  price: string;
  images: string[];
  features: string[];
};

export default function RoomCard({ room }: { room: Room }) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <div className="bg-white rounded-lg py-4 hover:shadow-md shadow transition w-full max-w-sm mx-auto overflow-hidden">
      <div className="relative">
        {/* Tombol Panah */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full hover:bg-violet-500 transition duration-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full hover:bg-violet-500 transition duration-300"
        >
          <ChevronRight />
        </button>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider rounded overflow-hidden">
          {room.images.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={src}
                alt={`${room.name} ${i + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-violet-500 mb-4">
          {room.name}
        </h3>
        <p className="text-gray-600 mb-2 font-semibold">
          Mulai dari <strong>{room.price}</strong> / bulan
        </p>
        <ul className="text-sm text-gray-500 mb-4 list-disc list-inside font-semibold">
          {room.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
