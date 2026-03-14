import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative hero-gradient px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm fade-in">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-text-primary fade-in">
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="gradient-text">
            {personalInfo.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-2 fade-in">
          {personalInfo.title}
        </p>
        <p className="text-lg text-text-muted mb-8 fade-in">
          {personalInfo.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 fade-in">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border hover:border-primary text-text-primary rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 fade-in">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-muted hover:text-primary transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
