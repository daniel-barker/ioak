import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
        {/* Blood Splatter Overlay (additional to the one in globals.css) */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20" style={{
          backgroundImage: "radial-gradient(circle, rgba(185,28,28,0.8) 0%, rgba(0,0,0,0) 70%)",
        }}></div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10">
          {/* Book Cover */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] md:w-[350px] vintage-border">
              <Image
                src="/images/cover.png"
                alt="Ingredients of a Killer book cover"
                width={500}
                height={750}
                priority
                className="w-full h-auto shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#b91c1c] text-white px-3 py-1 transform rotate-[-5deg] shadow-lg">
                <span className="font-bold">NEW RELEASE</span>
              </div>
            </div>
          </div>
          
          {/* Book Info */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="font-heading text-5xl md:text-7xl text-white text-shadow tracking-wider">
              INGREDIENTS <span className="text-[#b91c1c]">OF A</span> KILLER
            </h1>
            
            <h2 className="font-heading text-3xl md:text-4xl text-[#b91c1c] tracking-wide">
              BY M.C. LAWRENCE
            </h2>
            
            <div className="max-w-lg mx-auto md:mx-0">
              <p className="text-xl md:text-2xl italic font-light mb-4 text-shadow">
                &ldquo;He&rsquo;s the boy next door—with blood on his apron.&rdquo;
              </p>
              
              <h3 className="text-xl md:text-2xl font-heading text-[#b91c1c] mb-3">
                THE TASTE OF TERROR
              </h3>
              
              <p className="text-lg text-gray-300 mb-8">
                What happens when the perfect son turns into the perfect killer? Add a dash of charm, 
                a cup of trauma, and a secret sauce no one wants to taste in this twisted psychological thriller.
              </p>
              

            </div>
          </div>
        </div>
        
        {/* Vintage cookbook elements */}
        <div className="absolute bottom-8 left-8 hidden md:block">
          <div className="transform rotate-[-15deg] opacity-30">
            <div className="w-32 h-32 border-t-2 border-l-2 border-[#b91c1c]"></div>
          </div>
        </div>
        
        <div className="absolute top-8 right-8 hidden md:block">
          <div className="transform rotate-[15deg] opacity-30">
            <div className="w-32 h-32 border-b-2 border-r-2 border-[#b91c1c]"></div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-6 border-t border-[#b91c1c]/30">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} M.C. Lawrence. All rights reserved.</p>
          <p className="mt-2">&ldquo;Ingredients of a Killer&rdquo; is a work of fiction. Names, characters, places, and incidents are products of the author&rsquo;s imagination.</p>
          <p className="mt-4 text-xs opacity-70">Built by <a href="https://brightline.dev" target="_blank" rel="noopener noreferrer" className="text-[#b91c1c] hover:underline transition-colors">Brightline</a></p>
        </div>
      </footer>
    </div>
  );
}
