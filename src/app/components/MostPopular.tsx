"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

// Import Nolimit City game images
import deadMenWalking from "../../assets/762de541cd39325535d61bb5c644a393d932d158.png";
import gatorHunters from "../../assets/bb7330db5073d1201f70796c68cf8a108bec9fdb.png";
import seamen from "../../assets/a51e8f3a242ce2904570eb7c1c78c554b60071d5.png";
import supersized from "../../assets/91dd5536adc74b80c46f9b0a932c0729fd987a5f.png";
import tsarWars from "../../assets/4af13a24426beeaa72da6a58af56e40bbbf05485.png";
import bangkokHilton from "../../assets/2aa6233a9eaa7e2b797edec19f13d69fed8d9af3.png";
import bizarre from "../../assets/fa55f156db73524ce515f593531e27669791068e.png";
import catfishHunters from "../../assets/a22645934454145c7efed0478821eeda62652cad.png";
import crazyEx from "../../assets/0e4a43bd9d26158bd29c61bb09120952bbd14fe6.png";
import dasxBoot2 from "../../assets/152a78b6a5e7ed64b7e5b475e9840156ff702f31.png";

// Most popular games for the week
const popularGames = [
  {
    id: 1,
    image: deadMenWalking,
    alt: "Dead Men Walking",
    name: "Dead Men Walking",
  },
  { id: 2, image: gatorHunters, alt: "Gator Hunters", name: "Gator Hunters" },
  { id: 3, image: seamen, alt: "Seamen", name: "Seamen" },
  { id: 4, image: supersized, alt: "Supersized", name: "Supersized" },
  { id: 5, image: tsarWars, alt: "Tsar Wars", name: "Tsar Wars" },
  {
    id: 6,
    image: bangkokHilton,
    alt: "Bangkok Hilton",
    name: "Bangkok Hilton",
  },
  { id: 7, image: bizarre, alt: "Bizarre", name: "Bizarre" },
  {
    id: 8,
    image: catfishHunters,
    alt: "Catfish Hunters",
    name: "Catfish Hunters",
  },
  {
    id: 9,
    image: crazyEx,
    alt: "Crazy Ex-Girlfriend",
    name: "Crazy Ex-Girlfriend",
  },
  { id: 10, image: dasxBoot2, alt: "Das xBoot 2", name: "Das xBoot 2" },
];

// Game Card Component
function GameCard({ game }: { game: (typeof popularGames)[0] }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl aspect-[3/4] shadow-lg hover:shadow-2xl hover:shadow-[#F4E800]/20 transition-all duration-300"
    >
      {/* Game image */}
      <Image
        src={game.image}
        alt={game.alt}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
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

      {/* Game name and Play button that appears on hover/active */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 transform px-2 sm:px-3 ${
          isActive
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
        }`}
      >
        <div className="text-white text-center font-bold text-sm sm:text-base md:text-lg leading-tight">
          {game.name}
        </div>
        <a
          href="https://bestslotgames.top/KbrRVmxp"
          rel="nofollow noopener noreferrer"
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-[#F4E800] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#E5D900] transition-colors shadow-lg text-sm sm:text-base"
        >
          <Play size={16} className="sm:w-5 sm:h-5" fill="black" />
          Play
        </a>
      </div>
    </div>
  );
}

export function MostPopular() {
  return (
    <section
      className="bg-black py-12 sm:py-14 md:py-16"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="mb-6 sm:mb-8">
          <div className="text-white text-3xl sm:text-4xl font-bold">Most Popular Slots</div>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline version for SEO section
export function MostPopularInline() {
  return (
    <div className="my-10 sm:my-12">
      {/* Games grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {popularGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
