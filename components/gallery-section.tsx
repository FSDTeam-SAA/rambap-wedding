'use client';

import Image from 'next/image';

export default function GallerySection() {
    const images = [
        "/floral-background-B0YBMwJP.jpg", // Placeholders using existing assets if available or just generic paths
        "/envelope-intro.jpg",
        "/floral-background-B0YBMwJP.jpg",
        "/envelope-intro.jpg",
        "/floral-background-B0YBMwJP.jpg",
        "/envelope-intro.jpg"
    ];

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                        Gallery
                    </h2>
                    <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                        Capturing our moments together
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] overflow-hidden rounded-lg group shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={src}
                                alt={`Wedding photo ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
