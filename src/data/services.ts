export type Service = {
  id: string;
  icon: string;
  title: string;
  short: string;
  summary: string;
  scope: string[];
  equipment?: string;
  image?: string;
  alt?: string;
};

export const services: Service[] = [
  {
    id: "solar",
    icon: "sun",
    title: "Solar PV systems",
    short: "Grid-tie, off-grid and hybrid arrays, from a single residence to a commercial roof.",
    summary:
      "Arrays specified from your consumption data, not a catalogue. We design the structure, string layout and protection, then install and commission to a standard we are prepared to maintain for years.",
    scope: [
      "Grid-tie, off-grid and hybrid systems",
      "Commercial rooftops with walkways and cleaning access",
      "Borehole solarisation and solar pumping",
      "Monitoring, cleaning and preventive maintenance",
    ],
    equipment: "LONGi · JA Solar · Jinko",
    image: "pw17.jpg",
    alt: "Rooftop solar array with access walkways on a commercial building in Nairobi",
  },
  {
    id: "storage",
    icon: "battery",
    title: "Inverters & energy storage",
    short: "Hybrid and backup inverters with lithium storage, single and three-phase.",
    summary:
      "Inverter systems sized to the loads that matter, standalone or in parallel, with lithium storage that carries a building through an outage without anyone noticing it happened.",
    scope: [
      "Hybrid and backup inverters, 3 kW to 15 kW and beyond",
      "Three-phase and parallel configurations",
      "Lithium storage from 5 kWh upward",
      "Automatic changeover and protection",
    ],
    equipment: "Deye · SRNE · Studer · Mecer · Xantrex",
    image: "pw45.jpg",
    alt: "Wall-mounted hybrid inverter with two lithium battery modules",
  },
  {
    id: "ups",
    icon: "server",
    title: "UPS systems",
    short: "Online UPS from 400 VA to 1 MVA for clinical, banking and data environments.",
    summary:
      "Uninterruptible power for theatres, server rooms and banking halls. We size, install and commission new systems and repair the ones already in service, including 30 to 100 kVA units.",
    scope: [
      "Critical-load assessment and sizing",
      "Installation and commissioning, 400 VA to 1 MVA",
      "Major repairs and battery bank replacement",
      "Data-centre battery replacement programmes",
    ],
    equipment: "APC · Eaton · MGE · Liebert · INVT · GE · Tripp Lite",
    image: "pw54.jpg",
    alt: "Row of tower UPS cabinets installed in a plant room",
  },
  {
    id: "water",
    icon: "droplet",
    title: "Solar water heating & heat pumps",
    short: "Solar hot water and heat pumps for homes, lodges and institutions.",
    summary:
      "Hot water without the electricity bill. Flat-plate solar systems and heat pumps, plumbed into the existing installation and serviced on schedule, from city residences to safari camps.",
    scope: [
      "Solar water heating from 200 litres",
      "Heat pump installation",
      "Integration with existing plumbing",
      "Servicing of installed systems",
    ],
    image: "pw44.jpg",
    alt: "Flat-plate solar water heater with storage tank on a red tile roof",
  },
  {
    id: "power-quality",
    icon: "gauge",
    title: "Generators, AVRs & changeover",
    short: "Voltage regulation, generators and changeover switching for sensitive equipment.",
    summary:
      "Clean, stable supply for equipment that cannot tolerate fluctuation. Generators, automatic voltage regulators and changeover arrangements designed as one system.",
    scope: [
      "Generator supply and installation",
      "Automatic voltage regulators, 20 to 60 kVA",
      "Manual bypass and automatic changeover",
      "Isolation and surge protection",
    ],
    image: "pw48.jpg",
    alt: "Automatic voltage switcher and rotary isolator mounted on a plant wall",
  },
  {
    id: "batteries",
    icon: "battery-cells",
    title: "Battery supply & replacement",
    short: "AGM, GEL and lithium, 12 to 48 V, 4.5 Ah to 760 Ah.",
    summary:
      "Correctly specified replacement batteries for UPS and inverter systems of every make, installed, tested and disposed of properly.",
    scope: [
      "12 V to 48 V systems",
      "4.5 Ah to 760 Ah capacity",
      "AGM, GEL and lithium chemistry",
      "Bank testing and safe disposal",
    ],
    image: "pw57.jpg",
    alt: "Technician connecting cables during a battery bank replacement",
  },
  {
    id: "ict",
    icon: "cctv",
    title: "CCTV, cabling & ICT supply",
    short: "CCTV, structured data cabling and computer supply for offices and institutions.",
    summary:
      "The low-voltage layer that sits alongside the power system: surveillance, structured cabling and the hardware that runs on it.",
    scope: [
      "CCTV design and installation",
      "Structured data and electrical cabling",
      "Computers, laptops and printers",
      "Projectors and accessories",
    ],
  },
  {
    id: "maintenance",
    icon: "wrench",
    title: "Maintenance contracts",
    short: "Scheduled preventive maintenance and response, single site or nationwide.",
    summary:
      "Systems stay reliable because someone looks after them. Preventive maintenance on a fixed schedule, with response when it matters, for single sites and multi-site networks.",
    scope: [
      "UPS, inverter, solar and generator servicing",
      "Fixed-schedule preventive maintenance",
      "Multi-site contracts across Kenya",
      "Rapid response for critical faults",
    ],
    image: "pic9.jpg",
    alt: "Engineer in hard hat servicing a wall-mounted power unit",
  },
];
