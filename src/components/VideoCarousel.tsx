"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const videos = [
    "/port/chrischavesGravando-2026-02-15-125428.webm",
    "/port/elivanGravando 2026-02-01 211229.webm",
    "/port/mdGravando 2026-02-01 210830.webm",
    "/port/pettGravando 2026-02-01 211050.webm",
    "/port/simoneGravando 2026-02-01 211128.webm"
];

export function VideoCarousel() {
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 5000); // Change video every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            {videos.map((src, index) => (
                <div
                    key={src}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        index === currentVideo ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient for better text contrast if needed, though mostly visual here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            ))}

            {/* Windows-like Title Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-[#202020] flex items-center px-2 gap-1.5 z-20 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>

            {/* Active Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {videos.map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                            i === currentVideo ? "bg-neon-green" : "bg-white/20"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
