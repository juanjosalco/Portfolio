import { BookOpen, ExternalLink } from "lucide-react";
import { publication } from "../data/content";

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-6 bg-bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-in">
          <span className="gradient-text">Publications</span>
        </h2>

        <div className="fade-in bg-bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all card-glow">
          <div className="flex items-start gap-4">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0 mt-1">
              <BookOpen className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {publication.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-1">
                {publication.venue}
              </p>
              <p className="text-text-muted text-sm mb-4">
                {publication.authors}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {publication.description}
              </p>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <ExternalLink size={16} />
                Read on Springer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
