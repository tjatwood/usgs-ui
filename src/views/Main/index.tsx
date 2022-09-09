import React from 'react';
import Card from './Card';

import sampleData from './sample-data.json';

import './index.scss';

const Main = (): JSX.Element => {
  return (
    <div className="Main">
      <div className="row">
        {
          sampleData.map((site) => (
            <div key={site.siteCode} className="cardHolder col-sm-4 g-4">
              <Card site={site} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Main;
