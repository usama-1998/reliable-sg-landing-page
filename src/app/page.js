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
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    {/* Dark Car Outline Background */}
                    <div className="absolute inset-0 bg-[#0f1115]" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1d24 0%, #0f1115 100%)'
                    }}></div>

                    {/* Red Glow Effects */}
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FE0D15] rounded-full blur-[150px] opacity-15 animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-10"></div>

                    {/* Mesh Grid */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block bg-black text-[#FE0D15] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-white/10 shadow-lg transform -rotate-2 backdrop-blur-md">
                            Priority Service for PHV Drivers
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-10 transform -skew-x-2">
                            BATTERY <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">DEAD?</span><br />
                            <span className="text-[#FE0D15] inline-block transform -skew-x-12">WE REVIVE IT.</span>
                        </h1>

                        <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                            Don't lose income waiting. <strong className="text-white">Reliable SG</strong> is the rapid response team for Grab, Gojek, and Tada drivers. <br className="hidden md:block" />
                            <span className="bg-[#FE0D15]/10 text-[#FE0D15] px-2 py-0.5 rounded-sm border border-[#FE0D15]/20">30 min</span> arrival.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="group relative px-10 py-5 bg-[#FE0D15] text-black font-black text-xl rounded-sm w-full sm:w-auto overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(254,13,21,0.4)]">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <Phone className="w-6 h-6 fill-current" /> GET RESCUED
                                </span>
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-xl rounded-sm w-full sm:w-auto hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" />
                                WhatsApp Us
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-6 opacity-60 text-sm font-mono text-gray-400">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#FE0D15]" /> Avg Arrival: 22 Mins
                            </div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#FE0D15]" /> No Hidden Fees
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Divider */}

            </header>

            {/* VIDEO / DEMO SECTION */}
            <section className="py-24 bg-[#15171c] relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#FE0D15]/5 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative group perspective-1000">
                            {/* Technical Frame */}
                            <div className="absolute -inset-4 border-2 border-[#FE0D15]/20 rounded-sm opacity-50 group-hover:inset-0 transition-all duration-500">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FE0D15]"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FE0D15]"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FE0D15]"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FE0D15]"></div>
                            </div>

                            <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl transform transition-transform group-hover:scale-[1.01]">
                                <img
                                    src="/mechanic_battery.png"
                                    alt="Mechanic working on car"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                <button className="relative z-10 w-20 h-20 bg-[#FE0D15] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(254,13,21,0.5)] group/play">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-black border-b-[12px] border-b-transparent ml-2 group-hover/play:border-l-white transition-colors"></div>
                                </button>

                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="bg-black/90 backdrop-blur-md px-4 py-2 text-xs font-mono text-[#FE0D15] border-l-4 border-[#FE0D15]">
                                        LIVE FOOTAGE: 45 SEC SWAP
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-[#FE0D15] animate-pulse"></div>
                                        <div className="w-1 h-1 bg-[#FE0D15] animate-pulse delay-75"></div>
                                        <div className="w-1 h-1 bg-[#FE0D15] animate-pulse delay-150"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block text-[#FE0D15] font-bold tracking-widest text-xs uppercase mb-4 border-b border-[#FE0D15] pb-1">Efficiency First</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">BUILT FOR THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE0D15] to-red-500 inline-block transform -skew-x-12">HUSTLE</span>.</h2>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-sm flex items-center justify-center border border-white/10 group-hover:border-[#FE0D15]/50 transition-colors shadow-lg">
                                        <Clock className="text-[#FE0D15] w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FE0D15] transition-colors">Zero Downtime</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">We know every minute off the road costs you money. Our rapid response team is stationed island-wide for instant deployment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-sm flex items-center justify-center border border-white/10 group-hover:border-[#FE0D15]/50 transition-colors shadow-lg">
                                        <Battery className="text-[#FE0D15] w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FE0D15] transition-colors">Premium Amaron & Varta</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">We only stock batteries that last. 12-month onsite warranty included for full peace of mind.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-sm flex items-center justify-center border border-white/10 group-hover:border-[#FE0D15]/50 transition-colors shadow-lg">
                                        <ShieldCheck className="text-[#FE0D15] w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FE0D15] transition-colors">Professional Install</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">Proper memory saving during swap. No reset radio or ECU settings. You drive off instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING / BRANDS */}
            <section id="benefits" className="py-24 border-y border-white/5 bg-[#0f1115] relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FE0D15] rounded-full blur-[180px] opacity-[0.03] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">Price Transparency</div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">PHV <span className="text-[#FE0D15] italic inline-block transform -skew-x-12">Friendly</span> Pricing</h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg">No shock bill. The price we quote is the final price you pay. Includes installation, testing, and warranty.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-[#15171c]/50 backdrop-blur-sm p-8 rounded-sm border border-white/5 hover:border-[#FE0D15]/30 transition-all duration-300 relative group hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Battery className="w-16 h-16 text-gray-500 group-hover:text-[#FE0D15] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Standard Asian</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-sm text-gray-500">from</span>
                                <span className="text-4xl font-black text-white">$90</span>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-400 mb-8 border-t border-white/5 pt-6">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> Honda / Toyota / Hyundai</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> 45Ah - 60Ah Spec</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> Free Onsite Install</li>
                            </ul>
                            <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors font-bold rounded-sm text-sm uppercase tracking-wide">Select This Plan</button>
                        </div>

                        {/* Card 2 - Highlighted */}
                        <div className="bg-[#1a1d24] p-8 rounded-sm border-2 border-[#FE0D15] transform md:-translate-y-6 shadow-[0_0_50px_rgba(254,13,21,0.15)] relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FE0D15] text-black text-xs font-black px-6 py-2 rounded-sm uppercase tracking-widest shadow-lg">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">High Perf. / SUV</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-sm text-gray-400">from</span>
                                <span className="text-5xl font-black text-[#FE0D15]">$120</span>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> Vezel / Alphard / Wish</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> <span className="text-white font-bold">Start-Stop Ready (EFB)</span></li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> 12-Month Warranty</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> Priority Dispatch</li>
                            </ul>
                            <button className="w-full py-4 bg-[#FE0D15] text-black font-black rounded-sm text-sm uppercase tracking-wide hover:brightness-110 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(254,13,21,0.4)]">Select This Plan</button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#15171c]/50 backdrop-blur-sm p-8 rounded-sm border border-white/5 hover:border-[#FE0D15]/30 transition-all duration-300 relative group hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Zap className="w-16 h-16 text-gray-500 group-hover:text-[#FE0D15] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Continental</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-sm text-gray-500">from</span>
                                <span className="text-4xl font-black text-white">$160</span>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-400 mb-8 border-t border-white/5 pt-6">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> Merc / BMW / Audi</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> AGM Technology</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FE0D15] flex-shrink-0" /> <span className="text-white font-bold">Computer Reset Included</span></li>
                            </ul>
                            <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors font-bold rounded-sm text-sm uppercase tracking-wide">Select This Plan</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section id="process" className="py-32 relative overflow-hidden bg-[#0f1115]">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="mb-20 text-center md:text-left">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">How It<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE0D15] to-red-600 inline-block transform -skew-x-12">Works</span></h2>
                            <div className="h-2 w-24 bg-[#FE0D15] mx-auto md:mx-0"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Interactive Connector Line */}
                        <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-[2px] bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FE0D15] to-transparent w-1/2 animate-[shimmer_3s_infinite_linear]"></div>
                        </div>

                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="w-32 h-32 bg-[#15171c] border-2 border-white/10 rounded-full flex items-center justify-center text-5xl font-black mb-8 relative z-10 shadow-2xl group-hover:border-[#FE0D15] group-hover:text-[#FE0D15] transition-all duration-300 mx-auto md:mx-0">
                                1
                                <div className="absolute inset-0 rounded-full bg-[#FE0D15] opacity-0 group-hover:opacity-10 transition-opacity blur-md"></div>
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-center md:text-left uppercase">Call or WhatsApp</h3>
                            <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">Tell us your car model and location. We provided a fixed quote instantly. No hidden start-up fees.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="w-32 h-32 bg-[#15171c] border-2 border-white/10 rounded-full flex items-center justify-center text-5xl font-black mb-8 relative z-10 shadow-2xl group-hover:border-[#FE0D15] group-hover:text-[#FE0D15] transition-all duration-300 mx-auto md:mx-0 delay-100">
                                2
                                <div className="absolute inset-0 rounded-full bg-[#FE0D15] opacity-0 group-hover:opacity-10 transition-opacity blur-md"></div>
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-center md:text-left uppercase">Fast Dispatch</h3>
                            <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">Our system routes the nearest mechanic to your coordinates. Track their arrival in real-time.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="w-32 h-32 bg-[#FE0D15] text-black border-2 border-[#FE0D15] rounded-full flex items-center justify-center text-5xl font-black mb-8 relative z-10 shadow-[0_0_30px_rgba(254,13,21,0.4)] mx-auto md:mx-0">
                                3
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-center md:text-left uppercase">Drive Away</h3>
                            <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">We perform professional memory-safe swap, verify alternator health, and you're good to go.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (AUTO-SCROLLING FILM ROLL) */}
            <section id="reviews" className="py-24 bg-[#111318] relative overflow-hidden border-y border-white/5">
                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
                    <h2 className="text-center text-4xl font-black uppercase tracking-tight">Trusted by <span className="underline decoration-[#FE0D15] decoration-4 underline-offset-4 inline-block transform -skew-x-12">SG Drivers</span></h2>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee gap-8 items-stretch">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-8 shrink-0">
                                {/* Testimonial 1 */}
                                <div className="w-[400px] bg-[#1a1d24] p-8 rounded-sm border-l-4 border-[#FE0D15] shadow-lg relative flex flex-col justify-between transform -skew-x-2 hover:skew-x-0 transition-transform duration-300">
                                    <div>
                                        <div className="flex text-[#FE0D15] mb-6 gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                                        </div>
                                        <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"Stuck at Changi Airport queue with dead battery. Reliable SG came in 20 mins. Saved my shift. Pricing very reasonable for midnight service."</p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#FE0D15]/20">MR</div>
                                        <div>
                                            <div className="font-bold text-base text-white">Mr. Razak</div>
                                            <div className="text-xs text-[#FE0D15] font-bold uppercase tracking-wider">Grab Driver</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="w-[400px] bg-[#1a1d24] p-8 rounded-sm border-l-4 border-[#FE0D15] shadow-lg relative flex flex-col justify-between transform -skew-x-2 hover:skew-x-0 transition-transform duration-300">
                                    <div>
                                        <div className="flex text-[#FE0D15] mb-6 gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                                        </div>
                                        <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"Very professional. They didn't just change battery, they checked my alternator too. Honest, fast, and no hidden costs."</p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#FE0D15]/20">AL</div>
                                        <div>
                                            <div className="font-bold text-base text-white">Alvin Lim</div>
                                            <div className="text-xs text-[#FE0D15] font-bold uppercase tracking-wider">Gojek Driver</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="w-[400px] bg-[#1a1d24] p-8 rounded-sm border-l-4 border-[#FE0D15] shadow-lg relative flex flex-col justify-between transform -skew-x-2 hover:skew-x-0 transition-transform duration-300">
                                    <div>
                                        <div className="flex text-[#FE0D15] mb-6 gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                                        </div>
                                        <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"Best price I found for AGM battery. Other shops wanted +$50. Highly recommend for any PHV driver needing quick fix."</p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#FE0D15]/20">DT</div>
                                        <div>
                                            <div className="font-bold text-base text-white">David Tan</div>
                                            <div className="text-xs text-[#FE0D15] font-bold uppercase tracking-wider">Mercedes C180</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Extra Testimonial (to fill space) */}
                                <div className="w-[400px] bg-[#1a1d24] p-8 rounded-sm border-l-4 border-[#FE0D15] shadow-lg relative flex flex-col justify-between transform -skew-x-2 hover:skew-x-0 transition-transform duration-300">
                                    <div>
                                        <div className="flex text-[#FE0D15] mb-6 gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                                        </div>
                                        <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"Saved me on a public holiday morning. Technician was polite and explained the battery health clearly."</p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#FE0D15]/20">SJ</div>
                                        <div>
                                            <div className="font-bold text-base text-white">Sarah James</div>
                                            <div className="text-xs text-[#FE0D15] font-bold uppercase tracking-wider">Honda Jazz</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <footer className="bg-[#FE0D15] text-black py-24 relative overflow-hidden">
                {/* Background Texture: Tire Tracks & Grunge */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                {/* Vivid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

                {/* Decorative Speed Lines */}
                <div className="absolute top-0 -left-10 w-[120%] h-full opacity-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-[20%] left-0 w-full h-[1px] bg-black transform -rotate-2"></div>
                    <div className="absolute top-[30%] left-0 w-full h-[2px] bg-black transform -rotate-2"></div>
                    <div className="absolute top-[60%] left-0 w-full h-[4px] bg-black transform -rotate-1"></div>
                    <div className="absolute top-[80%] left-0 w-full h-[1px] bg-black transform -rotate-3"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block bg-black text-[#FE0D15] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-black/20 shadow-lg transform -rotate-2">
                        Priority Dispatch Available
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic transform -skew-x-6">
                        Back on the Road.<br />
                        <span className="text-white drop-shadow-md">Faster.</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Don't let a dead battery kill your shift. <br />
                        We are <span className="underline decoration-black decoration-4 decoration-skip-ink">20 minutes</span> away.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="bg-black text-white px-12 py-6 rounded-sm font-black text-2xl hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-black group">
                            <div className="w-10 h-10 bg-[#FE0D15] rounded-full flex items-center justify-center text-black group-hover:rotate-12 transition-transform">
                                <Phone className="w-5 h-5 fill-current" />
                            </div>
                            CALL 8888-1234
                        </button>
                        <button className="bg-white text-black border-4 border-black px-10 py-5 rounded-sm font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-3 shadow-lg">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-8 h-8" />
                            WhatsApp Us
                        </button>
                    </div>

                    <div className="mt-20 pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-sm font-bold opacity-70">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            &copy; 2026 Reliable SG. All rights reserved.
                        </div>
                        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-wider text-xs">
                            <span className="hover:underline cursor-pointer">Service Areas</span>
                            <span className="hover:underline cursor-pointer">Privacy Policy</span>
                            <span className="hover:underline cursor-pointer">Terms</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ReliableSGLanding;
