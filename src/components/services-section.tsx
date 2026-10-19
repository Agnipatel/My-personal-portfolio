"use client";

import * as React from "react";
import { Code2, Workflow, Database, Brain, ArrowRight, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";

const iconMap = {
  Code: Code2,
  Workflow: Workflow,
  Database: Database,
  Brain: Brain,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="gradient-blob w-[450px] h-[450px] bg-indigo-500/10 top-1/2 -right-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            What I Deliver
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            My <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Providing full-stack web solutions, CRM GoHighLevel automation, REST API architecture, and intelligent systems.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Code2;
            const gradients = [
              "from-violet-500/10 to-indigo-500/10",
              "from-indigo-500/10 to-cyan-500/10",
              "from-cyan-500/10 to-emerald-500/10",
              "from-purple-500/10 to-pink-500/10",
            ];

            return (
              <Card
                key={service.id}
                className="group relative flex flex-col justify-between border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 bg-card/80"
              >
                {/* Subtle top indicator */}
                <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardHeader className="space-y-4 p-5 sm:p-6">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${gradients[idx % 4]} border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2.5 p-5 sm:p-6 pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Capabilities:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <span className="h-4 w-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2 p-5 sm:p-6">
                  <Button asChild variant="ghost" size="sm" className="w-full justify-between group-hover:text-primary group-hover:bg-primary/5 text-xs">
                    <a href="#contact">
                      <span>Inquire Service</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
