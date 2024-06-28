const Problem = () => {
  return (
    <div className="bg-black pt-20">
      <h1 className="text-yellow-400 font-bold text-center text-6xl pb-10">
        The Problem
      </h1>
      <div className="py-10 pl-20 ml-10 text-white flex px-20  mr-20 ">
        <div className=" space-y-2 text-justify pr-10 mr-20 ">
          <h1 className="font-bold text-lg text-orange-500">
            The Harsh Reality of Deprivation
          </h1>
          <p>
            In the heart of a bustling metropolitan city, thousands of children
            endure lives marked by extreme deprivation within shantytowns,
            lacking even the most basic amenities. These young souls shoulder
            the burdens of familial responsibilities, acting as both
            breadwinners and caretakers.
          </p>
          <h1 className="font-bold text-lg text-orange-500">
            Strenuous Labor and Social Stigma
          </h1>
          <p>
            Their days are spent laboring in garbage dumps, begging, or peddling
            goods on the streets. Trapped in this relentless cycle, they face
            not only harsh conditions but also the stigma of societal
            ostracization, severely impacting their mental well-being and
            overall development.
          </p>
          <h1 className="font-bold text-lg text-orange-500">
            Living in Dangerous Conditions
          </h1>
          <p>
            Inhabitants of unclean and perilous surroundings, these children are
            at high risk of heinous crimes such as kidnapping and physical
            abuse. Despite their immense potential, the pursuit of education
            remains a distant dream, as they are pushed to the margins of
            society.
          </p>
          <h1 className="font-bold text-lg text-orange-500">
            The Need for Urgent Intervention
          </h1>
          <p>
            Urgent and comprehensive intervention is necessary to uplift these
            young lives from neglect. By addressing their needs and recognizing
            their potential, we can help them thrive, break free from the cycle
            of adversity, and transform their futures.
          </p>
        </div>

        <div className="">
          <img
            className="w-full  rounded-2xl"
            src="./problem.png"
            alt="The Problem"
          />
        </div>
      </div>
    </div>
  );
};

export default Problem;
