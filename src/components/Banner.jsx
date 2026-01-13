import { useEffect, useState } from "react";
import { Link } from "react-router";

const banners = [
  {
    id: 1,
    subtitle: "NEW COLLECTION",
    title: "Elegant Dresses",
    description: "Explore trending styles starting from ₹1999",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    position: "center",
  },
  {
    id: 2,
    subtitle: "FESTIVE WEAR",
    title: "Ethnic & Party Dresses",
    description: "Flat 30% OFF on festive collections",
    image:
      "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    position: "center",
  },
  {
    id: 3,
    subtitle: "SUMMER SALE",
    title: "Casual Wear",
    description: "Light, stylish & comfortable dresses",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200",
    position: "center",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-400 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: banner.position,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-8 md:px-20 text-white max-w-xl">
              <p className="text-sm tracking-widest mb-2 text-pink-200">
                {banner.subtitle}
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {banner.title}
              </h1>

              <p className="mb-6 text-lg">
                {banner.description}
              </p>

              <Link
                to="/product"
                className="inline-block bg-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
              >
                Shop Dresses
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-pink-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
