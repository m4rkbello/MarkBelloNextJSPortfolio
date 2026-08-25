import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import FadeIn from "@/components/FadeIn";
import { 
  ExternalLink, Terminal, Database, Layout, Code2, 
  Server, Smartphone, BookOpen, Mail, Palette, Cpu 
} from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ==========================================
// 1. YOUR CUSTOM DATA INTEGRATION
// ==========================================
export const SITE_CONTENT = {
  brand: { name: "M4RKBELLO", resume: "/CV/RESUME(MARK_BELLO).pdf" },
  hero: {
    greeting: "Hi, I'm",
    name: "MARK BELLO",
    title: "Full-Stack Web & Mobile Developer",
    subtitle: "Building the Future, One Commit at a Time.",
    description: "I build immersive web and mobile experiences focusing on Clean Architecture. Specializing in ReactJS19, React Native CLI/Expo, Laravel, and TypeScript. You don't need to be perfect; you just need to be better than yesterday.",
    status: "Available for Hire",
  },
  about: {
    title: "System Identity — Mark Bello",
    description: [
      "I'm Mark, a passionate Full-Stack Web and Mobile Developer based in the Philippines. My journey is driven by a mission to implement clean architecture and continuous growth in every project I touch.",
      "My core stack revolves around modern ReactJS, NextJS, TanStack (with TailwindCSS and Redux/Zustand) for the frontend, and Laravel or Node.js for robust RESTful API systems on the backend. When I'm not coding, I'm expanding my skills in mobile development with React Native and exploring new database architectures."
    ]
  },
  contact: {
    email: "markamarcortejopanesbello@gmail.com",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/m4rkbello", icon: FaGithub },
      { platform: "YouTube", url: "https://www.youtube.com/@m4rkbello", icon: FaYoutube },
      { platform: "Dev.to", url: "https://dev.to/m4rkbello", icon: BookOpen },
      { platform: "Gmail", url: "mailto:markamarcortejopanesbello@gmail.com", icon: Mail }
    ]
  }
};

export const SKILLS_DATA = [
  { title: "Frontend & UI", icon: Layout, skills: ["React.js", "TypeScript", "TailwindCSS", "DaisyUI", "shadcn/ui", "Redux", "Zustand"] },
  { title: "Backend & APIs", icon: Server, skills: ["Laravel", "PHP", "Node.js", "Express.js", "Bun.js", "RESTful APIs"] },
  { title: "Mobile Dev", icon: Smartphone, skills: ["React Native CLI", "React Native Expo", "JavaScript", "TypeScript"] },
  { title: "Database Systems", icon: Database, skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Upstash (Redis)"] },
  { title: "Tools & Deploy", icon: Terminal, skills: ["Git", "GitHub", "Vercel", "Hostinger", "CPanel", "Postman"] },
  { title: "Design", icon: Palette, skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"] }
];

export const EXPERIENCE_DATA = [
  {
    company: "Advanced Infinit Technology Solutions",
    role: "Full-Stack Web Developer",
    period: "June 2023 - Present",
    description: "Specializing in maintaining and developing a School Information Management System that provides education solutions. My focus involves maintaining and securing confidential school information.",
    technologies: ["Laravel", "MySQL", "Git", "GitHub", "Cpanel"]
  },
  {
    company: "SPLACE",
    role: "OJT - INTERN AS WEB DEVELOPER",
    period: "February 2023 - May 2023",
    description: "Specializing in maintaining and developing a Lead Verifying System that provides customer service solutions. My focus involves maintaining the Frontend and Backend.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"]
  },
  {
    company: "TCENTRO STUDIO MONTEVISTA",
    role: "FULL-TIME / WORKING STUDENT",
    period: "June 2018 - September 2021",
    description: "Specialized in comprehensive print media, graphic design, and photo services. Handled the end-to-end production of printed materials while effectively balancing responsibilities as a working student.",
    technologies: ["Layout & Design", "Photo Editing", "Retouching"]
  }
];

export const PROJECTS_DATA = [
  {
    title: "DTRMS+QR",
    description: "A comprehensive web application tracking the attendance and payroll of employees.",
    tags: ["React", "Vite", "TailwindCSS", "Laravel", "MySQL"],
    image: "/images/projects/dtrms.png",
    link: "https://markbello-dtrms.netlify.app/admin/login",
    github: "https://github.com/m4rkbello/CHATGPT_CLONE_UI"
  },
  {
    title: "PANGUTANAI",
    description: "Your Intelligent AI Assistant powered by Google Gemini 2.5 Flash.",
    tags: ["React", "TailwindCSS", "Google Gemini"],
    image: "/images/projects/pangutanai.png",
    link: "https://pangutanai.netlify.app/",
    github: "https://github.com/m4rkbello/pangutanAI"
  },
  {
    title: "CHATGPT CLONE UI",
    description: "Clone of ChatGPT UI with modern design and responsive layout.",
    tags: ["React", "TailwindCSS"],
    image: "/images/projects/markbellochatgptcloneui.png",
    link: "https://markbello-chatgpt-clone-ui.netlify.app/",
    github: "https://github.com/m4rkbello/CHATGPT_CLONE_UI"
  },
  {
    title: "PHILIPPINE ADDRESS SELECTOR",
    description: "A seamless web application for selecting accurate Philippine addresses dynamically.",
    tags: ["ReactJS", "Vite", "TailwindCSS"],
    image: "/images/projects/ph-address-selector.png",
    link: "https://philippine-address-selector.netlify.app/",
    github: "https://github.com/m4rkbello/philippine-address-selector"
  },
  {
    title: "PH ADDRESS NPM PACKAGE",
    description: "A node module dataset of PH administrative divisions and zip codes.",
    tags: ["NPM PACKAGE", "TypeScript"],
    image: "/images/projects/ph-address-package.png",
    link: "https://www.npmjs.com/package/philippines-regions-provinces-municipalities-barangays-zipcodes-api",
    github: "https://github.com/m4rkbello/philippines-regions-provinces-municipalities-zipcodes-barangays-api"
  },
  {
    title: "REDUX STATE MANAGEMENT CRUD",
    description: "A robust CRUD application managed globally using Redux state.",
    tags: ["React", "Redux", "TailwindCSS"],
    image: "/images/projects/markbelloredux.png",
    link: "https://markbello-dtrms.netlify.app/admin/login",
    github: "https://github.com/m4rkbello/REDUX_STATE_MANAGEMENT_CRUDF"
  },
  {
    title: "MY HEART WENT OOPS",
    description: "Interactive animations merging two photos seamlessly.",
    tags: ["ReactJS", "Vite", "Framer Motion"],
    image: "/images/projects/myheartwentnice.png",
    link: "https://myheartwentnice.netlify.app/",
    github: "https://github.com/m4rkbello/MyHeartWentOps"
  },
  {
    title: "PARALLAX EFFECT",
    description: "A visually engaging web layout showcasing advanced CSS parallax manipulations.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/markbelloparallaxeffect.png",
    link: "https://markbello-parallax-effect.netlify.app/",
    github: "https://github.com/m4rkbello/PARALLAX_EFFECT"
  },
  {
    title: "3D PORTFOLIO",
    description: "A portfolio website showcasing a vivid color scheme and modern 3D design.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/projects/markbello3dportfolio.png",
    link: "https://m4rkbello3dportfolio.netlify.app/",
    github: "https://github.com/m4rkbello/3D_PORTFOLIO"
  },
  {
    title: "MINIMALIST PORTFOLIO",
    description: "A clean, modern, and minimalist developer portfolio design.",
    tags: ["React", "CSS", "Design"],
    image: "/images/projects/markbellominimalistportfolio.png",
    link: "#",
    github: "#"
  },
  {
    title: "SWELDO APP",
    description: "A simple calculator that computes daily, weekly, and monthly salary.",
    tags: ["Reactjs", "Vite", "TailwindCSS"],
    image: "/images/projects/sweldo.png",
    link: "https://sweldo.netlify.app/",
    github: "https://github.com/m4rkbello/SWELDOAPP_CALCULATOR"
  },
  {
    title: "SAFESEARCH",
    description: "A mobile application prioritizing safety tracking and location services.",
    tags: ["React Native", "Expo", "Firebase", "SKYSMS API"],
    image: "/images/projects/safesearch.png",
    link: "https://myheartwentnice.netlify.app/",
    github: "https://github.com/m4rkbello/SafeSearch"
  }
];

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-green-500/30 selection:text-green-200">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-green-500/10 blur-[120px] -z-10 animate-[float_20s_infinite_ease-in-out_alternate]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] -z-10 animate-[float_20s_infinite_ease-in-out_alternate_reverse]" />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-24 space-y-24 md:space-y-40 overflow-hidden">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[75vh] flex flex-col justify-center mt-10 relative">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <img 
                src="https://i.ibb.co/PsjwxPq4/m4rktriangle.png" 
                alt="Mark Bello" 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-green-500/80 bg-green-500/10 p-1 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              />
              <Badge variant="outline" className="py-1.5 px-4 bg-white/5 border-green-500/30 backdrop-blur-md gap-2 rounded-full text-green-400 font-mono text-xs md:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                STATUS: {SITE_CONTENT.hero.status.toUpperCase()}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 leading-[1.1] text-white uppercase">
              {SITE_CONTENT.hero.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
              {SITE_CONTENT.hero.title}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 md:mb-12 leading-relaxed border-l-2 border-green-500/50 pl-4 md:pl-6 font-mono text-sm md:text-base">
              <span className="text-green-400">`[SYS.INFO]`</span> // {SITE_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full font-bold px-8 bg-green-500 text-black hover:bg-green-400 w-full sm:w-auto" asChild>
                <a href="#projects">Deployments</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/5 border-white/10 text-white backdrop-blur-md hover:bg-white/10 px-8 gap-2 hover:border-green-500/50 transition-colors w-full sm:w-auto" asChild>
                <a href={SITE_CONTENT.contact.socialLinks[0].url} target="_blank" rel="noreferrer">
                  <FaGithub size={18} className="text-green-400" />
                  github.com/m4rkbello
                </a>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* ABOUT & SKILLS SECTION */}
        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-xl font-mono">`[01]`</span> ARCHITECTURE & SKILLS
            </h2>
            
            <div className="mb-8">
              <GlassCard className="bg-black/40 border-t-2 border-t-green-500/50">
                <h3 className="text-2xl font-bold text-white mb-4">{SITE_CONTENT.about.title}</h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  {SITE_CONTENT.about.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS_DATA.map((skillGroup, idx) => (
                <GlassCard key={idx} className="bg-black/40 border-white/5 hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <skillGroup.icon className="text-green-400 shrink-0" size={24} />
                    <h3 className="text-xl font-bold text-white">{skillGroup.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border-white/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-xl font-mono">`[02]`</span> SELECTED PROJECTS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS_DATA.map((item, i) => (
                <GlassCard key={i} className="group p-6 bg-black/40 border-white/10 hover:border-green-500/30 transition-colors flex flex-col h-full">
                  <div className="h-48 rounded-xl bg-black border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    ) : (
                      <Code2 size={48} className="text-gray-700 group-hover:text-green-500 group-hover:scale-110 transition-all duration-500" />
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start mb-6 gap-4 flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {item.github && item.github !== "#" && (
                          <Button size="icon" variant="ghost" className="rounded-full bg-white/5 text-white hover:bg-green-500/20 hover:text-green-400 shrink-0" asChild>
                            <a href={item.github} target="_blank" rel="noreferrer"><FaGithub size={18} /></a>
                          </Button>
                        )}
                      {item.link && item.link !== "#" && (
                        <Button size="icon" variant="ghost" className="rounded-full bg-white/5 text-white hover:bg-green-500/20 hover:text-green-400 shrink-0" asChild>
                          <a href={item.link} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-green-500/10 text-green-400 border-transparent font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-xl font-mono">`[03]`</span> EXPERIENCE LOG
            </h2>
            <GlassCard className="space-y-12 bg-black/40 border-white/5">
              {EXPERIENCE_DATA.map((job, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10 last:pb-0">
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <Badge variant="outline" className="text-green-400 border-green-500/20 bg-green-500/10 mt-2 md:mt-0 w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <h4 className="text-gray-300 font-medium mb-4">{job.company}</h4>
                  <p className="text-gray-400 leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="border-white/10 text-gray-400 bg-black/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </GlassCard>
          </FadeIn>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 pb-32">
          <FadeIn>
            <GlassCard className="text-center py-16 md:py-20 relative overflow-hidden bg-black/80 border-green-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <Terminal size={48} className="mx-auto mb-6 text-green-500" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">{SITE_CONTENT.contact.title}</h2>
              <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto mb-10 font-mono">
                &gt; {SITE_CONTENT.contact.description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 mb-12">
                <Button size="lg" className="rounded-full font-bold px-10 h-14 text-lg bg-green-500 text-black hover:bg-green-400 w-full sm:w-auto" asChild>
                  <a href={`mailto:${SITE_CONTENT.contact.email}`}>
                    Execute.Mail()
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-6">
                {SITE_CONTENT.contact.socialLinks.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
              
              <div className="mt-16 text-xs text-green-500/50 font-mono flex-col items-center gap-1 hidden sm:flex">
                <p className="whitespace-pre">╔══════════════════════════════════════════════════════════════╗</p>
                <p className="whitespace-pre">║  STATUS: ONLINE   ·   MODE: FULL-STACK   ·   BUILD: PASSING  ║</p>
                <p className="whitespace-pre">╚══════════════════════════════════════════════════════════════╝</p>
              </div>
              
              <div className="mt-12 text-xs text-green-500/50 font-mono flex sm:hidden justify-center border-t border-green-500/20 pt-4">
                <p>[ STATUS: ONLINE · MODE: FULL-STACK ]</p>
              </div>
            </GlassCard>
          </FadeIn>
        </section>
        
      </div>
    </main>
  );
}