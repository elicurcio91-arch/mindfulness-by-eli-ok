import React from 'react';

const VideoPlaceholder: React.FC = () => {
    return (
        <section className="bg-[#FDFBF7] py-10 px-6">
            <div className="max-w-xs mx-auto flex flex-col items-center">
                <div className="w-full aspect-[9/16] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative border-4 border-white bg-black">
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/IZiTTpsF5m8?autoplay=1&mute=1&loop=1&playlist=IZiTTpsF5m8&controls=0&rel=0"
                        title="Mindfulness Short"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoPlaceholder;
