export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="font-serif text-2xl mb-4 tracking-wider">CAMILY</div>
        <p className="text-sm text-muted-foreground font-light tracking-wide mb-6">Professional Model Portfolio</p>
        <p className="text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} Camily. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
