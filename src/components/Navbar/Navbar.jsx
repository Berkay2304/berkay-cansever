import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: 'About Me',   to: 'about' },
    { label: 'Skills',     to: 'skills' },
    { label: 'Portfolio',  to: 'portfolio' },
    { label: 'Contact Me',    to: 'contact' },
  ];

  return (
    <nav className='nav-bar'>
        {/* LOGO */}
        <img src={logo} alt="logo" className="logo"/>

        {/* Hamburger ikon (mobil) */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menü */}
        <ul className={`nav-list ${open ? 'open' : ''}`}>
            {menu.map(({ label, to }, idx) => {
                const isLast = idx === menu.length - 1;
                return (
                <li key={to}>
                    <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-76}
                    spy
                    activeClass="active-link"
                    onClick={() => setOpen(false)}
                    className={`nav-link ${isLast ? 'contact-link' : ''}`}
                    >
                {label}
              </Link>
            </li>
            );
            })}
        </ul>
    </nav>
  );
}
