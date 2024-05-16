import { Link } from "@remix-run/react";
import { useEffect } from "react"; // Import useEffect hook from React
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import Swiper from "swiper"; // Import Swiper library


export const meta = () => {
  return [
    { title: "Pet Clinic Management App" },
    { name: "description", content: "Welcome to the Pet Clinic Management App!" },
  ];
};

export default function Index() {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000, // Set delay between slides
        disableOnInteraction: false, // Let autoplay continue even when user interacts with slider
      },
    });

    return () => {
      // Cleanup Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      <div className="swiper-container overflow-hidden relative h-64">
        <div className="swiper-wrapper flex transition-transform duration-1000 ease-in-out">
          <div className="swiper-slide"><img src="https://www.helpguide.org/wp-content/uploads/2023/02/Pets-1-1200x800.jpeg" alt="Slide 1" className="w-full h-full object-cover" /></div>
          <div className="swiper-slide"><img src="https://public.alaskacargo.com/getmedia/5cfc89b9-2845-4a29-9376-75ef200065a9/pet-connect_social.jpg?width=1200&height=630&ext=.jpg" alt="Slide 2" className="w-full h-full object-cover" /></div>
          <div className="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcsw_NS0DeKuxhN-9L1UUsHgADVWJMtTAQJeM-wfYZA&s" alt="Slide 3" className="w-full h-full object-cover" /></div>
          <div className="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWO7p2EUazIvHRzsvZd6s96nPpEETFTNKH-TGSbs_n&s" alt="Slide 4" className="w-full h-full object-cover" /></div>
          <div className="swiper-slide"><img src="https://animalmedicinesaustralia.org.au/wp-content/uploads/2022/11/Pet-report-2022-website-image-cropped-2-1120x630.jpg" alt="Slide 5" className="w-full h-full object-cover" /></div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-200 to-green-200 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to Happy Pets Clinic!</h1>
          <div className="flex justify-center mb-8">
            <Link to="/appointments" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create Appointments</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <img src="https://static01.nyt.com/images/2020/05/09/multimedia/09sp-ai-pets-promo/09sp-ai-pets-promo-mediumSquareAt3X.jpg" alt="" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 rounded-lg">
                <h2 className="text-lg font-semibold">Our Clinic</h2>
                <p className="text-gray-700">We provide top-notch care for your beloved pets.</p>
              </div>
            </div>
            <div className="relative">
              <img src="https://cdn.firstcry.com/education/2023/01/19165304/Names-Of-Pet-Animals-In-English-For-Kids.jpg" alt="" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 rounded-lg">
                <h2 className="text-lg font-semibold">Our Services</h2>
                <p className="text-gray-700">From routine check-ups to emergency care, we've got you covered.</p>
              </div>
            </div>
            {/* Add more images and information */}
            <div className="bg-gray-200 h-64"></div>
            <div className="bg-gray-200 h-64"></div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Visit Us Today!</p>
            <img src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/iStock-1324099927.jpg" alt="" className="w-full md:w-auto mx-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
