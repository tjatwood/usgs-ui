import React from 'react';
import { Site, SiteTypeMap } from 'src/types/site.def';

import './index.scss';

const typeCodes: Record<string, string[]> = {
  ST: ['00045', '00065', '00060'],
  LK: ['00010', '00045'],
  GW: ['72019'],
  AT: ['00045']
};

interface CardProps {
  site: Site;
}
const Card = ({ site }: CardProps): JSX.Element => {
  const allowedDataCodes = typeCodes[site.siteTypeCode] || [];

  return (
    <div className="Card card">
      <div className="card-header">
        {site.siteName}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{SiteTypeMap[site.siteTypeCode]}</h6>
        {
          site.dataPoints
            .filter((dp) => allowedDataCodes.includes(dp.code))
            .map((dp) => (
              <p key={dp.code} className="card-text">
                {dp.name.substring(0, dp.name.indexOf(','))}: {dp.value} {dp.unit}
              </p>
            ))
        }
      </div>
    </div>
  );
};

export default Card;
