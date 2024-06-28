const Aboutus = () => {
  return (
    <div className="bg-black ">
      <div
        className="min-h-[30vh]  justify-center flex flex-col  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(./images.jpg)",
        }}
      >
        <h1 className="font-bold pl-20 ml-20 text-6xl text-white ">
          Welcome to <span className="text-orange-500"> Junoon </span>{" "}
          Foundation{" "}
        </h1>
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
