import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineViewInAr } from "react-icons/md";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Lost Something?",
    description: "Post your lost item and get help finding it.",
    extraInfo: [
      "Share detailed photos and descriptions.",
      "Connect with nearby helpers instantly.",
      "Receive real-time notifications.",
      "Track the status until recovery.",
    ],
    image: "https://i.ibb.co.com/whpXWSKR/lost-places-5209551-1920.jpg",
  },
  {
    id: 2,
    title: "Found Something?",
    description: "Help others by posting what you've found.",
    extraInfo: [
      "Upload clear images of found items.",
      "Reach owners quickly through the platform.",
      "Keep everyone updated with status changes.",
      "Support community safety and trust.",
    ],
    image: "https://i.ibb.co.com/Cs8SrNcQ/autumn-8620917-1920.jpg",
  },
  {
    id: 3,
    title: "Item Recovered!",
    description: "Mark items as recovered and help others.",
    extraInfo: [
      "Confirm recovered items easily.",
      "Notify community members instantly.",
      "Close cases smoothly.",
      "Celebrate successful recoveries.",
    ],
    image: "https://i.ibb.co.com/SDm3qTGq/labyrinth-1015640-1920.jpg",
  },
];

const MyCarousel = () => {
  return (
    <div className="max-w-[2520px] mx-auto h-[70vh] mb-14 relative">
      <Carousel
        infiniteLoop
        autoPlay
        interval={4500}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        className="h-full"
      >
        {slides.map(({ id, title, description, extraInfo, image }) => (
          <div
            key={id}
            className="relative h-[70vh] w-full rounded-bl-xl rounded-br-xl overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full brightness-75"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>

            {/* Left side text content */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-4 sm:px-6 md:px-16 max-w-xl z-20 text-white space-y-3 sm:space-y-4 md:space-y-6">
              
              {/* Title with gradient */}
              <h2 className="text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight bg-gradient-to-r from-primary via-primary/50 to-white/90 bg-clip-text text-transparent drop-shadow-lg">
                {title}
              </h2>

              {/* Description (responsive line-height & padding) */}
              <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-md leading-snug sm:leading-relaxed">
                {description}
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-1 md:space-y-2 max-w-md text-xs sm:text-sm md:text-lg leading-snug sm:leading-relaxed">
                {extraInfo.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>

              <Link to="allItems" aria-label={`View ${title}`}>
                <button className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition text-xs sm:text-sm md:text-base">
                  <MdOutlineViewInAr className="w-4 h-4 md:w-5 md:h-5" />
                  View Item
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
