import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const [currentCategory, setCategory] = useState('All');

  const categories = ['All', 'VRdevelopment', 'SDE', 'MLS'];

  const filterByCategory = (cat) => {
    setCategory(cat);
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    margin: '20px',
    padding: '5px 10px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <Main title="Projects" description="Learn about Lijun Zhu's projects.">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            {/* <p>A selection of projects that I&apos;m not too ashamed of</p> */}
            <div style={containerStyle}>
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  style={buttonStyle}
                  onClick={() => filterByCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>
        {data
          .filter(
            (project) => currentCategory === 'All'
              || project.category.includes(currentCategory),
          )
          .map((project) => (
            <Cell data={project} key={project.title} />
          ))}
      </article>
    </Main>
  );
};

export default Projects;
