'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Battery, Zap, Clock, ShieldCheck, CheckCircle2, ChevronDown, MapPin, Star, Menu, X } from 'lucide-react';

// NOTE: In a real Next.js app, this file would be located at 'app/page.js'
// You can keep the component name or rename it to 'Page'.

const ReliableSGLanding = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll for sticky header styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-[#FE0D15] selection:text-black overflow-x-hidden">
            {/* Texture Overlay for "Grainy" look */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Sticky Navigation */}
            <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-3 bg-[#0f1115]/90 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <img src="/logo.png" alt="Reliable SG" className="h-12 w-auto" />

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <button onClick={() => scrollToSection('benefits')} className="hover:text-[#FE0D15] transition-colors">Why Us?</button>
                        <button onClick={() => scrollToSection('process')} className="hover:text-[#FE0D15] transition-colors">Process</button>
                        <button onClick={() => scrollToSection('reviews')} className="hover:text-[#FE0D15] transition-colors">Reviews</button>
                        <button className="bg-white text-black px-5 py-2 rounded-sm font-bold hover:bg-[#FE0D15] transition-colors flex items-center gap-2">
                            <Phone className="w-4 h-4" /> 8888-1234
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-30 bg-[#0f1115] pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-6 text-xl font-bold">
                        <button onClick={() => scrollToSection('benefits')} className="text-left border-b border-white/10 pb-4">Why Us?</button>
                        <button onClick={() => scrollToSection('process')} className="text-left border-b border-white/10 pb-4">Process</button>
                        <button onClick={() => scrollToSection('reviews')} className="text-left border-b border-white/10 pb-4">Reviews</button>
                        <button className="bg-[#FE0D15] text-black p-4 rounded-sm font-bold flex justify-center items-center gap-2 mt-4">
                            <Phone className="w-5 h-5" /> Call Now
                        </button>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 right-[-10%] w-[300px] h-[300px] bg-[#FE0D15] rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FE0D15]/30 bg-[#FE0D15]/10 text-[#FE0D15] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE0D15] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE0D15]"></span>
                            </span>
                            Priority Service for PHV Drivers
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                            BATTERY DEAD?<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">WE REVIVE IT.</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Don't lose income waiting for a tow. <strong className="text-white">Reliable SG</strong> specializes in rapid onsite battery replacement for Grab, Gojek, and Tada drivers. Back on the road in <span className="text-[#FE0D15] underline decoration-dashed underline-offset-4">30 minutes</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="group relative px-8 py-4 bg-[#FE0D15] text-black font-bold text-lg rounded-sm w-full sm:w-auto overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" /> GET RESCUED NOW
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-sm w-full sm:w-auto hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                                WhatsApp Us
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
                            Average Arrival: 22 Mins • No Hidden Fees
                        </p>
                    </div>
                </div>

                {/* Custom Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-[#0f1115]"></path>
                    </svg>
                </div>
            </header>

            {/* VIDEO / DEMO SECTION (Reference to the audio request) */}
            <section className="py-20 bg-[#15171c] relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            {/* Decorative border frame effect */}
                            <div className="absolute -inset-2 border-2 border-[#FE0D15] rounded-sm opacity-50 group-hover:inset-0 transition-all duration-500"></div>
                            <div className="relative aspect-video bg-gray-800 rounded-sm overflow-hidden flex items-center justify-center border border-white/10">
                                {/* Placeholder for the video mentioned in audio */}
                                <img
                                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Mechanic working on car"
                                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                                />
                                <button className="relative z-10 w-16 h-16 bg-[#FE0D15] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                </button>
                                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs font-mono text-[#FE0D15] border border-[#FE0D15]/20">
                                    WATCH: 45 Second Change
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the <span className="text-[#FE0D15]">Hustle</span>.</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10">
                                        <Clock className="text-[#FE0D15]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Zero Downtime</h3>
                                        <p className="text-gray-400 text-sm">We know every minute off the road costs you money. Our rapid response team is stationed island-wide.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10">
                                        <Battery className="text-[#FE0D15]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Premium Amaron & Varta</h3>
                                        <p className="text-gray-400 text-sm">We only stock batteries that last. 12-month onsite warranty included for peace of mind.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10">
                                        <ShieldCheck className="text-[#FE0D15]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Professional Install</h3>
                                        <p className="text-gray-400 text-sm">Proper memory saving during swap. No reset radio or ECU settings. You drive off instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING / BRANDS */}
            <section id="benefits" className="py-20 border-y border-white/5 bg-[#0f1115]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Transparent PHV Pricing</h2>
                        <p className="text-gray-400">No shock bill. The price we quote is the price you pay.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-[#15171c] p-8 rounded-sm border border-white/5 hover:border-[#FE0D15]/50 transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <Battery className="w-12 h-12 text-gray-700 group-hover:text-[#FE0D15] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Standard Asian</h3>
                            <div className="text-3xl font-bold text-white mb-6">from $90</div>
                            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Honda / Toyota / Hyundai</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> 45Ah - 60Ah Spec</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Free Onsite Install</li>
                            </ul>
                            <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-bold rounded-sm text-sm">CHECK MODEL</button>
                        </div>

                        {/* Card 2 - Highlighted */}
                        <div className="bg-[#1a1d24] p-8 rounded-sm border border-[#FE0D15] transform md:-translate-y-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FE0D15] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">High Perf. / SUV</h3>
                            <div className="text-3xl font-bold text-[#FE0D15] mb-6">from $120</div>
                            <ul className="space-y-3 text-sm text-gray-300 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Vezel / Alphard / Wish</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Start-Stop Ready (EFB)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> 12-Month Warranty</li>
                            </ul>
                            <button className="w-full py-3 bg-[#FE0D15] text-black font-bold rounded-sm text-sm hover:brightness-110 transition-all">CHECK MODEL</button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#15171c] p-8 rounded-sm border border-white/5 hover:border-[#FE0D15]/50 transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <Battery className="w-12 h-12 text-gray-700 group-hover:text-[#FE0D15] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Continental</h3>
                            <div className="text-3xl font-bold text-white mb-6">from $160</div>
                            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Merc / BMW / Audi</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> AGM Technology</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FE0D15]" /> Computer Reset Included</li>
                            </ul>
                            <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-bold rounded-sm text-sm">CHECK MODEL</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION (Hand-made feel with SVG paths) */}
            <section id="process" className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">How It<br /><span className="text-[#FE0D15]">Works</span></h2>
                        <p className="text-gray-500 pb-2">Simple 3-step recovery.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-800 border-t border-dashed border-gray-600"></div>

                        {/* Step 1 */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-[#0f1115] border border-white/20 rounded-full flex items-center justify-center text-3xl font-black mb-6 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] group hover:border-[#FE0D15] transition-colors mx-auto md:mx-0">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">Call or WhatsApp</h3>
                            <p className="text-gray-400 text-sm text-center md:text-left">Tell us your car model and location. We quote you the exact price instantly.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-[#0f1115] border border-white/20 rounded-full flex items-center justify-center text-3xl font-black mb-6 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] group hover:border-[#FE0D15] transition-colors mx-auto md:mx-0">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">Dispatch Tech</h3>
                            <p className="text-gray-400 text-sm text-center md:text-left">Our nearest mobile mechanic is routed to you. Live updates on arrival time.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-[#FE0D15] text-black border border-[#FE0D15] rounded-full flex items-center justify-center text-3xl font-black mb-6 relative z-10 shadow-[0_0_20px_rgba(204,255,0,0.3)] mx-auto md:mx-0">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">Drive Away</h3>
                            <p className="text-gray-400 text-sm text-center md:text-left">We swap the battery, test the alternator, and you're back on the road earning.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (Masonry style for custom feel) */}
            <section id="reviews" className="py-20 bg-[#15171c]">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-center text-3xl font-bold mb-12">Trusted by SG Drivers</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#0f1115] p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border border-white/5">
                            <div className="flex text-[#FE0D15] mb-4 gap-1">
                                <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-gray-300 italic mb-4">"Stuck at Changi Airport queue with dead battery. Reliable SG came in 20 mins. Saved my shift. Pricing very reasonable for midnight service."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">MR</div>
                                <div>
                                    <div className="font-bold text-sm">Mr. Razak</div>
                                    <div className="text-xs text-gray-500">Grab Driver, Toyota Noah</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0f1115] p-6 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border border-white/5 mt-8 md:mt-0">
                            <div className="flex text-[#FE0D15] mb-4 gap-1">
                                <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-gray-300 italic mb-4">"Very professional. They didn't just change battery, they checked my alternator too. Honest service."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">AL</div>
                                <div>
                                    <div className="font-bold text-sm">Alvin Lim</div>
                                    <div className="text-xs text-gray-500">Gojek Driver, Honda Vezel</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0f1115] p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border border-white/5 md:col-span-2 lg:col-span-1">
                            <div className="flex text-[#FE0D15] mb-4 gap-1">
                                <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-gray-300 italic mb-4">"Best price I found for AGM battery. Other shops wanted +$50. Highly recommend for PHV."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">DT</div>
                                <div>
                                    <div className="font-bold text-sm">David Tan</div>
                                    <div className="text-xs text-gray-500">Mercedes C180</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <footer className="bg-[#FE0D15] text-black py-20 relative overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Don't Get Stranded.</h2>
                    <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">Save our number now. You never know when you'll need a jumpstart or a swap.</p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="bg-black text-white px-10 py-5 rounded-sm font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl">
                            <Phone className="w-6 h-6" /> CALL 8888-1234
                        </button>
                        <button className="bg-white text-black border-2 border-black px-10 py-5 rounded-sm font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" /> WhatsApp
                        </button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium opacity-60">
                        <div>&copy; 2026 Reliable SG. All rights reserved.</div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <span>Singapore Wide Service</span>
                            <span>•</span>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ReliableSGLanding;
