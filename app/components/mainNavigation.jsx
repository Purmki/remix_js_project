import { useState } from 'react';
import { NavLink } from '@remix-run/react';

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="main-navigation" className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex justify-center w-full">
            <ul className="flex justify-center space-x-4">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center text-white underline'
                      : 'flex items-center text-white hover:underline'
                  }
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5260/5260293.png"
                    alt="Home"
                    className="w-6 h-6 mr-2 fill-current"
                  />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/appointments"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center text-white underline'
                      : 'flex items-center text-white hover:underline'
                  }
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-pet-hospital-1131157.png"
                    alt="Create Appointment"
                    className="w-6 h-6 mr-2 fill-current"
                  />
                  Create Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/EditAppointments"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center text-white underline'
                      : 'flex items-center text-white hover:underline'
                  }
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/petshop-outline-1/512/pet_health_report_pet_care_veterinary_clinic_check_note_diagnostic-512.png"
                    alt="Appointments"
                    className="w-6 h-6 mr-2 fill-current"
                  />
                  Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactForm"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center text-white underline'
                      : 'flex items-center text-white hover:underline'
                  }
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png"
                    alt="Contact Us"
                    className="w-6 h-6 mr-2 fill-current"
                  />
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="md:hidden block text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden justify-center w-full`}>
        <ul className="flex justify-center flex-col space-y-4">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white underline'
                  : 'flex items-center text-white hover:underline'
              }
              onClick={toggleMenu}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5260/5260293.png"
                alt="Home"
                className="w-6 h-6 mr-2 fill-current"
              />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white underline'
                  : 'flex items-center text-white hover:underline'
              }
              onClick={toggleMenu}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-pet-hospital-1131157.png"
                alt="Create Appointment"
                className="w-6 h-6 mr-2 fill-current"
              />
              Create Appointment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/EditAppointments"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white underline'
                  : 'flex items-center text-white hover:underline'
              }
              onClick={toggleMenu}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/petshop-outline-1/512/pet_health_report_pet_care_veterinary_clinic_check_note_diagnostic-512.png"
                alt="Appointments"
                className="w-6 h-6 mr-2 fill-current"
              />
              Appointments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contactForm"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white underline'
                  : 'flex items-center text-white hover:underline'
              }
              onClick={toggleMenu}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png"
                alt="Contact Us"
                className="w-6 h-6 mr-2 fill-current"
              />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
