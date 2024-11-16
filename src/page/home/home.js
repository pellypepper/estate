import React, {useEffect} from "react";
import Header from "../../component/header/header";
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa'; // FontAwesome
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import Footer from "../../component/footer/footer";
import "./home.css";

export default function Home() {
    useEffect(() => {
        const animateElements = document.querySelectorAll(".home-section-1-text, .home-section-4 h3, .home-section-4 span, .home-section-2-grid div,.home-section-2-text, .home-section-3-flex div, .home-section-4-grid div");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fadeIn");
                } else {
                    entry.target.classList.remove("fadeIn"); // Remove class when scrolled out
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach((element) => observer.observe(element));

        // Clean up observer on component unmount
        return () => observer.disconnect();
    }, []);


    return (
        <main className="home-container">
            <section className="home-section-1">
                <Header />

                <div className="home-section-1-text">
                    <h1>Find Your Dream Home</h1>
                    <p>Room as low as $10 per day with limited time offer discount</p>
                    <button>Let Us Guide Your Home</button>
                </div>
            </section>
            <section className="home-section-2">
                <div className="home-section-2-text">
                    <h1>Looking for somewhere new to call home?</h1>
                    <p>Our mission is to make it as easy as possible for you to buy, sell, let or rent your ideal property across all areas.</p>

                </div>
                <div className="home-section-2-grid">
                    <div className="grid-1">

                    </div>
                    <div className="grid-2">
                        <div className="grid-2-text">
                            <p>Looking to buy?</p>
                            <p>See properties available</p>
                        </div>


                    </div>
                    <div className="grid-3"></div>
                    <div className="grid-4">
                        <div className="grid-2-text">
                            <p>Looking to rent?</p>
                            <p>See properties available</p>
                        </div>


                    </div>

                </div>

            </section>
            <section className="home-section-3">
                <h3>Why Choose Us</h3>

                <div className="home-section-3-flex">
                    <div>
                        <FaHome size={30} /> {/* House icon */}
                        <p>Experienced agents</p>
                        <span>Find an experience agent who knows your market best</span>

                    </div>

                    <div>
                        <FaBuilding size={30} /> {/* Building icon */}
                        <p>Find your future home</p>
                        <span>We will help you find a new home by offering a smart real estate experience  </span>

                    </div>
                    <div>
                        <FaCity size={30} /> {/* City icon */}
                        <p>Buy or rent homes</p>
                        <span>Millions of houses and apartment in your favorites cities  </span>

                    </div>
                    <div>
                        <MdOutlineRealEstateAgent size={30} />
                        <p>List your own property </p>
                        <span>Sign up now and sell or rent your own properties </span>

                    </div>

                </div>

            </section>
            <section className="home-section-4">
                <h3>Best Properties</h3>
                <span>Find more properties in your city</span>
                <div className="home-section-4-grid">
                    <div className="sub-grid-wrapper-1">
                        <div className="sub-grid-1">

                        </div>
                        <div className="sub-grid-2">

                        </div>
                        <div className="sub-grid-3">

                        </div>

                    </div>
                    <div className="sub-grid-wrapper-2">
                        <div className="sub-grid-4">

                        </div>
                        <div className="sub-grid-5">

                        </div>
                        <div className="sub-grid-6">

                        </div>

                    </div>

                </div>


            </section>
           <section className="home-section-5">
           <Footer />
           </section>

        </main>
    )
}