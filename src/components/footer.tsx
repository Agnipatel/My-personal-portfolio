"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-lg font-bold text-foreground">
              {portfolioData.personal.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {portfolioData.personal.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <Link href="#home" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#certificates" className="hover:text-primary transition-colors">
              Certificates
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full h-10 w-10 border-border/60 hover:border-primary/50"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with{" "}
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
