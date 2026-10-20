import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import {
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/project-image";
import { ResponsiveNavigation } from "@/components/responsive-navigation";
import Image from "next/image";


export default function Home() {
  const projects = [
    {
      title: "Mobile Banking API Docs",
      description:
        "BancQ is a mobile banking application designed to simplify everyday financial management through secure transfers, bill payments, airtime and data purchases, and goal-based savings in one seamless experience.",
      tags: ["C#", ".Net", "ASP.NET Core", "JWT", "Swagger", "MySQL", "Redis", "Docker", "Kubernetes"],
      image: "/BancQ_API_Docs.png",
      link: "#",
      repo: "#",
    },
    {
      title: "Event Hall | Catering Website",
      description:
        "The Client firm needed to solve the problem of being searchable and  reachable by potential client beyond their immediate reach and showcasing their catering service and event hall for booking without physical contact.",
      tags: ["Nextjs", "Tailwind CSS", "Typescript", "Figma"],
      image: "/FDTKLandingPage.png",
      link: "#",
      repo: "#",
    },
    {
      title: "Estate Assistant | Real Estate Dashboard",
      description:
      "Estate Assistant is a real estate dashboard that helps real estate agents and property managers manage their properties, tenants, and leases. It provides a centralized platform for tracking property details, tenant information, lease agreements, smart document generation, and maintenance requests.",  
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Node.js", "PostgreSQL", "Redis"],
      image: "/TeraLandingPage.png",
      link: "#",
      repo: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS",  "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "C#", "PostgreSQL", "Redis", "MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", , "AWS", "Kubernetes", "Figma"],
    },
  ];

  const blogPosts = [
    {
      title: "Building Maintainable .NET APIs with Clean Architecture",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      excerpt:
      "A backend can work perfectly today and still become difficult to maintain as the application grows. New features introduce more dependencies, business rules become harder to locate, and changes in one part of the system can unexpectedly affect another. This is one reason I value Clean Architecture when structuring .NET applications. Why architecture matters Software architecture is not just about organizing folders. It is about managing dependencies, isolating business rules, and making a system easier to test and extend.For an API built with C# and .NET."
    },
    
    {
      title: "Choosing Affordable API Hosting for an Early-Stage Product",
      date: "Sep 28, 2024",
      readTime: "8 min read",
      excerpt:
      "When building an early-stage application, infrastructure costs matter. Paying for enterprise-level hosting before validating the product can create unnecessary financial pressure, but choosing an unreliable setup can slow development and introduce avoidable risks. The challenge is finding a balance between affordability, simplicity, and room to grow. Start with the application's requirements Before choosing a hosting provider, I consider the technology stack, expected workload, database requirements, deployment process, and operational responsibilities. For a .NET API backed by SQL Server, compatibility and connectivity are especially important. A hosting option that looks inexpensive may become less attractive if the database must be hosted separately or requires additional configuration.Compare"
    },
    {
      title: "Building a Custom Kubernetes Operator with Go",
      date: "Aug 15, 2024",
      readTime: "12 min read",
      excerpt:
        "Automating stateful application management using the Operator pattern.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation / Header */}
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
      >
        <div className="text-xl font-bold font-mono tracking-tighter">
          FOLAWE<span className="text-primary">_</span>OLUWOLE
        </div>
        <ResponsiveNavigation />
          <Button
            variant="outline"
            className="hidden border-primary/50 font-mono text-xs hover:border-primary hover:bg-primary/10 hover:text-primary md:inline-flex"
          >
          <a href="/FOLAWE_OLUWOLE_FullstackDeveloper.pdf" download="resume_v4.pdf" >
              My resume
          </a>
            </Button>
      </Container>

      {/* Hero Section */}
      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
               AVAILABLE FOR HIRE
            </div>
            <h1 className="text-6xl md:text-8xl font-display tracking-tighter leading-[0.9]">
              FULL
              <br />
              STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                DEV_
              </span>
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              I help businesses and startups build fast, responsive web and mobile applications that solve real problems and drive growth.
            </p>
            <div className="flex gap-4 pt-4 items-center">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                View my works <ArrowRight className="size-4" />
              </Link>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/folarrrrrrrrrrr"
                  aria-label="GitHub"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Image
                    src="/github.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/folawole-oluwole"
                  aria-label="LinkedIn"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11.75 7.25H4.5v9h2.75v-9ZM5.88 6.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm11.37 7.59c0-2.71-1.45-3.97-3.38-3.97a2.92 2.92 0 0 0-2.62 1.44v-1.31H8.5v9h2.75v-4.46c0-1.18.22-2.32 1.69-2.32 1.45 0 1.47 1.35 1.47 2.4v4.38h2.75l.09-5.16Z" />
                  </svg>
                </Link>
                <Link
                  href={`mailto:${process.env.MY_PERSONAL_EMAIL}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Abstract Element */}
          {/* <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>SYS.STATUS: NORMAL</span>
                <span>UPTIME: 99.9%</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>CPU_LOAD</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>MEM_USAGE</span>
                  <span>42%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  03
                </span>
                <span>ACTIVE_PROJECTS</span>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
      {/* Projects Section */}
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-4">
              SELECTED
              <br />
              WORKS
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-left">
            A collection of experiments, production apps, and websites.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] grid-rows-[repeat(3,auto)] gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden grid grid-rows-subgrid row-span-3 content-start items-start"
            >
              <ProjectImage src={project.image} alt={project.title} />
              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between pt-0">
                <Link
                  href={project.link}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  LIVE DEMO <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={project.repo}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  CODE <Code2 className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      {/* Skills Matrix */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-display tracking-tighter mb-6">
              TECH_STACK
            </h2>
            <p className="text-muted-foreground mb-8">
              My preferred weapons of choice for building digital products.
              Always learning, always evolving.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CLEAN_CODE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">SCALABLE_DB</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">PERFORMANCE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">DEVOPS</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* Blog Section */}
      <Container
        id="blog"
        className="py-24 border-t border-border max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-display mb-12 uppercase">Transmissions</h2>

        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Link href="#" key={index} className="group">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] items-baseline justify-between mb-2">
                <h3 className="text-2xl font-display group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {post.date}  {post.readTime}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="h-[1px] w-full bg-border group-hover:bg-primary/50 transition-colors"></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline">VIEW ALL POSTS</Button>
        </div>
      </Container>
      {/* Contact Section */}
      <Container id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-2xl justify-self-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">INITIATE_CONTACT</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to discuss the singularity?
              Send a signal.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
      <Container
        component="footer"
        className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            © 2024 Folawe Oluwole. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <Link href="https://github.com/folarrrrrrrrrrr" className="hover:text-primary transition-colors">
              GITHUB
            </Link>
            <Link href="https://www.linkedin.com/in/folawe-oluwole" className="hover:text-primary transition-colors">
              LINKEDIN
            </Link>
            <Link href="https://twitter.com/folarrrrrrrrrrr" className="hover:text-primary transition-colors">
              TWITTER
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
