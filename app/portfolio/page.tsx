import OurPortfolio from "../components/OurPortfolio";


export default function PortfolioPage() {
    return (
        <>
            <section className="portfolio-banner py-28 px-12 md:px-0">
                <div className="portfolio-overlay-banner">
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
                    <h1 className="text-4xl md:text-7xl font-semibold mb-4 text-white">Our Portfolio</h1>
                    <p className="text-sm md:text-lg text-white/80">We craft innovation digital solution that drive growth and deliver results for your business.</p>
                </div>
            </section>
            <section className="bg-black pb-12 md:pb-50">
                <OurPortfolio />
            </section>
        </>
    )
}