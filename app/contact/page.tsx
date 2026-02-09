import { Icon } from "@iconify/react";

export default function ContactUs() {
    return (
        <>

            <section className="contact-banner py-28 px-12 md:px-0">
                <div className="contact-overlay-banner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice"
                        style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="15%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="75%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                            </radialGradient>
                        </defs>
                        <g fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1">
                            <circle r="100" cx="400" cy="400" />
                            <circle r="200" cx="400" cy="400" />
                            <circle r="300" cx="400" cy="400" />
                            <circle r="400" cx="400" cy="400" />
                            <circle r="500" cx="400" cy="400" />
                            <circle r="600" cx="400" cy="400" />
                        </g>
                        <circle r="400" cx="400" cy="400" fill="url(#cccircular-grad)" opacity="0.5" />
                    </svg>
                </div>
                <div className="about-heading relative text-center mt-4">
                    <h1 className="text-4xl md:text-7xl font-semibold mb-4 text-white">Contact Us</h1>
                    <p className="text-sm md:text-lg text-white/80">We craft innovation digital solution that drive growth and deliver results for your business.</p>
                </div>
            </section>
            <div className="main-contact-section relative pt-18 md:pt-34 pb-20 md:pb-80 px-4 md:px-28 overflow-hidden bg-black">
                <div className="contact-border p-3 md:p-7 border border-[#3bbbfc]/40 rounded-3xl md:rounded-4xl"
                    style={{ background: "linear-gradient(135deg, rgba(59, 187, 252, 0.100) 0%, rgba(1, 168, 252, 0.100) 100%)" }}>
                    {/* contact-card-start */}
                    <div className="contact-cards grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Office Address", info: "27 Divison St, New York, NY 10002, USA", btnText: "Get Direction", icon: "fluent:location-arrow-16-filled" },
                            { title: "Email Address", info: "TheByteCloude360@gmail.com", btnText: "Send Message", icon: "clarity:email-solid" },
                            { title: "Phone Number", info: "+92 3356343882, +92 3483987954", btnText: "Call Anytime", icon: "ri:phone-fill" }
                        ].map((item, index) => (
                            <div key={index}
                                className="group relative contact-card p-7 md:p-10 rounded-[17px] md:rounded-3xl bg-linear-to-br from-[#1176e2] via-[#3bbbfc] to-[#1176e2]  border border-white/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden">

                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="contact-icon relative w-13 h-13 md:w-16 md:h-16 bg-white rounded-[10px] md:rounded-xl flex justify-center items-center shadow-md group-hover:rotate-10 transition-transform duration-500">
                                    <Icon icon={item.icon} className="w-5.5 h-5.5 md:w-8 md:h-8 text-[#3bbbfc]" />
                                </div>

                                <div className="contact-info mt-6 md:mt-8 relative z-10">
                                    <h3 className="text-[22px] md:text-2xl text-white font-black tracking-wide">{item.title}</h3>
                                    <p className="text-sm md:text-[16px] text-white/90 font-medium mt-2 md:mt-4 leading-relaxed min-h-12.5">{item.info}</p>

                                    <button className="flex items-center mt-7 md:mt-8 text-sm md:text-[15px] font-bold uppercase tracking-widest text-white">
                                        <span className="relative pb-1 border-b-2 border-white/30 group-hover:border-white transition-all">
                                            {item.btnText}
                                        </span>
                                        <div className="ml-3 bg-white/20 p-1.5 md:p-2 rounded-full group-hover:bg-white group-hover:text-[#3bbbfc] transition-all">
                                            <Icon icon="lineicons:arrow-angular-top-right" className="w-4.5 h-4.5 md:w-5 md:h-5" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* contact-card-end */}

                    {/* contact-form-start */}
                    <div className="contact-section flex flex-wrap justify-between items-stretch mt-4 md:mt-7 gap-4 md:gap-0">
                        <div className="contact-info-map relative basis-full lg:basis-[46%]">
                            <div className="w-full h-full flex flex-col py-6 px-5 md:p-8 lg:p-10 bg-linear-to-br from-[#1176e2] via-[#3bbbfc] to-[#1176e2] shadow-2xl rounded-[17px] md:rounded-3xl">
                                <div className="contact-header mb-6 lg:mb-8">
                                    <h2 className="text-[25px] md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-3 lg:mb-4">
                                        Contact Information
                                    </h2>
                                    <p className="text-[14px] md:text-base text-white/90 font-medium leading-relaxed">
                                        Fill up the form and our Team will get back to you within 24 hours.
                                    </p>
                                </div>
                                <div className="map-container flex-1 min-h-50 md:min-h-75 lg:min-h-87.5 rounded-xl md:rounded-2xl overflow-hidden shadow-sm border-3 md:border-6 border-white backdrop-blur-sm mt-auto">
                                    <iframe className="w-full h-full rounded-md" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=hyderabad%20latifabad%20uni%20no4&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                                        title="Office Location" loading="lazy" allowFullScreen />
                                </div>
                                <div className="social-icons mt-6 lg:mt-8 flex flex-wrap md:flex-row items-center">
                                    <p className="text-white/85 text-sm md:text-base font-semibold mr-5 mb-3 md:mb-0">Connect with us:</p>
                                    <div className="icons flex justify-between items-center gap-3 lg:gap-4">
                                        {[
                                            { icon: "ri:facebook-fill", link: "#" },
                                            { icon: "ri:twitter-x-fill", link: "#" },
                                            { icon: "ri:instagram-fill", link: "#" },
                                            { icon: "ri:linkedin-fill", link: "#" }
                                        ].map((social, idx) => (
                                            <a key={idx} href={social.link} className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full 
                                           flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group">
                                                <Icon icon={social.icon} width="18" height="18" className="text-white group-hover:text-[#3bbbfc]" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form basis-full lg:basis-[52%]">
                            <div className="w-full h-full relative p-6 sm:p-8 lg:p-12 border border-[#3bbbfc]/60 rounded-[17px] md:rounded-3xl backdrop-blur-xl shadow-xl"
                                style={{ background: "linear-gradient(135deg, rgba(59, 187, 252, 0.100) 0%, rgba(1, 168, 252, 0.100) 100%)" }}>

                                <div className="absolute top-0 left-0 w-full h-full rounded-[17px] md:rounded-3xl bg-linear-to-br from-[#01a8fc]/10 
                                via-transparent to-[#3bbbfc]/10 pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-35 h-35 bg-[#01a8fc]/30 rounded-3xl blur-[70px]" />

                                <div className="form-header mb-8 md:mb-10">
                                    <h2 className="text-[25px] md:text-3xl lg:text-4xl text-[#5dc9ff] font-bold leading-tight mb-3">
                                        Ready to Scale Your Vision?
                                    </h2>
                                    <p className="text-white/80 text-sm md:text-base font-medium">
                                        Partner with us to transform your ideas into high-impact digital products.
                                    </p>
                                </div>

                                <form className="space-y-5 lg:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[15px] md:text-[17px] tracking-wide font-semibold">
                                                First Name
                                            </label>
                                            <input type="text" name="firstName" placeholder="John" className="bg-white/5 border border-white/30 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 text-[15px] md:text-[17px] text-white 
                        placeholder:text-white/40 focus:outline-none focus:border-[#3bbbfc] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,187,252,0.3)] transition-all duration-300" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[15px] md:text-[17px] tracking-wide font-semibold">
                                                Email Address
                                            </label>
                                            <input type="email" name="email" placeholder="example@gmail.com" className="bg-white/5 border border-white/30 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 text-[15px] md:text-[17px] text-white 
                        placeholder:text-white/40 focus:outline-none focus:border-[#3bbbfc] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,187,252,0.3)] transition-all duration-300" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[15px] md:text-[17px] tracking-wide font-semibold">
                                                Phone Number
                                            </label>
                                            <input type="tel" name="phone" placeholder="+92 000 0000000" className="bg-white/5 border border-white/30 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 text-[15px] md:text-[17px] text-white 
                        placeholder:text-white/40 focus:outline-none focus:border-[#3bbbfc] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,187,252,0.3)] transition-all duration-300" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[15px] md:text-[17px] tracking-wide font-semibold">
                                                Subject
                                            </label>
                                            <input type="text" name="subject" placeholder="How can we help?" className="bg-white/5 border border-white/30 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 text-[15px] md:text-[17px] text-white 
                        placeholder:text-white/40 focus:outline-none focus:border-[#3bbbfc] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,187,252,0.3)] transition-all duration-300" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-white text-[15px] md:text-[17px] tracking-wide font-semibold">
                                            Your Message
                                        </label>
                                        <textarea name="message" rows={5} placeholder="Write your message here..." className="bg-white/5 border border-white/30 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 text-[15px] md:text-[17px] text-white 
                    placeholder:text-white/40 focus:outline-none focus:border-[#3bbbfc] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,187,252,0.3)] transition-all duration-300 resize-none">
                                        </textarea>
                                    </div>

                                    <div className="pt-2">
                                        <button type="submit"
                                            className="group relative py-2.75 md:py-3 px-6 sm:px-8 flex items-center justify-center gap-3 bg-linear-to-tl from-[#3bbbfc] to-[#0188fc] rounded-[10px] 
                        overflow-hidden transition-all duration-500 shadow-[0_5px_10px_rgba(59,188,252,0.50)] hover:shadow-[0_10px_20px_rgba(59,188,252,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer w-full sm:w-auto">
                                            <span className="text-white font-semibold text-sm sm:text-md tracking-wide relative z-10">
                                                Send Message
                                            </span>
                                            <div className="bg-white/30 p-2 rounded-full relative z-10 group-hover:rotate-45 group-hover:bg-white/30 transition-all duration-500">
                                                <Icon icon="mingcute:send-fill" width="18" height="18" className="text-white" />
                                            </div>
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* contact-form-end */}
                </div>
            </div>
        </>
    )
}