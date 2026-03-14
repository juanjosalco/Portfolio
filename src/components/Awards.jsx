import { Trophy, Award, Medal, Code, Users } from "lucide-react";
import { awards } from "../data/content";

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Medal: Medal,
  Code: Code,
  Users: Users,
};

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 fade-in">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon] || Trophy;
            return (
              <div
                key={i}
                className="fade-in bg-bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all card-glow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <span className="text-text-muted text-sm">{award.year}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {award.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
