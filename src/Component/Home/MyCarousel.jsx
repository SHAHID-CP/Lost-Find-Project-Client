import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineViewInAr, MdCheckCircle } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";

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
    image: "https://i.ibb.co/whpXWSKR/lost-places-5209551-1920.jpg",
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
    image: "https://i.ibb.co/Cs8SrNcQ/autumn-8620917-1920.jpg",
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
    image: "https://i.ibb.co/SDm3qTGq/labyrinth-1015640-1920.jpg",
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-[2520px] mx-auto h-[70vh] relative">
      <Carousel
        infiniteLoop
        autoPlay
        interval={4500}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        className="h-full"
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map(({ id, title, description, extraInfo, image }, index) => (
          <div key={id} className="relative h-[70vh] w-full overflow-hidden">
            {/* Background */}
            <motion.img
              src={image}
              alt={title}
              className="object-cover w-full h-full filter blur-sm brightness-75"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={
                currentSlide === index
                  ? { scale: 1, opacity: 1 }
                  : { scale: 1.1, opacity: 0 }
              }
              transition={{ duration: 1 }}
            />

            {/* Center Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-20 z-20 text-white space-y-4 sm:space-y-5 md:space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                currentSlide === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8 }}
            >
              {/* Title */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/50 to-white/90 bg-clip-text text-transparent drop-shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={currentSlide === index ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {title}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-xs sm:text-sm md:text-lg text-gray-200 max-w-xs sm:max-w-xl md:max-w-2xl leading-relaxed"
                initial={{ y: -10, opacity: 0 }}
                animate={currentSlide === index ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {description}
              </motion.p>

              {/* Extra Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 max-w-2xl">
                {extraInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md text-xs sm:text-sm md:text-lg"
                    custom={idx}
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    variants={listVariants}
                  >
                    <MdCheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {info}
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={currentSlide === index ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link to="allItems" aria-label={`View ${title}`}>
                  <button className="cursor-pointer inline-flex items-center gap-2 sm:gap-3 border-2 border-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform text-white shadow-lg text-xs sm:text-base md:text-lg">
                    <MdOutlineViewInAr className="w-4 sm:w-6 h-4 sm:h-6" />
                    Explore Items
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
