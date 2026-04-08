import { Gift, TrendingUp, Zap } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <section className="bg-black py-8 sm:py-10 md:py-12 border-t border-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Main Banner Card */}
        <div className="bg-[#F4E800] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="text-center mb-4">
          

            {/* Title */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 text-black leading-tight">
              Welcome Bonus
            </div>
            <p className="text-black/70 text-base sm:text-lg font-medium">
              Exclusive for Nolimit City fans!
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {/* Feature 1 */}
            <div className="bg-black rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F4E800] rounded-lg flex items-center justify-center">
                <Gift size={20} className="text-black" />
              </div>
              <div className="text-left">
                <div className="text-white text-base sm:text-lg font-bold">150% Match Bonus</div>
                <p className="text-gray-400 text-xs sm:text-sm">Up to $3000 on your first deposit</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-black rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F4E800] rounded-lg flex items-center justify-center">
                <TrendingUp size={20} className="text-black" />
              </div>
              <div className="text-left">
                <div className="text-white text-base sm:text-lg font-bold">50 Free Spins</div>
                <p className="text-gray-400 text-xs sm:text-sm">On Mental, Fire in the Hole & other hits</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://bestslotgames.top/KbrRVmxp"
            rel="nofollow"
            target="_blank"
            className="w-full bg-black text-[#F4E800] py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-900 transition-all shadow-lg text-center block"
          >
            Claim!
          </a>

          {/* Terms */}
          <p className="text-black/50 text-xs text-center mt-4 sm:mt-6">
            18+ only. T&C apply. Please gamble responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}