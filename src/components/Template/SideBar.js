import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lijun Zhu</h2>
        <p><a href="mailto:zhu944@purdue.edu">zhu944@purdue.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Lijun, a software engineer and amateur bodybuilding athlete. I graduated from <a href="https://purdue.edu/">Purdue University </a>
        with a degree in Computer Engineering. I am passionate about software development,
        specializing in VR application development and large-scale database management.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lijun Zhu <Link to="/">lijun56.github.io/personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
