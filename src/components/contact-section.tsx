"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Check, Copy, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-indigo-500/10 bottom-0 left-1/4" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Contact <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Have a project in mind, an engineering role, or a CRM automation inquiry? Reach out directly.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Contact Container */}
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="border-border/70 bg-card/85 shadow-xl backdrop-blur-md overflow-hidden">
            <CardContent className="p-6 sm:p-10 space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Let&apos;s build something great together.
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  I am currently based in Bangalore, Karnataka, India and open to full-time engineering roles, freelance contracts, and CRM automation consultations.
                </p>
              </div>

              {/* Contact Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Card with Copy button */}
                <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 flex items-center justify-between group hover:border-primary/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Email Address</p>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyEmail}
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 flex items-center justify-between group hover:border-primary/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Phone</p>
                      <a
                        href="tel:+916386026426"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 flex items-center gap-3.5 shadow-sm">
                  <div className="h-11 w-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Location</p>
                    <p className="text-sm font-semibold text-foreground">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 flex items-center gap-3.5 shadow-sm">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Availability</p>
                    <p className="text-sm font-semibold text-foreground">
                      Open to New Opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Actions */}
              <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center sm:text-left">
                    Connect on Social Profiles
                  </p>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <a
                      href={portfolioData.personal.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={portfolioData.personal.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={portfolioData.personal.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="h-11 w-11 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <Button asChild variant="gradient" size="lg" className="rounded-xl w-full sm:w-auto gap-2">
                  <a
                    href={portfolioData.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download Curriculum Vitae</span>
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
