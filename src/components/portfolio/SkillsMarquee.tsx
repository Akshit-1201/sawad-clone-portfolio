const skills = [
  "Python",
  "TensorFlow",
  "SQL",
  "LLMs",
  "RAG",
  "Flask",
  "REST APIs",
  "Docker",
  "AWS",
  "GraphQL",
  "Prompt Engineering",
  "Machine Learning",
  "Node.js",
  "PostgreSQL",
  "Azure",
  "GCP",
];

export const SkillsMarquee = () => {
  return (
    <section className="py-8 border-y border-border/50 overflow-hidden bg-secondary/30">
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center shrink-0 mx-6"
            >
              <span className="text-primary">•</span>
              <span className="ml-2 text-lg font-medium whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center shrink-0 mx-6"
            >
              <span className="text-primary">•</span>
              <span className="ml-2 text-lg font-medium whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
