import Image from "next/image";
import logo from "../../assets/571203c11642355763fb9acd517bd5c059503fe4.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-[#F4E800]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-2 py-2 sm:px-2 md:py-2">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="NOLIMIT CITY"
            width={160}
            priority
            className="h-7 w-auto sm:h-8 md:h-10"
          />
        </div>

        <a
          href="https://bestslotgames.top/KbrRVmxp"
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="rounded-lg bg-black px-4 py-2 text-sm font-bold text-[#F4E800] transition-all hover:bg-gray-900 sm:px-6 sm:py-2.5 sm:text-base"
        >
          Play now
        </a>
      </div>
    </header>
  );
}
