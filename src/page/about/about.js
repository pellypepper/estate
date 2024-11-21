import React from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

import "./about.css";

export default function About() {
    return (
        <main>
            <aside>
            <Header />
            <section className="about-section-1">
         
      
   <div className="about-text">
   <h1> About DEE<span>Homes</span></h1>
   </div>
         </section>
            </aside>
            
       
    
        <section class="about-content">
              <div className="about-text-1">
              <h2>Your Trusted Estate and Letting Partner</h2>
            <p>
                At DEE HOMES, we pride ourselves on being the largest independent estate agents, specializing in residential sales, lettings, and commercial property across the region. We are committed to staying ahead in the ever-evolving property market, offering innovative virtual services across all departments. Get in touch today to discover how we can assist you.
            </p>
              </div>
    
            <div class="service-section">
                <h3>Residential Sales</h3>
                <p>
                    Our dynamic residential offices provide a professional, tailored, and enthusiastic service with dedicated local teams. We handle a diverse range of property types and offer expertise in various departments, including:
                </p>
                <ul>
                    <li>Land and New Homes</li>
                    <li>Prestigious Homes</li>
                    <li>All Types of Residential Property Sales</li>
                    <li>Probate Valuations</li>
                </ul>
                <p>Learn more about selling your property with DEE HOMES and how we can help you every step of the way.</p>
            </div>
    
            <div class="service-section">
                <h3>Residential Lettings</h3>
                <p>
                    Let DEE HOMES take care of your property investment. Whether you are just starting with a single property or have an extensive portfolio, we provide a comprehensive range of services to support you throughout the process:
                </p>
                <ul>
                    <li>Fully Managed Landlord Service</li>
                    <li>Let Only Landlord Service</li>
                    <li>Tenant Find Only Service</li>
                    <li>Prestigious Homes Lettings</li>
                </ul>
                <p>We offer a variety of options to fit your needs, ensuring the best outcomes for both landlords and tenants.</p>
            </div>
    
            <div class="service-section">
                <h3>Prestigious Homes</h3>
                <p>
                    From large luxury properties to unique character homes, our team specializes in handling prestigious homes. We provide bespoke marketing packages to highlight the value and charm of your property, including high-quality property particulars and signage.
                </p>
            </div>
    
            <div class="service-section">
                <h3>Land & New Homes</h3>
                <p>
                    Our expert team in Land & New Homes specializes in the acquisition, development, and sale of land. With a proven track record of successful marketing strategies, we offer comprehensive packages for developers looking to sell new homes in the region.
                </p>
            </div>
    
            <div class="service-section">
                <h3>Commercial Properties</h3>
                <p>
                    At DEE HOMES, we understand that every business has its unique needs. Our Commercial department offers a wide selection of properties for sale or lease, tailored to the specific requirements of your business. With over 30 years of experience, our team provides expert advice across various sectors, ensuring we find the ideal commercial property for your needs.
                </p>
            </div>
        </section>
            
           <section>
           <Footer />
           </section>
        </main>
    )
}
