
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2023",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience."
    },
    {
      year: "2021",
      title: "Frontend Developer",
      company: "StartupXYZ",
      description: "Built responsive web applications and collaborated with designers to create intuitive user interfaces."
    },
    {
      year: "2020",
      title: "Computer Science Graduate",
      company: "University of Technology",
      description: "Graduated with honors, specializing in software engineering and web technologies."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 3+ years of experience creating innovative web solutions. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Started as a curious student exploring code, evolved into a full-stack developer 
                passionate about creating seamless digital experiences. I believe in writing 
                clean, maintainable code and staying updated with the latest technologies.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                "Great software is not just about functionality—it's about creating 
                experiences that feel natural and delightful. Every line of code should 
                serve a purpose and contribute to the bigger picture."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Experience Timeline</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-gradient-to-b from-cyan-500 to-purple-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-cyan-400 font-semibold text-sm">{item.year}</div>
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <div className="text-purple-400 text-sm mb-2">{item.company}</div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
