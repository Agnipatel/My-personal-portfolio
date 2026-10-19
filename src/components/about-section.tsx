"use client";

import * as React from "react";
import Image from "next/image";
import { GraduationCap, Code2, Award, CheckCircle2, Workflow, Wrench, Database } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            Professional Profile
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            About <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-lg" />
              
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/about-me.jpg"
                    alt="Agni Singh Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg">{portfolioData.personal.name}</p>
                    <p className="text-xs text-indigo-300">
                      {portfolioData.personal.role} &bull; Bangalore, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="glass-panel p-3.5 rounded-2xl border border-border/60 text-center">
                <p className="text-xl font-black text-primary">2+ Yrs</p>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Experience</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-border/60 text-center">
                <p className="text-xl font-black text-indigo-500">MERN</p>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">&amp; Next.js</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-border/60 text-center">
                <p className="text-xl font-black text-cyan-500">GHL</p>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Automations</p>
              </div>
            </div>
          </div>

          {/* Right Column: Summary & Tabs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5 text-foreground text-sm sm:text-base leading-relaxed font-medium">
                {portfolioData.personal.summary}
              </div>
              {portfolioData.personal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Interactive Tabs */}
            <div className="pt-2">
              <Tabs defaultValue="skills">
                <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex">
                  <TabsTrigger value="skills" className="gap-2 text-xs sm:text-sm">
                    <Code2 className="h-4 w-4" />
                    <span>Technical Skills</span>
                  </TabsTrigger>
                  <TabsTrigger value="education" className="gap-2 text-xs sm:text-sm">
                    <GraduationCap className="h-4 w-4" />
                    <span>Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="highlights" className="gap-2 text-xs sm:text-sm">
                    <Award className="h-4 w-4" />
                    <span>Key Expertise</span>
                  </TabsTrigger>
                </TabsList>

                {/* Skills Tab Content */}
                <TabsContent value="skills" className="space-y-4 pt-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portfolioData.skillCategories.map((cat) => (
                      <Card key={cat.title} className="border-border/60 bg-card/70 hover:border-primary/40 transition-colors">
                        <CardContent className="p-4 space-y-2.5">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {cat.title}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="text-xs py-0.5 px-2.5 bg-muted/40 border-border/50 text-foreground font-medium"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Education Tab Content */}
                <TabsContent value="education" className="space-y-4 pt-3">
                  <div className="space-y-4">
                    {portfolioData.education.map((item, idx) => (
                      <Card key={idx} className="border-border/50 bg-card/60 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-500 to-indigo-500" />
                        <CardContent className="p-5 pl-7">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-bold text-foreground text-base sm:text-lg">
                              {item.degree}
                            </h3>
                            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30">
                              {item.year}
                            </Badge>
                          </div>
                          <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mb-2">
                            {item.institution}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Highlights Tab Content */}
                <TabsContent value="highlights" className="pt-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "2+ Years in MERN Stack & Next.js Development",
                      "GoHighLevel (GHL) Workflows & Sales Funnel Automation",
                      "Trainer at Sileo Technologies (CMMi Level 3)",
                      "TCS iON NQT – IT Certified",
                      "IIT BHU Summer Internship in ML & Deep Learning",
                      "Deep Learning Model achieving R² Score > 0.90",
                      "REST API Engineering, Firebase & MongoDB Design",
                      "Performance Optimization & Responsive UI/UX",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl border border-border/50 bg-card/40"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
