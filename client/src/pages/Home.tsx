import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Professional + Bold Typography
 * - Teal accent color (#00B4D8) for CTAs and highlights
 * - Poppins bold for headlines, Inter for body
 * - Asymmetric layouts with strategic whitespace
 * - Smooth animations on scroll
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">WebBuilder</div>
          <div className="flex items-center gap-8">
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition">
              Portfolio
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition">
              Process
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline & CTA */}
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Business Deserves a <span className="text-primary">Modern Website</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build stunning, custom websites that turn your Google Maps reviews into real revenue. No templates. No compromises. Pure craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  See Our Work <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Free Consultation
                </Button>
              </div>
              <div className="mt-12 flex gap-8 text-sm">
                <div>
                  <div className="font-bold text-2xl text-primary">50+</div>
                  <div className="text-muted-foreground">Websites Built</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-primary">2x</div>
                  <div className="text-muted-foreground">Avg. Revenue Increase</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588644177/dAD8Q778uYWBLFzAG4qKD7/hero-abstract-ZEVj6CvpXKRtXZWWYoaW7Z.webp"
                alt="Modern web design abstract"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Why You're Losing Customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "No Mobile Presence",
                desc: "60% of customers search on mobile. Without a website, they go to your competitor.",
              },
              {
                icon: "🔍",
                title: "Invisible Online",
                desc: "Google Maps alone isn't enough. A website gives you control over your brand story.",
              },
              {
                icon: "💰",
                title: "Leaving Money on Table",
                desc: "Every day without a website costs you leads. Your competitors are already online.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-lg text-muted-foreground mb-12">
            See how we transformed local businesses into digital powerhouses.
          </p>

          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-4">Paradise Auto Detailing</h3>
              <p className="text-muted-foreground mb-6">
                A local detailing business with 100+ Google reviews but no website. We built them a stunning portfolio site with before/after galleries and online booking.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Beautiful gallery with before/after photos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Online booking system</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Mobile-optimized design</span>
                </li>
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary">Result: 3x more bookings in first month</p>
              </div>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588644177/dAD8Q778uYWBLFzAG4qKD7/project-showcase-1-CRtnJW9xGCYvQf7Nv8hQzx.webp"
                alt="Paradise Auto Detailing website"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663588644177/dAD8Q778uYWBLFzAG4qKD7/project-showcase-2-gGskYcToi2GVagvfWjg62U.webp"
                alt="Before and after website transformation"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-4">Local Roofing Company</h3>
              <p className="text-muted-foreground mb-6">
                They had a 15-year-old website that looked outdated. We completely redesigned it with modern aesthetics, clear service descriptions, and customer testimonials.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Modern, professional design</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>SEO-optimized for local search</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Integrated contact forms & testimonials</span>
                </li>
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary">Result: Ranked #1 for local roofing search</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", desc: "We learn about your business, goals, and target customers." },
              { step: 2, title: "Design", desc: "We create a custom design that reflects your brand." },
              { step: 3, title: "Build", desc: "We code a fast, mobile-friendly website from scratch." },
              { step: 4, title: "Launch", desc: "We deploy, optimize, and ensure everything works perfectly." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Website?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Stop losing customers to competitors. Let's build a website that brings you real revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">WebBuilder</h4>
              <p className="text-sm text-muted-foreground">Custom websites for businesses that deserve better.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Web Design</a></li>
                <li><a href="#" className="hover:text-primary">Web Development</a></li>
                <li><a href="#" className="hover:text-primary">Redesigns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">WhatsApp</a></li>
                <li><a href="#" className="hover:text-primary">Email</a></li>
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 WebBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
