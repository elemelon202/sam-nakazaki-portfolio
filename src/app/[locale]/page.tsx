import { HeroTranslated } from "@/components/HeroTranslated";
import { AboutTranslated } from "@/components/AboutTranslated";
import { SkillsTranslated } from "@/components/SkillsTranslated";
import { ProjectsTranslated } from "@/components/ProjectsTranslated";
import { ContactTranslated } from "@/components/ContactTranslated";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <HeroTranslated />
      <AboutTranslated />
      <SkillsTranslated />
      <ProjectsTranslated />
      <ContactTranslated />
    </main>
  );
}
