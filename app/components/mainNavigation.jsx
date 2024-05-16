import { NavLink } from '@remix-run/react';

function MainNavigation() {
  return (
    <nav id="main-navigation" className="bg-blue-500 py-4">
  <ul className="flex justify-center space-x-4">
    <li className="nav-item">
      <NavLink exact to="/" className="text-white hover:underline">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/appointments" className="text-white hover:underline">Create Appointment</NavLink>
    </li>
    <li>
      <NavLink to="/EditAppointments" className="text-white hover:underline">Appointments</NavLink>
    </li>
  </ul>
</nav>
  );
}

export default MainNavigation;