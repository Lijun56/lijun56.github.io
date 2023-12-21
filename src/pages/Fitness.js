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
            <a href="https://complex-ladybug-21b.notion.site/Lijun-s-Fitness-Notes-c1bc5eb530624ceb912dbbcdca8776d2">here</a>.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
