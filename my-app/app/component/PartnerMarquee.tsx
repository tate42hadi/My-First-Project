import Image from "next/image";

export default function PartnerMarquee() {
  // Your 4 distinct logo items asset collection array array
  const partners = [
    { id: 1, src: "/nh.svg", alt: "New Horizons Learning Centers" },
    { id: 2, src: "/shelter.svg", alt: "Shelter Access Food Education Organization" },
    { id: 3, src: "/unhcr.svg", alt: "UNHCR The UN Refugee Agency" },
    { id: 4, src: "/ap.svg", alt: "AP Organization" },
  ];

  // Combine original array and an exact duplicate list to ensure a seamless seamless gap loop line
  const marqueeLogos = [...partners, ...partners];

  return (
    <div className="w-full flex flex-col gap-5 md:px-20 text-center px-4 my-20">
      <h2 className="md:text-3xl text-xl font-semibold text-blue-600 dark:text-white">
        ` Collaboration with hundreds of companies `
      </h2>
      <div className="relative w-full overflow-hidden bg-transparent py-4 mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused] cursor-pointer dark:brightness-95 dark:contrast-110">
          {marqueeLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex items-center justify-center w-40 md:w-48 h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 dark:opacity-100 dark:hover:opacity-120 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
