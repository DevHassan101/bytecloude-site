import Image from "next/image";

export default function AboutSkills() {
    const skills = [
        { id: 1, name: "WordPress", level: 95, image: "/images/skills/press.png" },
        { id: 2, name: "JavaScript", level: 90, image: "/images/skills/js.png" },
        { id: 3, name: "Bootstrap", level: 85, image: "/images/skills/strap.png" },
        { id: 4, name: "React.js", level: 92, image: "/images/skills/react.png" },
        { id: 5, name: "Next.js", level: 88, image: "/images/skills/next.png" },
        { id: 6, name: "Node.js", level: 80, image: "/images/skills/node.png" },
    ];
    return (
        <>
            <section className="main-skills-section relative py-22 px-28 overflow-hidden">
                <div className="skills-header text-center relative">
                    <div className="inline-flex items-center gap-3 py-3 px-7 border border-[#3bbbfc]/40 rounded-full text-sm text-white uppercase tracking-widest bg-linear-to-r from-[#3bbbfc]/5 via-[#3bbbfc]/10 to-[#3bbbfc]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,187,252,0.1)]">
                        <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)]" />
                        <span className="font-semibold">Our Expertise</span>
                        <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight relative">
                        <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-3">
                            Shaping Future
                        </span>
                        <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Digital Experiences
                        </span>
                        <div className="absolute -bottom-5 left-0 right-0 w-150 mx-auto h-1 bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
                    </h1>
                    <div className="mt-9 max-w-3xl mx-auto">
                        <p className="text-[18px] text-white/80 font-medium mt-5">We combine technical expertise with bold design to build products that matter <br /> crafting seamless interactions that connect brands with people.</p>
                    </div>
                </div>
                <div className="skills-grid grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 px-4">
                    {skills.map((skill) => (
                        <div key={skill.id} className="group relative p-8 rounded-4xl border border-[#3bbbfc]/50 bg-white/5 backdrop-blur-md 
                            transition-all duration-500 hover:-translate-y-3 hover:border-[#3bbbfc]/40 overflow-hidden">

                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />

                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#3bbbfc]/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="skill-top flex justify-start items-center gap-6">
                                    <div className="skill-icon relative w-16 h-16 shrink-0 flex justify-center items-center rounded-2xl border-2 border-white/50 bg-linear-to-br from-white to-gray-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:rotate-10 transition-transform duration-500">
                                        <Image src={skill.image} alt={skill.name} width={38} height={38} className="object-contain" />
                                        <div className="absolute inset-0 border border-white/50 rounded-2xl" />
                                    </div>
                                    <div className="skill-name">
                                        <h3 className="text-2xl text-white font-black group-hover:text-[#3bbbfc] transition-colors duration-300">
                                            {skill.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="w-2 h-2 rounded-full bg-[#3bbbfc] animate-pulse" />
                                            <p className="text-[12px] text-[#3bbbfc] font-bold uppercase tracking-widest">Expertise</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-bot mt-10">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs text-white/50 font-bold uppercase tracking-widest">Proficiency</span>
                                        <span className="text-2xl text-white font-black tabular-nums drop-shadow-[0_0_10px_rgba(59,188,252,0.3)]">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="relative w-full h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                                        <div className="h-full rounded-full transition-all duration-[1.5s] ease-out relative"
                                            style={{
                                                width: `${skill.level}%`, background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)",
                                                boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)"
                                            }}>
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}