import { Briefcase } from "lucide-react";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-in">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="fade-in relative bg-bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all card-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Briefcase className="text-primary" size={20} />
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-text-muted text-sm">{exp.subtitle}</p>
                </div>
                <span className="text-text-muted text-sm mt-2 md:mt-0 md:text-right whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 mb-4">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-text-secondary text-sm leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-bg-dark rounded-md text-xs text-primary font-medium border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
