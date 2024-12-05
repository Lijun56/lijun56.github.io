import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/publications';

const Projects = () => (
  <Main title="Research" description="Learn about Lijun Zhu's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/Research">Publications</Link>
          </h2>
          <a
            href="https://scholar.google.com/citations?user=2Dl5LowAAAAJ&hl=en&oi=sra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar Profile
          </a>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
