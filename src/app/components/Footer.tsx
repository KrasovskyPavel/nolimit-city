import logo from '../../assets/37977081c203cc53b6a7381e55cc1556af56af41.png';

export function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
                    <img
                        src={logo}
                        alt="NOLIMIT CITY"
                        className="h-10 sm:h-12 md:h-14"
                    />
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
                        {/* Payment methods */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
                            <span className="text-gray-500 text-xs sm:text-sm">
                                Payment methods:
                            </span>
                            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                                    VISA
                                </div>
                                <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                                    MC
                                </div>
                                <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                                    AMEX
                                </div>
                                <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                                    CRYPTO
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-gray-500 text-xs sm:text-sm">
                            © 2026 Nolimit City. All rights reserved.
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-4 sm:mt-6 text-gray-600 text-xs leading-relaxed space-y-3">
                        <p>18+ | Play responsibly | BeGambleAware.org</p>

                        <p>
                            Evolution Gaming Malta Limited, a company
                            incorporated under the laws of Malta with
                            registration number C 44213, and registered address
                            at Spinola Park, Level 1, Mikiel Ang. Borg Street,
                            St. Julians, SPK1000, Malta, is licensed and
                            regulated by the Malta Gaming Authority under
                            license nr. MGA/CRP/187/2010 (issued on 08/04/2022).
                        </p>

                        <p>
                            Evolution Group is licensed and regulated in a
                            number of jurisdictions. All licences can be found
                            here.
                        </p>

                        <p>
                            Nolimit City Limited, a company incorporated under
                            the laws of Malta with registration number C 54001,
                            and registered address at Spinola Park, Level 1,
                            Mikiel Ang. Borg Street, St. Julians, SPK1000,
                            Malta, is licensed and regulated by the Malta Gaming
                            Authority under license nr. MGA/B2B/299/2015 (issued
                            on 01/08/2018).
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
