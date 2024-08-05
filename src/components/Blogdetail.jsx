import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { motion } from "framer-motion";

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const blogUrl = `http://localhost:5173/blogs/${id}`;
  const title = data.data.attributes.Title;
  console.log(data);

  return (
    <div id="top">
      <div className="review-card text-white bg-neutral-950 px-10 ">
        <div className="flex items-center justify-center">
          <div className="px-10">
            <h2 className="font-bold text-[2.15rem] hover:underline">
              {title}
            </h2>
            <div className="flex pt-10 pl-4 space-x-5 mt-4">
              <h1 className="pt-1 text-lg">Share On:</h1>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 15px 5px rgba(66, 103, 178, 0.7)",
                  borderRadius: "50%",
                }}
              >
                <FacebookShareButton
                  url={blogUrl}
                  quote={title}
                  hashtag="#portfolio"
                >
                  <FacebookIcon size={50} round={true} />
                </FacebookShareButton>
              </motion.div>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 15px 5px rgba(29, 161, 242, 0.7)",
                  borderRadius: "50%",
                }}
              >
                <TwitterShareButton
                  url={blogUrl}
                  title={title}
                  hashtags={["portfolio"]}
                >
                  <TwitterIcon size={50} round={true} />
                </TwitterShareButton>
              </motion.div>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 15px 5px rgba(0, 119, 181, 0.7)",
                  borderRadius: "50%",
                }}
              >
                <LinkedinShareButton url={blogUrl} title={title}>
                  <LinkedinIcon size={50} round={true} />
                </LinkedinShareButton>
              </motion.div>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 15px 5px rgba(34, 167, 240, 0.7)",
                  borderRadius: "50%",
                }}
              >
                <TelegramShareButton url={blogUrl} title={title}>
                  <TelegramIcon size={50} round={true} />
                </TelegramShareButton>
              </motion.div>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 15px 5px rgba(37, 211, 102, 0.7)",
                  borderRadius: "50%",
                }}
              >
                <WhatsappShareButton url={blogUrl} title={title}>
                  <WhatsappIcon size={50} round={true} />
                </WhatsappShareButton>
              </motion.div>
            </div>
          </div>

          <img
            src={`http://localhost:1337${data.data.attributes.Coverimage.data.attributes.formats.medium.url}`}
            alt={title}
            className="h-[520px] w-[760px] pr-10 pt-10 "
          />
        </div>
        <div className="pt-24">
          <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
          <p className="mt-4 px-36 py-20 text-2xl font-light text-justify">
            {data.data.attributes.Description}
            {/* data.data.attributes.Content[0].children[1].url */}
          </p>
        </div>
      </div>
    </div>
  );
}
