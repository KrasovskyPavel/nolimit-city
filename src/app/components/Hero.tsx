"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { StaticImageData } from "next/image";

// Import Nolimit City game images
import bizarre from "../../assets/fa55f156db73524ce515f593531e27669791068e.png";
import breakout from "../../assets/a96783f3ac76baab907b98ba8a2024e4c8c0c04c.png";
import catfishHunters from "../../assets/a22645934454145c7efed0478821eeda62652cad.png";
import crazyEx from "../../assets/0e4a43bd9d26158bd29c61bb09120952bbd14fe6.png";
import dasxBoot2 from "../../assets/152a78b6a5e7ed64b7e5b475e9840156ff702f31.png";
import duckHunters from "../../assets/bd9a07fb2ae24960f408ec463662728da421980d.png";
import flightMode from "../../assets/75ca5568423c2023e0fd795143a8a1ada187a1fd.png";
import goldenShower from "../../assets/ffe844007b8ebc88b3851c5fa001223bd830ba4f.png";
import mental2 from "../../assets/5975a2ef566e94454911f7b77c2d5b699f80b727.png";

export function Hero() {
  // Game character images
  const gameImages = [
    bizarre,
    breakout,
    catfishHunters,
    crazyEx,
    dasxBoot2,
    duckHunters,
    flightMode,
    goldenShower,
    mental2,
  ];

  const GameCard = ({
    src,
    alt,
    rotation,
  }: {
    src: StaticImageData;
    alt: string;
    rotation: string;
  }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
      <div
        onClick={handleClick}
        className={`group relative aspect-square rounded-2xl overflow-hidden transform ${rotation} ${
          isActive ? "rotate-0 scale-105" : "hover:rotate-0 hover:scale-105"
        } transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#F4E800]/20`}
      >
        <Image
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isActive ? "scale-110" : "group-hover:scale-110"
          }`}
        />

        {/* Overlay with gradient on hover/active */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        {/* Play button that appears on hover/active */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
          }`}
        >
          <a
            href="https://bestslotgames.top/KbrRVmxp"
            rel="nofollow noopener noreferrer"
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F4E800] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#E5D900] transition-colors shadow-lg"
          >
            <Play size={20} fill="black" />
            Play
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative bg-black overflow-hidden"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Title */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-[#F4E800]">Nolimit City</span>
              <br />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover new releases, classic favorites, and exclusive insights into the world of
              online casino games.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="https://bestslotgames.top/KbrRVmxp"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Play Now
              </a>
              <a
                href="https://bestslotgames.top/KbrRVmxp"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="w-full sm:w-auto bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-center"
              >
                Try Demo
              </a>
            </div>
          </div>

          {/* Right Side - Game Images Grid */}
          <div className="relative">
            {/* Grid of game character images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {/* First column - 2 images */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <GameCard src={gameImages[0]} alt="Bizarre" rotation="rotate-[-2deg]" />
                <GameCard src={gameImages[3]} alt="Crazy Ex-Girlfriend" rotation="rotate-[3deg]" />
              </div>

              {/* Second column - 3 images */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 md:mt-8">
                <GameCard src={gameImages[1]} alt="Breakout" rotation="rotate-[2deg]" />
                <GameCard src={gameImages[4]} alt="Das xBoot 2" rotation="rotate-[-3deg]" />
                <div className="hidden md:block">
                  <GameCard src={gameImages[6]} alt="Flight Mode" rotation="rotate-[2deg]" />
                </div>
              </div>

              {/* Third column - 3 images (hidden on mobile) */}
              <div className="hidden md:block space-y-2 sm:space-y-3 md:space-y-4">
                <GameCard src={gameImages[2]} alt="Catfish Hunters" rotation="rotate-[-2deg]" />
                <GameCard
                  src={gameImages[5]}
                  alt="Duck Hunters Happy Hour"
                  rotation="rotate-[3deg]"
                />
                <GameCard src={gameImages[7]} alt="Golden Shower" rotation="rotate-[-2deg]" />
              </div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F4E800]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F4E800]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
