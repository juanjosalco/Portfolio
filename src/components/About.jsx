import { GraduationCap } from "lucide-react";
import { about, education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-in">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {about.summary}
            </p>

            {/* Education */}
            <div className="bg-bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-primary" size={22} />
                <h3 className="text-lg font-semibold text-text-primary">
                  {education.school}
                </h3>
              </div>
              <p className="text-text-secondary">{education.degree}</p>
              <p className="text-text-muted text-sm mt-1">
                {education.period} · GPA: {education.gpa}
              </p>
            </div>
          </div>

          <div className="fade-in">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-bg-card border border-border rounded-full text-sm text-primary font-medium hover:border-primary transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-bg-card border border-border rounded-full text-sm text-primary-light font-medium hover:border-primary-light transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
