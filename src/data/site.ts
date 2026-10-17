// Single source for company details used across the site.
// Registration, VAT and banking details are deliberately kept off the website.

export const company = {
  name: "Powergeekz Engineering Ltd",
  short: "Powergeekz",
  founded: 2013,
  url: "https://www.powergeekzengineeringltd.co.ke",
  email: "info@powergeekzengineeringltd.co.ke",
  emailAlt: "powergeekzengineeringltd@gmail.com",
  phones: [
    { label: "+254 723 233 209", href: "tel:+254723233209" },
    { label: "+254 101 233 209", href: "tel:+254101233209" },
  ],
  whatsapp: "https://wa.me/254723233209",
  address: {
    line: "Limuru Road, Ruaka",
    city: "Nairobi",
    country: "Kenya",
  },
  // Google lists the office as "Powergeekz Electricals & Accessories – Ruaka".
  geo: { lat: -1.2038692, lng: 36.7737293 },
  hours: [
    { days: "Monday – Friday", time: "8:00 – 17:30" },
    { days: "Saturday", time: "9:00 – 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/share/18s5vZ64YR/",
    tiktok: "https://www.tiktok.com/@powergeekzengineeringltd",
  },
} as const;

// EmailJS browser keys from the live site (public by design; the account's
// allowed-origins list is what actually restricts use).
export const emailjs = {
  publicKey: "fyTiHx0IU_oIffP_c",
  serviceId: "service_d8zrry8",
  templateId: "template_dzaeuwh",
} as const;

export const mapEmbed = `https://maps.google.com/maps?q=${company.geo.lat},${company.geo.lng}&z=16&hl=en&output=embed`;
export const mapDirections = `https://www.google.com/maps/dir/?api=1&destination=${company.geo.lat},${company.geo.lng}`;

export const cta = {
  label: "Book a Site Assessment",
  href: "/contact.html#assessment",
};

export const nav = [
  { label: "Services", href: "/services.html" },
  { label: "Portfolio", href: "/portfolio.html" },
  { label: "Documentaries", href: "/documentaries.html" },
  { label: "About", href: "/about.html" },
  { label: "Contact", href: "/contact.html" },
] as const;

export const clients = [
  "Gertrude's Children's Hospital",
  "Karen Hospital",
  "ABC Bank",
  "Musoni Kenya",
  "Media Max Networks",
  "Ministry of Agriculture",
  "BirdLife International",
  "Basco Paints",
] as const;

export const brands = [
  "APC", "Eaton", "MGE", "Mecer", "Studer", "Liebert", "INVT", "Su-Kam", "Scott",
  "GE", "Tripp Lite", "Xantrex", "Deye", "SRNE", "LONGi", "JA Solar", "Jinko", "Vestwood",
] as const;

export const sectors = [
  "Hospitals & clinics",
  "Banks & microfinance",
  "Oil & fuel",
  "Schools & colleges",
  "Internet providers",
  "Security firms",
  "Radio & broadcast",
  "Manufacturing",
  "Motor trade",
  "Construction",
  "Food production",
  "Private residences",
] as const;
