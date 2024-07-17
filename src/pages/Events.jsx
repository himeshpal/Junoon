import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Events = () => {
  return (
    <>
      <div
        className="min-h-[40vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/de5psimvg/image/upload/v1720521891/image_3_1_p7jsd1.png')",
        }}
      >
        <h1 className="  pt-4 pb-2 text-center text-7xl font-bold font-abc text-white">
          <span className="text-orange-600 font-abc">E</span>ven
          <span className="text-orange-600 font-abc">ts</span>
        </h1>
      </div>
      <div className="bg-neutral-950">
        <h1 className="text-white text-justify font-abc px-40 py-20 text-2xl">
          At <span className="text-yellow-500">Junoon</span>, we organize
          various events to enrich the lives of our children and foster a sense
          of community. These events are designed to ignite creativity,
          encourage teamwork, and build confidence, ensuring our children grow
          into well-rounded individuals. We believe that education goes beyond
          academics, and these activities play a crucial role in holistic
          development. Our events include annual celebrations, field trips,
          sports activities, and creative workshops, each providing unique
          opportunities for learning and personal growth.
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C8D9piSy0eW/?img_index=1"
              width={350}
            />
          </div>
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C764VO6yX1T/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={350}
            />
          </div>
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CeEYC2nj-p6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={350}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C61Ps7qybP_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={350}
            />
          </div>
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C5SjsgnSk02/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={350}
            />
          </div>
          <div
            className="shadow-[0_0_10px_theme('colors.orange.800')]"
            style={{ margin: "50px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/Cv9UJJoSXNk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={350}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
