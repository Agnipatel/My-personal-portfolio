"use client";

import * as React from "react";
import Image from "next/image";
import { Award, Eye, X, CheckCircle, ShieldCheck, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData, Certificate } from "@/data/portfolio-data";

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

  React.useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="gradient-blob w-[450px] h-[450px] bg-cyan-500/10 -top-20 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            Official Credentials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Certifications &amp; <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Formal technical certifications, premier institute internships, and professional corporate trainings.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {portfolioData.certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-card/80 cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedCert(cert)}
            >
              <div>
                {/* Certificate Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                      <ShieldCheck className="h-16 w-16 opacity-40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="backdrop-blur-md bg-black/60 text-white border-white/20 text-[11px] flex items-center gap-1">
                      <Award className="h-3 w-3 text-amber-400" />
                      <span>{cert.badge}</span>
                    </Badge>
                    {cert.issueDate && (
                      <span className="backdrop-blur-md bg-black/50 text-white/90 text-[10px] px-2 py-0.5 rounded-full border border-white/10 font-medium">
                        {cert.issueDate}
                      </span>
                    )}
                  </div>

                  {/* Inspect Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="gradient" size="sm" className="gap-1.5 rounded-full shadow-lg pointer-events-none text-xs">
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Credential</span>
                    </Button>
                  </div>
                </div>

                {/* Card Meta */}
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-1">
                        {cert.organization}
                      </p>
                      {cert.period && (
                        <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1 font-medium">
                          <Calendar className="h-3 w-3 text-primary" />
                          <span>{cert.period}</span>
                        </p>
                      )}
                    </div>
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  </div>

                  {cert.description && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </CardContent>
              </div>

              <div className="p-5 pt-0">
                <div className="text-[11px] font-semibold text-primary/80 group-hover:text-primary flex items-center gap-1">
                  <span>Click to inspect preview &rarr;</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-in fade-in-50 duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-card rounded-2xl border border-border/60 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border/50 bg-card">
              <div className="pr-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs bg-primary/10 text-primary border-primary/20">
                    {selectedCert.badge}
                  </Badge>
                  {selectedCert.issueDate && (
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Issued: {selectedCert.issueDate}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mt-1">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                  {selectedCert.organization} {selectedCert.period ? `• ${selectedCert.period}` : ""}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.image && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-1.5 text-xs rounded-full border-border/60 hover:border-primary/50"
                  >
                    <a href={selectedCert.image} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Open Full Quality</span>
                    </a>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full h-8 w-8 sm:h-9 sm:w-9"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              {selectedCert.image ? (
                <div className="relative w-full h-[60vh] max-h-[650px] min-h-[380px] rounded-xl overflow-hidden bg-neutral-900/5 dark:bg-black/60 border border-border/40 flex items-center justify-center p-2">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1000px"
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="p-12 text-center text-muted-foreground text-sm">
                  Verified Credential from {selectedCert.organization}
                </div>
              )}

              {selectedCert.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedCert.description}
                </p>
              )}

              {selectedCert.highlights && selectedCert.highlights.length > 0 && (
                <div className="pt-3 border-t border-border/40">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Engagements &amp; Competencies
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCert.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
