// https://maps.waterdata.usgs.gov/mapper/help/sitetype.html
export const SiteTypeMap: Record<string, string> = {
  ES: 'Estuary',
  LK: 'Lake',
  OC: 'Ocean',
  'OC-CO': 'Coastal',
  ST: 'Stream',
  'ST-CA': 'Canal',
  'ST-DCH': 'Ditch',
  'ST-TS': 'Tidal Stream',
  WE: 'Wetland',
  GW: 'Well',
  'GW-CR': 'Collector',
  'GW-EX': 'Extensometer well',
  'GW-HZ': 'Hyporheic-zone well',
  'GW-IW': 'Interconnected wells',
  'GW-MW': 'Multiple wells',
  'GW-TH': 'Test hole',
  SB: 'Subsurface',
  'SB-CV': 'Cave',
  'SB-GWD': 'Groundwater drain',
  'SB-TSM': 'Tunnel, shaft, or mine',
  'SB-UZ': 'Unsaturated zone',
  SP: 'Spring',
  AT: 'Atmospheric',
  AG: 'Aggregate groundwater use',
  AS: 'Aggregate surface-water-use',
  AW: 'Aggregate water-use establishment',
  FA: 'Facility',
  'FA-AWL': 'Animal waste lagoon',
  'FA-CI': 'Cistern',
  'FA-CS': 'Combined sewer',
  'FA-DV': 'Diversion',
  'FA-FON': 'Field, Pasture, Orchard, or Nursery',
  'FA-GC': 'Golf course',
  'FA-HP': 'Hydroelectric plant',
  'FA-LF': 'Landfill',
  'FA-OF': 'Outfall',
  'FA-PV': 'Pavement',
  'FA-QC': 'Laboratory or sample-preparation area',
  'FA-SEW': 'Wastewater sewer',
  'FA-SPS': 'Septic system',
  'FA-STS': 'Storm sewer',
  'FA-TEP': 'Thermoelectric plant',
  'FA-WDS': 'Water-distribution system',
  'FA-WIW': 'Waste injection well',
  'FA-WTP': 'Water-supply treatment plant',
  'FA-WWD': 'Wastewater land application',
  'FA-WWTP': 'Wastewater-treatment plant',
  'FA-WU': 'Water-use establishment',
  GL: 'Glacier',
  LA: 'Land',
  'LA-EX': 'Excavation',
  'LA-OU': 'Outcrop',
  'LA-PLY': 'Playa',
  'LA-SH': 'Soil hole',
  'LA-SNK': 'Sinkhole',
  'LA-SR': 'Shore',
  'LA-VOL': 'Volcanic vent',
};

export interface Site {
  siteCode: string;
  siteName: string;
  latitude: number;
  longitude: number;
  siteTypeCode: string;
  hydrologicUnitCode: string;
  stateCode: string;
  countyCode: string;
  dataPoints: SiteDataPoint[];
}

export interface SiteDataPoint {
  code: string;
  name: string;
  description: string;
  unit: string;
  value: string;
}