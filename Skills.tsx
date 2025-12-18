
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      color: "cyan",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend",
      color: "purple",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      color: "emerald",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jest", level: 80 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/30",
        bg: "from-cyan-500/10 to-cyan-600/10",
        text: "text-cyan-400",
        progress: "from-cyan-500 to-cyan-600",
        glow: "shadow-cyan-500/25"
      },
      purple: {
        border: "border-purple-500/30",
        bg: "from-purple-500/10 to-purple-600/10",
        text: "text-purple-400",
        progress: "from-purple-500 to-purple-600",
        glow: "shadow-purple-500/25"
      },
      emerald: {
        border: "border-emerald-500/30",
        bg: "from-emerald-500/10 to-emerald-600/10",
        text: "text-emerald-400",
        progress: "from-emerald-500 to-emerald-600",
        glow: "shadow-emerald-500/25"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className={`p-6 bg-gradient-to-br ${colorClasses.bg} rounded-xl border ${colorClasses.border} backdrop-blur-sm hover:shadow-xl ${colorClasses.glow} transition-all duration-300`}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <h3 className={`text-2xl font-semibold ${colorClasses.text} mb-6 text-center`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colorClasses.progress} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Tech Icons */}
        <div className="mt-16 flex justify-center space-x-8 overflow-hidden">
          {["⚛️", "🚀", "💻", "🎨", "🔧", "☁️"].map((icon, index) => (
            <motion.div
              key={index}
              className="text-4xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
