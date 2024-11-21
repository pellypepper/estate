import React, {useEffect} from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';



import "./listing.css";

// Listing data
const listingDetails = [
    {
        img: "imagess/bg14.jpg",
        address: "Betley Drive",
        details: "Luxury Living in Harmony with Nature",
        info: "Nestled within lush greenery, this exquisite property offers a serene escape from city life. With convenient access to major motorways and modern amenities, it’s an ideal blend of tranquility and connectivity."
    },
    {
        img: "imagess/bg15.jpg",
        address: "Allen Avenue",
        details: "Spacious Apartments with Contemporary Design",
        info: "Discover a perfect blend of style and comfort in these 2-3 bedroom apartments, set within a vibrant neighborhood. Ideal for families and professionals, these homes offer sleek interiors and a prime location."
    },
    {
        img: "imagess/bg16.jpg",
        address: "MarkStemp Street",
        details: "Exclusive Homes in a Prime Location",
        info: "Experience the final phase of this distinguished development featuring premium homes. Located in a charming village, these properties provide a perfect mix of luxury and rural appeal."
    },
    {
        img: "imagess/bg18.jpg",
        address: "Greewnwich Rd",
        details: "Exceptional Country Retreat",
        info: "This stunning four-bedroom home offers versatile living spaces, perfect for families seeking a peaceful countryside setting. Enjoy breathtaking views and modern comforts in this uniquely designed property."
    },
    {
        img: "imagess/bg19.jpg",
        address: "HillsBag Rd",
        details: "A Distinctive Family Home",
        info: "This spacious and elegantly designed property is set within a picturesque village. Featuring bright interiors and thoughtfully planned spaces, it offers an unparalleled living experience in a sought-after area."
    },
    {
        img: "imagess/bg20.jpg",
        address: "Yellowood Lane",
        details: "Sophistication Meets Convenience",
        info: "A meticulously refurbished detached property featuring four expansive bedrooms, state-of-the-art kitchens and bathrooms, and an inviting garden with ample outdoor space. Perfect for family living."
    }
];


export default function Rent() {
    useEffect(() => {
        const animateElements = document.querySelectorAll(".listing-section-1-text, .listing-wrapper, .listing-section-3-text");

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
        <main>
            <section className="listing-section-1 rent-section-1">
                <Header />
                <div className="listing-section-1-text">
                     <h1>Luxurious Properties for rent</h1>
                     <p>We are here to help you get a new home</p>
                  
                    </div>
            </section>
            <section className="listing-section-2">
                <div className="listing-container">
                {listingDetails.map((listing, index) => (
                    <div className="listing-wrapper" key={index}>
                        <img src={listing.img} alt={listing.address} />
                         <div> 
                         <h3>{listing.address}</h3>
                        <p>{listing.details}</p>
                        <span>{listing.info}</span>
                            </div>
                    </div>
                ))}
                </div>
            </section>
            <section className="listing-section-3 rent-section-3">
                <div className="listing-section-3-text">
                <AccessAlarmIcon  className="listing-icon" />
                    <h3>Show Home Opening Times </h3>
                    <p>There are 98 show homes open today.</p>
              
         
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </main>
    );
}
