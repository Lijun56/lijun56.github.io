import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const [currentCategory, setCategory] = useState('Featured');

  const categories = ['Featured', 'MLE', 'SDE', 'DS', 'VR'];

  const filterByCategory = (cat) => {
    setCategory(cat);
  };

  const categorystyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '20px',
  };

  const filteredProjects = useMemo(() => {
    if (currentCategory === 'Featured') {
      return data.filter((project) => project.feature);
    }
    return data.filter((project) => project.category.includes(currentCategory));
  }, [currentCategory]);

  return (
    <Main title="Projects" description="Learn about Lijun Zhu's projects.">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            <div style={categorystyle}>
              {categories.map((cat) => (
                <button
                  type="button"
                  className="button"
                  key={cat}
                  onClick={() => filterByCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>
        <div className="projects-list">
          {filteredProjects.map((project) => (
            <Cell data={project} key={project.title} />
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Projects;
