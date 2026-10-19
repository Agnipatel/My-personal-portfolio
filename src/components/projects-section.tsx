"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Layers, Sparkles, CheckCircle2, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { portfolioData, Project } from "@/data/portfolio-data";

export function ProjectsSection() {
  const [filter, setFilter] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = [
    "All",
    "Real Estate & PropTech",
    "Fintech & Trading",
    "CRM & Agency",
    "E-Commerce & Food",
    "EdTech & SaaS",
    "AI & Algorithms",
  ];

  const filteredProjects = React.useMemo(() => {
    return portfolioData.projects.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30 text-primary">
            Production Portfolio &bull; 25+ Live Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Featured <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Live Projects</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            A comprehensive showcase of deployed enterprise platforms, PropTech marketplaces, fintech applications, CRM automation funnels, and e-commerce solutions.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Search box */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, technology (e.g. Next.js, Fintech, Real Estate)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-card/70 border-border/60 rounded-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className="rounded-full text-xs transition-all"
              >
                {cat === "All" && <Layers className="h-3.5 w-3.5 mr-1.5" />}
                {cat}
              </Button>
            ))}
          </div>

          <div className="text-center text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of {portfolioData.projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project: Project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-card/80 flex flex-col justify-between"
            >
              <div>
                {/* Project Screenshot / Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="backdrop-blur-md bg-black/60 text-white border-white/20 text-[10px] font-medium">
                      {project.category}
                    </Badge>
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="h-3 w-3 shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Action */}
                  {project.liveUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <Button asChild variant="gradient" size="sm" className="gap-2 shadow-lg rounded-full">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>Visit Live Website</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                    <span className="truncate">{project.title}</span>
                    <Sparkles className="h-4 w-4 text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] py-0 px-2 bg-muted/40 border-border/50 text-muted-foreground font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 pt-0">
                {project.liveUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full justify-between rounded-xl group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span className="text-xs font-semibold">Launch Live Link</span>
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                    </a>
                  </Button>
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-muted/40 border border-border/40 text-xs text-muted-foreground">
                    <span className="font-medium text-[11px]">Production Architecture</span>
                    <span className="text-primary font-semibold text-[10px]">Enterprise</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
