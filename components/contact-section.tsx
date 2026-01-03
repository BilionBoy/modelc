"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Instagram, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agency: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-6 container mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif font-light text-5xl md:text-6xl tracking-wider mb-4">Get In Touch</h2>
          <p className="text-muted-foreground font-light tracking-wide">Available for bookings and collaborations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="font-serif text-2xl mb-6 tracking-wide">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:camily@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">camily@example.com</span>
                </a>

                <a
                  href="https://instagram.com/camily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">@camily</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="font-light">Brasil</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-serif text-xl mb-3 tracking-wide">Services</h4>
              <ul className="space-y-2 text-muted-foreground font-light">
                <li>• Editorial Photography</li>
                <li>• Fashion Campaigns</li>
                <li>• Runway Shows</li>
                <li>• Commercial Shoots</li>
                <li>• Brand Collaborations</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="font-light"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="font-light"
                required
              />
            </div>

            <div>
              <Input
                placeholder="Agency / Company (Optional)"
                value={formData.agency}
                onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                className="font-light"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="font-light min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full font-light tracking-wider" size="lg">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
