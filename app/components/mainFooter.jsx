import React from 'react';

function MainFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">About Us</h5>
            <p className="text-gray-400">
              We are dedicated to providing the best possible care for your pets.
              <br />Our clinic offers a wide range of services to keep your pet healthy and happy.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/appointments" className="text-gray-400 hover:text-white">Create Appointment</a></li>
              <li><a href="/EditAppointments" className="text-gray-400 hover:text-white">Appointments</a></li>
              <li><a href="/contactForm" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 hidden md:block">
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Pet Street</li>
              <li className="text-gray-400">Pet City, PC 12345</li>
              <li className="text-gray-400">Email: info@petclinic.com</li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 hidden md:block">
  <h5 className="font-bold text-lg mb-4">Follow Us</h5>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com/profile.php?id=100042355883435&locale=he_IL" className="text-gray-400 hover:text-white">
      <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" className="w-6 h-6 inline-block" alt="facebook Logo" style={{backgroundColor: "white"}} />
    </a>
    <a href="https://www.instagram.com/omergoldberger/" className="text-gray-400 hover:text-white">
      <img src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png" className="w-6 h-6 inline-block" alt="Instagram Logo" style={{backgroundColor: "white"}} />
    </a>
    <a href="https://github.com/Purmki?tab=repositories" className="text-gray-400 hover:text-white">
      <img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" className="w-6 h-6 inline-block" alt="GitHub Logo" style={{backgroundColor: "white"}} />
    </a>
  </div>
</div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Pet Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
