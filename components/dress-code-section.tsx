'use client';

export default function DressCodeSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#E6E2D3]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            Dress Code
          </h2>
        </div>

        {/* Dress Code Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Military */}
          <div className="bg-card rounded-lg shadow-sm p-8 md:p-10 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-serif font-light text-foreground mb-2">
              Military
            </h3>
            <p className="text-foreground/70 font-light">
              Formal dress uniform
            </p>
          </div>

          {/* Civilians */}
          <div className="bg-card rounded-lg shadow-sm p-8 md:p-10 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-serif font-light text-foreground mb-2">
              Civilians
            </h3>
            <p className="text-foreground/70 font-light">
              Formal suit or gown
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 font-light text-sm">
            Please avoid wearing white — reserved for the bride
          </p>
        </div>
      </div>
    </section>
  );
}
