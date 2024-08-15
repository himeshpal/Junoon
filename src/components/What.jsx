import Happycard from "../layouts/happy";

const What = () => {
  return (
    <div className="py-5  bg-neutral-950 ">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-14 ">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative  ">
            +
          </span>
          WHAT WE DO
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-24 bg-orange-700"></div>
      </div>
      <div className="text-justify font-sans text-[1.32rem] font-semibold text-white px-40 pb-14 ">
        <p>
          we bring education to the children where they live through our
          makeshift classes held from Monday to Saturday. We prepare these
          children for school enrollment and support them to stay in school. Our
          comprehensive programs include daily meals, monthly grocery drives,
          health check-ups, assistance with documentation like Aadhaar drives,
          extracurricular activities, annual events, and field trips. Our goal
          is to ensure these children experience the joys and opportunities of
          childhood.
        </p>
      </div>
      <div className="flex flex-wrap gap-1 gap-y-1 justify-center">
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537975/Untitled_design_5_j9x0sk.png" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537971/IMG-20230517-WA0012_ep3k4l.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1720705784/jucopy_bqc5tz.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537969/Self_clour_art_ywu90c.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537970/Festival_uomy9x.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721538969/IMG_1882_Original_b7lilo.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537977/Untitled_design_4_epy4p9.png" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537974/_DSC9204-1_vmmles.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721537971/Arts_rfhcel.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721538965/IMG-20200228-WA0032_dsbwhv.jpg" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721538910/IMG_20220421_110702_vyhile.png" />
        <Happycard src="https://res.cloudinary.com/de5psimvg/image/upload/v1721539921/IMG_20220722_104826_o43uxr.jpg" />
      </div>
    </div>
  );
};
export default What;
