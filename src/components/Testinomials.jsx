import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    quote:
      "Use this free testimonial block that features a header, a description, and quotes arranged in a grid layout. It includes logos along with the names and job titles of the people.",
    author: "Vinod Thapa",
    title: "Entrepreneur",
    image: "founder.jpg",
    logo: "yiicon.png",
  },
  {
    quote:
      "Use this free testimonial block that features a header, a description, and quotes arranged in a grid layout. It includes logos along with the names and job titles of the people.",
    author: "Vinod Thapa",
    title: "Entrepreneur",
    image: "founder.jpg",
    logo: "yiicon.png",
  },
  {
    quote:
      "Use this free testimonial block that features a header, a description, and quotes arranged in a grid layout. It includes logos along with the names and job titles of the people.",
    author: "Vinod Thapa",
    title: "Entrepreneur",
    image: "founder.jpg",
    logo: "yiicon.png",
  },
  {
    quote:
      "Use this free testimonial block that features a header, a description, and quotes arranged in a grid layout. It includes logos along with the names and job titles of the people.",
    author: "Vinod Thapa",
    title: "Entrepreneur",
    image: "founder.jpg",
    logo: "yiicon.png",
  },
  // Add more testimonials here if needed
];

const Testimonials = () => {
  return (
    <div className="bg-neutral-950 py-10">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-12 relative z-10">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative bottom-4 ">
            +
          </span>
          Our Testimonials
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-20 bg-orange-700"></div>
      </div>
      <div className="bg-neutral-950 py-24 px-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-3xl bg-neutral-800 rounded-lg shadow-lg p-8">
                <img
                  className="w-30 h-14"
                  src={testimonial.logo}
                  alt="Company logo"
                />
                <blockquote className="text-xl text-white mb-6 pl-7 text-justify">
                  {testimonial.quote}
                </blockquote>
                <div className="flex justify-center items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-white">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
