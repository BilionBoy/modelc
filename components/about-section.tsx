export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem de Perfil */}
          <div className="relative aspect-[3/4] overflow-hidden animate-scale-in">
            <img
              src="/images/camy1.jpg"
              alt="Retrato de Camily"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo da Bio */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-wider">
              Sobre Mim
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Modelo profissional com experiência em fotografia editorial,
                comercial e lifestyle. Apaixonada por dar vida a visões
                criativas por meio de uma performance versátil e dinâmica.
              </p>
              <p>
                Disponível para campanhas de moda, editoriais, desfiles e
                colaborações com marcas.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="font-serif text-3xl mb-1">22</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  IDADE
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl mb-1">165</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  ALTURA
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl mb-1">BR</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  BASE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
