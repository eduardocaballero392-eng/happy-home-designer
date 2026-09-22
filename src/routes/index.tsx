import { createFileRoute } from "@tanstack/react-router";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight, BadgeDollarSign, Banknote, Beef, Beer, CreditCard, Drumstick, Facebook, Flame, Home, Instagram, Mail, MapPin, Menu, Phone, QrCode, ShoppingBag, ShoppingCart, Sparkles, UserRound, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Asado & Carbón | Pollo a la Brasa Moderno" },
    { name: "description", content: "Disfruta pollo a la brasa, hamburguesas artesanales y bocaditos con auténtico sabor a carbón en Lima." },
    { property: "og:title", content: "Asado & Carbón | Pollo a la Brasa Moderno" },
    { property: "og:description", content: "El sabor del carbón en tu mesa." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const logo = "https://lh3.googleusercontent.com/aida-public/AB6AXuArznXVuVkWlEP1TKndp-iZnhWEuPxChR6T9cbQlxC1Vl2Lnz_oIKFq6iDZ32_2p6qH-nU9KlLLfc0BGWBxZd4aXtX0x7MNIqJ4cWwX_b2Zh1sEHMI6moNzkcscoRQig4ubHesGBJRIuAI9o9QEooJCD0CPljq5Ut9EllddGdHT9UZ4Jh6WwG3lwScRlVvsASuxZtMFOVVRFWJdc16IIielk_bU6WjOciuo9-Hm1KkikLswjpDkI2_6";
const hero = "https://lh3.googleusercontent.com/aida-public/AB6AXuD06kdEaKBWeIKZy1GnL6VHVnDWUsgLf6y0PQxDVs8khfiY4m0H2pUT6qT1IhX7jbfA8Gyh4EhBEw2mNfIo7vuNakAZy1fRPpyPNGyNjlXji2JT_EYu27IZYoPFSc9o0Ow31_27We_EHUK5GMMIuze7ugGveP7347yBSXPg_ZKoc62G9kXbdlvVPMBn5j84FirJI-wkH4d-wrfj09K36gblczn6WbNE_MynwSud2mACPoDkH5Xn5OCY";

const products = [
  { name: "Combo Familiar Brasa", price: "S/ 79.90", description: "Pollo entero + Papas XL + Ensalada fresca + Gaseosa 1.5L. El clásico para compartir en familia.", tags: ["MÁS VENDIDO", "FAMILIAR"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoV51X2NGJ_F-d9vUcNGSnDAKS43ATQzrp9bRqB5JNdppv-pXzebGXtZEJUbnFwgRmKp6Pw4v77RrpeCb255RRIZRt9yIno-Xt_TSlXbwvDdqp17Y_4-ItsvktxEyeNZIqdseTtRw266KYWBUJksh_yeK4iiAdb6ESrdXwV7ajXuAMf3ufYYXKvt4tqcy6iZl2vpn7d_3EJzottE1roVGmCM7xfVoXkaFWKS9JGE_82TeEA3ir086A" },
  { name: 'Hamburguesa "La Carbonera"', price: "S/ 28.50", description: "Hamburguesa artesanal de res 200g, queso ahumado, cebolla caramelizada y salsa secreta al carbón.", tags: ["ARTESANAL", "PREMIUM"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8fhb5MkOul4JaeVpRxrfXskq6g_7ZETYaDAByeJyVjHyvZdjnFdFSCy3dNUZQMDaZ0MQ9Il1Nb8-mAK_4Gelbp-PSEBe7porCLZDVwUG7OIPyTRlFw8veJtqBedmus8gwyOEHCUss3OyUVP263xghJFg7nSbpOzFrGPqld58DQd3tpe0z_YgSBmCuI_5jiX4zQIbat8vhdD51moE8QWc1QBLKuEKcURTuUBFmzh67IYZJnGKuFnw4" },
  { name: "Dúo de Bocaditos", price: "S/ 34.00", description: "6 Tequeños rellenos de queso fundido y 6 Alitas BBQ glaseadas. El inicio perfecto para tu comida.", tags: ["SHARING"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxxL5BMLVpXQH8UyVjC-GZX98F4Fs2Zxi7UR3oZTJxuJ4gsb41VNMI29NbkfesRKeGBPCJLSRCxYT3dF5Wof8TcyzfaqGUmDmSznsytfiOmAkDy4yXg_HuNPlnIwGO9MxeK7a0ifoccEgfyvX_ewONXpLRnA64NvrHsyStykwFx28vd4bU77Q5PoSsUYgh18KHdjNjqko9_kCIAiLLPtYu8MfSr1HMXeovTTlrnW_zyERFLlAIvTyp" },
];

function Button({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return <button className={`cursor-pointer transition active:scale-[.98] ${className}`} {...props}>{children}</button>;
}

function Index() {
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const addToCart = () => setCart((count) => count + 1);

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:h-24 md:px-16">
          <a href="#top" className="flex min-w-0 items-center gap-1">
            <img src={logo} alt="Logo Asado & Carbón" className="h-11 w-11 shrink-0 object-contain md:h-12 md:w-12" />
            <span className="font-display text-lg font-bold text-primary sm:text-2xl md:text-[26px]">Asado &amp; Carbón</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
            <a href="#top" className="border-b-2 border-primary pb-1 text-primary">Inicio</a><a href="#menu" className="text-muted-foreground hover:text-primary">Menú</a><a href="#favoritos" className="text-muted-foreground hover:text-primary">Promociones</a><a href="#contacto" className="text-muted-foreground hover:text-primary">Ubicaciones</a>
          </nav>
          <div className="flex items-center gap-2 md:gap-6">
            <Button onClick={addToCart} aria-label="Abrir carrito" className="relative flex items-center gap-2 bg-transparent font-bold text-primary">
              <ShoppingCart size={23} /><span className="hidden sm:inline">Carrito</span>{cart > 0 && <span className="absolute -right-2 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs text-accent-foreground">{cart}</span>}
            </Button>
            <Button onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })} className="rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground hover:brightness-110 md:px-6">Pedir ahora</Button>
          </div>
        </div>
      </header>

      <main id="top" className="pt-20 md:pt-24">
        <section className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden px-4 py-8 md:grid-cols-2 md:gap-12 md:px-16 md:py-12">
          <div className="order-2 space-y-6 md:order-1">
            <span className="inline-flex rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">Novedad: Brasa de Encina</span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.17] text-primary md:text-5xl">El sabor del carbón en tu mesa</h1>
            <p className="max-w-lg text-lg leading-7 text-muted-foreground">Disfruta del mejor pollo a la brasa, hamburguesas artesanales y los mejores bocaditos con ese toque ahumado que tanto te gusta.</p>
            <div className="flex flex-wrap gap-5 pt-2">
              <a href="#menu" className="rounded-xl bg-primary px-8 py-4 font-display text-xl font-bold text-primary-foreground shadow-warm transition hover:brightness-110">Ver Menú</a>
              <Button onClick={() => alert("¡Gracias! Pronto habilitaremos las reservas en línea.")} className="rounded-xl border-2 border-secondary px-8 py-4 font-display text-xl font-bold text-secondary hover:bg-secondary hover:text-secondary-foreground">Reservar mesa</Button>
            </div>
          </div>
          <div className="order-1 h-[390px] md:order-2 md:h-[600px]"><img src={hero} alt="Pollo a la brasa con papas y salsa de ají" className="h-full w-full rounded-[2rem] object-cover shadow-2xl" /></div>
        </section>

        <section id="menu" className="bg-muted px-4 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center font-display text-3xl font-bold">Explora nuestras categorías</h2>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {[
                { title: "Pollos", text: "A la leña y carbón", Icon: Drumstick, style: "bg-primary text-primary-foreground" },
                { title: "Burgers", text: "Artesanales", Icon: Beef, style: "bg-accent text-accent-foreground" },
                { title: "Bocaditos", text: "Para compartir", Icon: UtensilsCrossed, style: "bg-secondary text-secondary-foreground" },
                { title: "Bebidas", text: "Frescamente frías", Icon: Beer, style: "bg-card text-card-foreground" },
              ].map(({ title, text, Icon, style }) => <button key={title} className={`group flex h-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl transition hover:brightness-105 ${style}`}><Icon size={48} className="mb-2 transition group-hover:scale-110" /><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-1 text-xs font-bold opacity-80">{text}</p></button>)}
            </div>
          </div>
        </section>

        <section id="favoritos" className="mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-20">
          <div className="mb-12 flex items-end justify-between gap-5">
            <div><h2 className="font-display text-3xl font-bold text-primary">Los Favoritos de la Casa</h2><p className="text-muted-foreground">Nuestras recomendaciones más pedidas</p></div>
            <a href="#menu" className="hidden items-center gap-1 font-bold text-secondary sm:flex">Ver todo el menú <ArrowRight size={20} /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, index) => <article key={product.name} className="group flex overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition hover:shadow-warm md:flex-col">
              <div className="relative w-2/5 shrink-0 overflow-hidden md:h-64 md:w-full"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1 font-display text-sm font-bold text-primary-foreground md:text-xl">{product.price}</span></div>
              <div className="flex flex-1 flex-col p-4 md:p-6"><h3 className="font-display text-lg font-bold md:text-2xl">{product.name}</h3><p className="my-2 flex-grow text-sm leading-5 text-muted-foreground md:my-3 md:text-base md:leading-6">{product.description}</p><div className="mb-4 hidden gap-1 sm:flex">{product.tags.map((tag, tagIndex) => <span key={tag} className={`rounded px-2 py-0.5 text-xs font-bold ${tagIndex ? "bg-accent/40 text-accent-foreground" : "bg-muted text-foreground"}`}>{tag}</span>)}</div><Button onClick={addToCart} className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground hover:brightness-110"><ShoppingBag size={19} />{index === 1 ? "Pedir ahora" : "Agregar al carrito"}</Button></div>
            </article>)}
          </div>
        </section>

        <section className="px-4 py-4 md:px-16 md:py-12">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-primary p-10 text-center shadow-2xl md:flex-row md:p-16 md:text-left">
            <Sparkles className="absolute -right-5 -top-5 h-40 w-40 text-primary-foreground/5" />
            <div className="max-w-md"><h2 className="font-display text-3xl font-bold text-primary-foreground">¿Quieres un descuento?</h2><p className="mt-4 text-lg text-primary-foreground/85">Únete a nuestra comunidad y recibe un 15% de descuento en tu primer pedido online.</p></div>
            <form className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row" onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true); }}>
              {subscribed ? <p className="rounded-lg bg-primary-foreground px-6 py-4 font-bold text-primary">¡Gracias por suscribirte!</p> : <><input value={email} onChange={(event) => setEmail(event.target.value)} required type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" className="w-full rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none sm:w-64" /><Button type="submit" className="rounded-lg bg-primary-foreground px-8 py-4 font-bold text-primary hover:bg-muted">Suscribirme</Button></>}
            </form>
          </div>
        </section>
      </main>

      <footer id="contacto" className="mt-16 border-t border-border bg-muted pb-10 pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-16">
          <div className="mb-16 grid gap-10 md:grid-cols-4">
            <div><div className="mb-5 flex items-center gap-1"><img src={logo} alt="Logo" className="h-10 w-10 grayscale" /><span className="font-display text-2xl font-bold text-primary">Asado &amp; Carbón</span></div><p className="text-muted-foreground">Elevando el arte del pollo a la brasa con técnicas modernas y el respeto por el carbón tradicional.</p></div>
            <div><h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">Enlaces</h3><div className="space-y-3 text-muted-foreground"><p>Nosotros</p><p>Términos y Condiciones</p><p>Política de Privacidad</p><p>Trabaja con Nosotros</p></div></div>
            <div><h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">Contacto</h3><div className="space-y-3 text-muted-foreground"><p className="flex gap-2"><MapPin size={20} />Av. Brasa y Fuego 123,<br />Lima, Perú</p><p className="flex gap-2"><Phone size={20} />(01) 456-7890</p><p className="flex gap-2"><Mail size={20} />hola@asadocarbon.pe</p></div></div>
            <div><h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">Horarios</h3><div className="space-y-3 text-muted-foreground"><p className="flex justify-between"><span>Lun - Jue:</span><b>12:00 - 22:00</b></p><p className="flex justify-between"><span>Vie - Sáb:</span><b>12:00 - 23:30</b></p><p className="flex justify-between"><span>Domingo:</span><b>12:00 - 21:00</b></p><div className="flex gap-5 pt-3 text-primary"><Instagram /><Facebook /><Mail /></div></div></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 border-t border-border pt-10 text-sm text-muted-foreground md:flex-row"><p>© 2024 Asado &amp; Carbón - Modern Rotisserie. Todos los derechos reservados.</p><div className="flex gap-5"><Banknote /><CreditCard /><QrCode /></div></div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-4 py-2 shadow-2xl md:hidden"><div className="flex items-center justify-around"><a href="#top" className="flex flex-col items-center gap-1 text-primary"><Home size={23} /><span className="text-[10px] font-bold uppercase">Inicio</span></a><a href="#menu" className="flex flex-col items-center gap-1 text-muted-foreground"><Menu size={23} /><span className="text-[10px] font-bold uppercase">Menú</span></a><Button onClick={addToCart} aria-label="Agregar al carrito" className="relative -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"><ShoppingCart size={28} />{cart > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs text-accent-foreground">{cart}</span>}</Button><a href="#favoritos" className="flex flex-col items-center gap-1 text-muted-foreground"><BadgeDollarSign size={23} /><span className="text-[10px] font-bold uppercase">Promos</span></a><a href="#contacto" className="flex flex-col items-center gap-1 text-muted-foreground"><UserRound size={23} /><span className="text-[10px] font-bold uppercase">Cuenta</span></a></div></div>
    </div>
  );
}
