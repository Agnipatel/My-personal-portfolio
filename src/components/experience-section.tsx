"use client";

import * as React from "react";
import Image from "next/image";
import { Briefcase, Calendar, MapPin, CheckCircle, FileCheck, ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData, ExperienceItem } from "@/data/portfolio-data";

export function ExperienceSection() {
  const [previewCert, setPreviewCert] = React.useState<ExperienceItem | null>(null);

  React.useEffect(() => {
    if (!previewCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewCert]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="gradient-blob w-[450px] h-[450px] bg-indigo-500/10 top-1/3 -left-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            Career Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Professional <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            2+ years of hands-on expertise building scalable web platforms, enterprise modules, and CRM automation solutions.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, idx) => (
            <Card
              key={exp.id}
              className="group relative overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/80"
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-6 sm:p-7 pl-7 sm:pl-9">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2.5">
                      <span>{exp.role}</span>
                      {exp.badge && (
                        <Badge
                          variant={idx === 0 ? "gradient" : "secondary"}
                          className="text-[11px] font-semibold"
                        >
                          {exp.badge}
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md border border-border/40">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md border border-border/40">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mt-4 text-sm text-muted-foreground leading-relaxed">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags and certificate button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-[11px] py-0 px-2.5 bg-muted/30 border-border/50 text-foreground font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {exp.certificateImage && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewCert(exp)}
                      className="text-xs text-primary hover:text-primary font-semibold gap-1.5 h-8 px-3 rounded-full border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all shrink-0 self-start sm:self-auto cursor-pointer"
                    >
                      <FileCheck className="h-3.5 w-3.5 text-emerald-500" />
                      <span>View Official Letter</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate Letter Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-in fade-in-50 duration-200"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-card rounded-2xl border border-border/60 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border/50 bg-card">
              <div className="pr-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 flex items-center gap-1">
                    <FileCheck className="h-3 w-3" />
                    Verified Official Letter
                  </Badge>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {previewCert.period}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mt-1">
                  {previewCert.certificateTitle || `${previewCert.company} Certificate`}
                </h3>
                <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                  {previewCert.role} &bull; {previewCert.company}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {previewCert.certificateImage && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-1.5 text-xs rounded-full border-border/60 hover:border-primary/50"
                  >
                    <a href={previewCert.certificateImage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Open Full Quality</span>
                    </a>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPreviewCert(null)}
                  className="rounded-full h-8 w-8 sm:h-9 sm:w-9"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6">
              {previewCert.certificateImage && (
                <div className="relative w-full h-[65vh] max-h-[680px] min-h-[380px] rounded-xl overflow-hidden bg-neutral-900/5 dark:bg-black/60 border border-border/40 flex items-center justify-center p-2">
                  <Image
                    src={previewCert.certificateImage}
                    alt={previewCert.certificateTitle || previewCert.company}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1000px"
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
