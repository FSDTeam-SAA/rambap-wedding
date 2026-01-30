'use client';

import { Utensils, Printer } from 'lucide-react';

export default function MenuSection() {
    const handlePrint = () => {
        window.print();
    };

    const menuItems = {
        starters: [
            "Traditional Ghanaian Platter",
            "Spicy Kelewele with Peanuts",
            "Fresh Garden Salad"
        ],
        main: [
            "Jollof Rice with Grilled Chicken",
            "Banku with Tilapia",
            "Waakye with All Accompaniments"
        ],
        dessert: [
            "Tropical Fruit Medley",
            "Caramelized Plantain Tart",
            "Traditional Sweets"
        ]
    };

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-[#fdfaf5] print:bg-white print:py-8">
            <div className="max-w-3xl mx-auto border-2 border-primary/20 p-8 md:p-16 relative">
                {/* Decorative Corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

                <div className="text-center mb-12 relative">
                    <Utensils className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
                        Wedding Menu
                    </h2>
                    <div className="w-24 h-px bg-primary/30 mx-auto mt-4" />
                </div>

                <div className="space-y-12 text-center">
                    <div>
                        <h3 className="text-xl font-serif text-primary uppercase tracking-widest mb-6">Starters</h3>
                        <ul className="space-y-2 text-foreground/80 font-light">
                            {menuItems.starters.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif text-primary uppercase tracking-widest mb-6">Main Course</h3>
                        <ul className="space-y-2 text-foreground/80 font-light">
                            {menuItems.main.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif text-primary uppercase tracking-widest mb-6">Dessert</h3>
                        <ul className="space-y-2 text-foreground/80 font-light">
                            {menuItems.dessert.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center print:hidden">
                    <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-light text-sm shadow-md"
                    >
                        <Printer className="w-4 h-4" />
                        Print Menu
                    </button>
                </div>
            </div>
        </section>
    );
}
