"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles, Code2, Terminal, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

const roles = [
  "Web Developer & CRM Developer",
  "MERN Stack & Next.js Specialist",
  "GoHighLevel (GHL) Automation Pro",
  "UI / UX & Performance Optimizer",
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* Background glow effects */}
      <div className="gradient-blob w-[500px] h-[500px] bg-indigo-500/20 -top-40 -left-20" />
      <div className="gradient-blob w-[450px] h-[450px] bg-cyan-500/15 top-1/3 -right-20" />
      <div className="gradient-blob w-[400px] h-[400px] bg-purple-500/15 -bottom-20 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="gradient"
                className="px-3.5 py-1 text-xs font-semibold gap-1.5 rounded-full border border-indigo-500/30 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-indigo-500 animate-pulse" />
                <span>2+ Years Experience</span>
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-xs font-medium gap-1.5 rounded-full border-border/60 text-muted-foreground"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Bangalore, Karnataka, India</span>
              </Badge>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>

              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  A{" "}
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold ml-2 text-foreground">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-primary animate-pulse" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild variant="gradient" size="lg" className="rounded-xl gap-2">
                <a href="#projects">
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
                <a href="#experience">
                  <span>View Experience</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </Button>

              <Button asChild variant="ghost" size="lg" className="rounded-xl">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/60 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/60 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/60 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="h-10 w-10 rounded-full border border-border/60 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background border glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 opacity-30 blur-xl transition-all duration-500 group-hover:opacity-60" />

              <div className="relative rounded-3xl border border-border/70 bg-card/80 p-3 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/hero-web.jpg"
                    alt="Agni Singh - Web & CRM Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-indigo-300">
                      MERN &bull; Next.js &bull; GoHighLevel (GHL)
                    </p>
                    <p className="text-sm font-bold truncate">
                      Pandaece Technologies &bull; Full Stack
                    </p>
                  </div>
                </div>

                {/* Floating pill badge 1 */}
                <div className="mt-3 flex items-center justify-between px-3 py-1.5 bg-muted/40 rounded-xl border border-border/40">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-semibold text-foreground">
                      MERN Stack &amp; GHL Automation
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">2+ Yrs Exp</span>
                </div>
              </div>

              {/* Floating micro-badge 1 */}
              <div className="absolute -bottom-5 -left-4 glass-panel rounded-2xl p-3 shadow-lg border border-border/60 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Full Stack &amp; CRM</p>
                  <p className="text-[11px] text-muted-foreground">Scalable Systems</p>
                </div>
              </div>

              {/* Floating micro-badge 2 */}
              <div className="absolute -top-4 -right-4 glass-panel rounded-2xl p-2.5 shadow-lg border border-border/60 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-indigo-500" />
                <span className="text-xs font-semibold text-foreground">
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
