import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <div className="bg-black pb-10 ">
      <div
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/de5psimvg/image/upload/v1723726525/images_ufnk9l.png)",
        }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-extrabold pt-32 pl-10 ml-20 text-[5.9rem] text-white "
        >
          Welcome to
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-extrabold pl-10 ml-20 text-[5.9rem] text-white "
        >
          <span className="text-orange-500"> Junoon </span> Foundation{" "}
        </motion.h1>
      </div>
      <div className="pt-20 text-white font-['Roboto',_san-serif] text-start text-xl px-20 mx-20 font-light ">
        <p className="pb-7">
          Since our inception in 2018,
          <span className="font-bold"> Junoon Foundation </span> has been a
          beacon of hope for Mumbai's homeless children. Our name, "Junoon,"
          meaning passion or obsession in Hindi, reflects our unwavering
          commitment to transforming lives through the power of education we
          believe that every child, regardless of their circumstances, deserves
          the opportunity to dream, learn, and thrive. Our mission is to create
          safe havens for homeless children across Mumbai, providing them not
          just with education, but with the tools to recognize and harness their
          immense potential.
        </p>

        <p className="py-7">
          We understand that true empowerment extends beyond academics. That's
          why our holistic approach encompasses Life skills training,Mentorship
          programs, Extracurricular activities to nurture talents, Counseling
          services for emotional support, Vocational training for older
          students.
        </p>

        <p className="py-7">
          <ul className="list-disc list-inside">
            <li>
              Currently supporting approximately 100 students across 4 locations
              in Mumbai
            </li>
            <li>
              Bridging the gap between quality education and those who need it
              most
            </li>
            <li>
              Providing daily nutritious meals to ensure proper nourishment
            </li>
            <li>
              Conducting regular health check-ups to maintain overall well-being
            </li>
            <li>
              Distributing essential groceries to support families and
              communities
            </li>
          </ul>
        </p>

        <p className="py-7">
          Since 2018, we've witnessed incredible transformations. Children who
          once struggled on the streets are now excelling in classrooms,
          discovering their passions, and envisioning brighter futures. Each
          success story fuels our determination to expand our reach and impact
          more lives. Junoon Foundation invites you to be part of this
          transformative journey. Whether through volunteering, donations, or
          spreading awareness, your contribution can help us empower more
          children to break the cycle of poverty through education Thank you for
          your interest in Junoon Foundation. Together, we can create a future
          where every child has the opportunity to shine.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
