import logo from '../../assets/571203c11642355763fb9acd517bd5c059503fe4.png';

export function Header() {
    return (
        <header className="bg-[#F4E800] border-b border-black sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-2 sm:px-2 py-2 md:py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="NOLIMIT CITY"
                        className="h-7 sm:h-8 md:h-10"
                    />
                </div>

                {/* Play Now Button */}
                <a
                    href="https://bestslotgames.top/KbrRVmxp"
                    rel="nofollow"
                    target="_blank"
                    className="bg-black text-[#F4E800] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-900 transition-all">
                    Play now
                </a>
            </div>
        </header>
    );
}
