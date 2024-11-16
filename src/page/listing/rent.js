import React, {useEffect} from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';



import "./listing.css";

// Listing data
const listingDetails = [
    {
        img: "imagess/bg14.jpg",
        address: "Bellmont Hall",
        details: "The Natural Place To Live",
        info: "The site offers a rare opportunity for development in such a sought after location with proposed access from the already established Allott Close Development. (1.30 acres). AmenitiesWith easy access to the M18 (M1) motorway "
    },
    {
        img: "imagess/bg15.jpg",
        address: "Cedar Street",
        details: "2-3 Bedroom Apartments",
        info: "An exceptionally rare opportunity to acquire a substantial detached family residence standing in wooded grounds totalling 0.6 acre. 'Woodside' is an individual, period property located on an exclusive road "
    },
    {
        img: "imagess/bg16.jpg",
        address: "Bellmont Hall",
        details: "Final Phase Now Selling",
        info: "A magnificent period home in a semi-rural setting, surrounded by fields and farmland, located in the heart of the village."
    },
    {
        img: "imagess/bg18.jpg",
        address: "TredFast Rd",
        details: "Stunning Rural Location",
        info: "This unique FOUR BEDROOM property offers the chance of independent living with separate living accommodation upstairs. Having been adapted by the current owners, the property offers flexible living opportunities..."
    },
    {
        img: "imagess/bg19.jpg",
        address: "StedGroove Rd",
        details: "A Rare Opportunity",
        info: "****VIEWING IS ESSENTIAL TO FULLY APPRECIATE WHAT THIS PROPERTY HAS TO OFFER****Set within the charming and picturesque village of Clayton is a rare opportunity to purchase this exceptionally spacious bright and airy..."  
      },

        
        {
            img: "imagess/bg20.jpg",
            address: "ParkView Lane",
            details: "Offer In Excess",
            info: "This exceptional detached property with NO VENDOR CHAIN, featuring four spacious bedrooms, newly refurbished bathrooms, a well-equipped kitchen, three reception rooms with garden views, and charming outdoor spaces including a double garage"    }
    
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
