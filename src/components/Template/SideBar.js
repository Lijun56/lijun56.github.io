import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lijun Zhu</h2>
        <p>
          <a href="mailto:zlijun.engr@gmail.com">zlijun.engr@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <img
        src={`${PUBLIC_URL}/images/UI_favi/favicon.ico`}
        alt="Purdue Logo"
      />
      <img
        src={`${PUBLIC_URL}/images/purude_favi/favicon.ico`}
        alt="Purdue Logo"
        style={{ width: '55px', height: '55px' }}
      />
      {/* <h2>About</h2> */}
      <p>
        Hi, My name is Stephen (Lijun), and I&apos;m currently pursuing my Master&apos;s in
        Computer Science
        <a href="https://siebelschool.illinois.edu/"> (MCS) at the University of Illinois at Urbana-Champaign </a>
        I earned my Bachelor&apos;s degree in <a href="https://engineering.purdue.edu/ECE"> Computer Engineering (BSCompE) at Purdue University </a>
        <br />
        I&apos;m passionate about machine learning and software development, and I&apos;ve
        built a solid foundation in these areas through both my studies and practical experience.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Lijun Zhu <Link to="/">lijun56.github.io/personal-site/</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
