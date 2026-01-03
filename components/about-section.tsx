export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative aspect-[3/4] overflow-hidden animate-scale-in">
            <img src="/images/camy1.jpg" alt="Camily Portrait" className="w-full h-full object-cover" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-wider">About Me</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Professional model with experience in editorial, commercial, and lifestyle photography. Passionate about
                bringing creative visions to life through versatile and dynamic performance.
              </p>
              <p>Available for fashion campaigns, editorial shoots, runway shows, and brand collaborations.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="font-serif text-3xl mb-1">22</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">AGE</div>
              </div>
              <div>
                <div className="font-serif text-3xl mb-1">165</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">HEIGHT</div>
              </div>
              <div>
                <div className="font-serif text-3xl mb-1">BR</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">BASED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
