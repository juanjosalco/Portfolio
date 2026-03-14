import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-text-secondary mb-10 fade-in">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="fade-in">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:scale-105 text-lg mb-10"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 fade-in">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <span className="flex items-center gap-2 text-text-muted">
            <MapPin size={20} />
            <span className="text-sm">{personalInfo.location}</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
