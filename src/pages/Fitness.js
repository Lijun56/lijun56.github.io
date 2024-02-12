import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Lijun Zhu's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/fitness">Fitness</Link>
          </h2>
          <p>
            Lijun&apos;s Fitness Notes, please click{' '}
            <a href="https://fitness-coach.pages.dev/">here</a>.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
