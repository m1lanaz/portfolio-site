import SectionDivider from "@/components/section-divider";
import Intro from "./Intro";
import About from "@/components/About";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <div className="flex flex-col items-center px-4">
        <SectionDivider/>
        <Projects/>
      </div>
      
    </main>
  )
}
