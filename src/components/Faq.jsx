import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: "What is I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 2,
      question: "What is I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 3,
      question: "What is I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 4,
      question: "What is I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 5,
      question: "What is I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
  ];

  return (
    <div className=" h-screen bg-neutral-950 flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1400px] bg-neutral-950 p-8 rounded-lg shadow-md">
        <h2 className="text-5xl mb-6 pl-4 pb-5 text-yellow-500 font-abc">
          Frequently Asked Questions
        </h2>
        {questions.map((q) => (
          <div
            key={q.id}
            className="mb-4 text-white font-abc text-2xl last:mb-0"
          >
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-black rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            {activeQuestion === q.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 1 }}
                className="mt-2 font-bold text-2xl text-orange-500 ml-4"
              >
                <p>{q.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
