import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Fatima Ahmed",
    review: "As a student from Dhaka, I was worried about the visa process for Canada. This agency handled everything perfectly. I'm now studying at my dream university!",
    rating: 5,
  },
  {
    name: "Rahim Khan",
    review: "Excellent guidance for studying in the UK. They helped me find a scholarship that made it all possible. Highly recommended for any Bangladeshi student.",
    rating: 5,
  },
  {
    name: "Ayesha Siddika",
    review: "The team was very patient and answered all my questions. They made the complex application process for Australia feel so simple. Thank you!",
    rating: 4,
  },
  {
    name: "Imran Hossain",
    review: "Their counselors are very knowledgeable about European universities. I got admission with a full scholarship. I am very grateful for their support.",
    rating: 5,
  },
  {
    name: "Jannatul Ferdous",
    review: "A fantastic team that genuinely cares about your future. They guided me through every step, from choosing the right course to the visa application. Highly recommended!",
    rating: 5,
  },
  {
    name: "Abdullah Al Mamun",
    review: "Their expertise in handling applications for competitive US universities is unmatched. They helped me craft a perfect application. So grateful!",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Reviews = () => {
  return (
    <div className="w-full h-auto py-28 opp-bg">
       <div className="opp-mid"/>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100, x:200 }}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 poppins">
            Trusted by Bangladeshi Students
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Our commitment to student success is reflected in the positive feedback we receive from students across Bangladesh.
          </p>
        </motion.div>
        
        <div className="relative">
          <Marquee 
            pauseOnHover={true} 
            speed={40}
            gradient={true}
            gradientColor={[248, 251, 255]}
            gradientWidth={100}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[320px] md:w-[380px] h-auto bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg mx-4 p-6 flex flex-col justify-between opp-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md flex items-center justify-center bg-blue-100 text-blue-800 text-2xl font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 poppins">
                      {review.name}
                    </h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 .5l2.939 5.635 6.572.955-4.756 4.455 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-base">"{review.review}"</p>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
