
import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
    useEffect(() => {
        // Esto fuerza a Instagram a procesar los nuevos bloques instalados
        if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, []);

    const posts = [
        "https://www.instagram.com/p/DUG7NYWkVZe/",
        "https://www.instagram.com/p/DTgxx6qkXSa/",
        "https://www.instagram.com/p/DT0WRGTkRxl/"
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold text-dark mb-2">Seguime en Instagram</h2>
                        <p className="text-gray-500">Recursos diarios, meditaciones y consejos sobre bienestar.</p>
                    </div>
                    <a
                        href="https://www.instagram.com/mindfulnessbyeli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @mindfulnessbyeli
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {posts.map((url, index) => (
                        <div key={index} className="w-full max-w-[320px] bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={url}
                                data-instgrm-version="14"
                                style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%' }}
                            >
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
