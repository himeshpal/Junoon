import React from "react";
import { useEffect } from "react";

const Other = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <>
      <div
        id="top"
        className="min-h-[40vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/de5psimvg/image/upload/v1720461351/image_fxgztd.png'), url('https://res.cloudinary.com/de5psimvg/image/upload/v1720461330/image_1_bmwdcf.png')",
          backgroundSize: "50% 100%", // each image takes 50% width and full height
          backgroundPosition: "left, right", // first image on the left, second on the right
        }}
      >
        <h1
          name="health"
          id="health"
          className=" pl-[104px] pt-4 pb-2 text-center text-7xl font-bold font-abc text-white"
        >
          Health <span className="text-orange-600 font-abc">&</span> Nutrition
        </h1>
      </div>
      <div className="bg-black px-20 py-20">
        <p className="px-32 font-light text-2xl text-justify text-white font-['Roboto',_sans-serif]">
          Imagine a world where every child gets to skip hop through life with a
          full heart and a healthy body. But for underprivileged children, this
          simple dream can be a hurdle race. Limited access to healthcare and
          unsteady meals can leave them vulnerable to illness and hinder their
          growth. At Junoon, we believe every child deserves a fighting chance
          regardless of their background. We work tirelessly to bridge the gap
          for underprivileged children by providing access to healthcare,
          nutritious meals throigh our programs such as
        </p>
      </div>
      {/* <div className="w-3/4 mx-auto border-t-2 border-yellow-400" /> */}
      {/* <div className="flex flex-wrap gap-10 justify-center py-10 pb-20 bg-black">
        <img src="ss3.png" className="w-74 h-80 object-cover" />
        <img src="ss2.png" className="w-74 h-80 object-cover" />
        <img src="ss1.png" className="w-74 h-80 object-cover" />
        <img src="ss4.png" className="w-74 h-80 object-cover" />
      </div> */}
      <div className="bg-neutral-950">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="font-bold text-center font-abc text-5xl  pt-8 pb-2 text-orange-600">
          Monthly Health checkup
        </h1>
        <div className="px-20 py-5  ">
          <p className="font-semibold text-xl text-justify px-32 pt-10 font-['Roboto',_san-serif] text-white">
            A young life growing up in adverse conditions can be a victim of
            their weak immunity. This is the reason we aid them with monthly
            full body checkups and necessary medical assistance to ensure that
            they are in good health which in turn will assist them in working
            towards their brighter future.
          </p>
          <p className=" font-semibold text-xl text-justify px-32 pt-10 font-['Roboto',_san-serif] text-white">
            {" "}
            We at Junoon Foundation have been working every single day for the
            last 4 years ensuring a better life for the hundreds of children
            living on the streets of Mumbai. We have spent years trying to
            understand their challenges and come up with rational solutions that
            can be easily adopted in their lives
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center py-10 pb-20 bg-neutral-950">
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720502622/IMG-20230219-WA0005_ltk4tl.jpg"
            className="w-74 h-80 object-cover"
          />
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720502083/Screenshot_2024-07-09_095923_ueo6uo.png"
            className="w-74 h-80 object-cover"
          />

          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720502528/Screenshot_2024-07-08_224847_toazdt.png"
            className="w-74 h-80 object-cover"
          />
        </div>
      </div>
      <div className="bg-neutral-900">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="font-bold text-center font-abc text-5xl  pt-10 pb-4 text-orange-600">
          Daily meals
        </h1>
        <div className="flex pt-20 gap-10 justify-center pl-40 py-10 pb-20 bg-neutral-900">
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720505541/food_k5kifk.jpg"
            className="w-74 h-80 object-cover"
          />
          <p className="font-medium text-2xl text-justify px-32 pt-10 font-['Roboto',_san-serif] text-white">
            These children are often deprived of the nutrition required at their
            age to grow and develop at par with every other child of their age.
            Hence the team of volunteers here makes sure to provide them with
            fresh home-cooked meals daily after class.
          </p>
        </div>
      </div>
      <div className="bg-neutral-950">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="font-bold text-center font-abc text-5xl  pt-10 pb-5 text-orange-600">
          Monthly Grocery
        </h1>
        <div>
          <p className="font-medium text-xl text-justify px-48 pt-10 font-['Roboto',_san-serif] text-white">
            Trust is a very important factor connected to a child’s education
            and well-being. Every parent wants to have faith in the institution
            that is educating their child. Also, the poor conditions of these
            families put them in a vulnerable situation to promote their ward’s
            literacy. So as an incentive for the families to send their children
            to class we ensure to supply monthly grocery donations.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center py-10 pb-24 bg-neutral-950">
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720506663/Screenshot_2024-07-09_115548_tonqjv.png"
            className="w-74 h-80 object-cover"
          />
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720506645/Junoon_Foundation_has_embarked_on_a_noble_mission_amid_the_COVID-19_pandemic_with_its_Monthly_Ration_Kit_initiative._Recognizing_the_struggles_faced_by_families_of_our_students_to_ensure_sufficient_food_we_beli_utmd1q.png"
            className="w-74 h-80 object-cover"
          />

          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720505485/Mg_hk8f9t.jpg"
            className="w-74 h-80 object-cover"
          />
        </div>
      </div>
      <div className="bg-neutral-900">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="font-bold text-center text-5xl font-abc pt-10 pb-2 text-orange-600">
          Our Impact
        </h1>
      </div>
      <div className="bg-black px-10"></div>
    </>
  );
};

export default Other;
