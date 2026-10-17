// Field photography and video for the Documentaries page.
// Stock imagery (sunsets, wind turbines) and clip-art from the old site are left out on purpose.

export type GalleryGroup = "solar" | "storage" | "ups" | "water" | "team";

export const galleryGroups: { id: GalleryGroup; label: string }[] = [
  { id: "solar", label: "Solar PV" },
  { id: "storage", label: "Inverters & storage" },
  { id: "ups", label: "UPS & switchgear" },
  { id: "water", label: "Water systems" },
  { id: "team", label: "On site" },
];

const group = (g: GalleryGroup, names: string[]) => names.map((name) => ({ name, group: g }));

export const gallery = [
  ...group("solar", [
    "pw17.jpg", "img19.jpg", "img25.jpg", "img15.jpg", "img10.jpg", "pw47.jpg", "img13.jpg", "img14.jpg",
    "img16.jpg", "img18.jpg", "img17.jpg", "img20.jpg", "img21.jpg", "img22.jpg", "img23.jpg", "img11.jpg",
    "img8.jpg", "img9.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pw12.jpg",
  ]),
  ...group("storage", [
    "pw45.jpg", "pw20.jpg", "pw25.jpg", "pw22.jpg", "pw69.jpg", "pw16.jpg", "pw3.jpg", "pw41.jpg", "pw42.jpg",
    "pw19.jpg", "pw60.jpg", "pw61.jpg", "pw59.jpg", "pw13.jpg", "pw14.jpg", "pw24.jpg", "pw23.jpg", "pw26.jpg",
    "pw28.jpg", "pw27.jpg", "pw5.jpg", "pw33.jpg", "pw63.jpg", "pw1.jpg", "pw2.jpg", "pw4.jpg",
  ]),
  ...group("ups", [
    "pw54.jpg", "pw38.jpg", "pw11.jpg", "pw18.jpg", "pw6.jpg", "pw7.jpg", "pw57.jpg", "pw56.jpg", "pw32.jpg",
    "pw49.jpg", "pw50.jpg", "pw51.jpg", "pw52.jpg", "pw58.jpg", "pw48.jpg", "pw21.jpg", "pw8.jpg", "pw55.jpg",
  ]),
  ...group("water", [
    "pw44.jpg", "pw46.jpg", "pw64.jpg", "pw29.jpg", "pw15.jpg", "img24.jpg", "pw36.jpg", "pw40.jpg", "pw43.jpg",
    "pw30.jpg", "pw67.jpg", "pw9.jpg", "pw10.jpg", "img7.jpg", "pw34.jpg", "pw31.jpg",
  ]),
  ...group("team", [
    "img26.jpg", "img27.jpg", "pic8.jpg", "pic10.jpg", "pic12.jpg", "pic9.jpg", "img28.jpg", "pw37.jpg",
  ]),
];

// All footage is shot vertically on site, so it is presented in portrait frames.
export const videos = [
  { id: "n6QhAKCEp30", title: "Solar projects across Nairobi", tag: "Solar PV" },
  { id: "AZIXleXXuMM", title: "5 kW Deye inverter with 10 kWh lithium", tag: "Storage" },
  { id: "dARXHnSjgVI", title: "Parallel inverter bank", tag: "Inverters" },
  { id: "cQOUyACjVLA", title: "Hoisting modules to the roof", tag: "Solar PV" },
  { id: "i38KqCN5R6s", title: "UPS battery cabinet", tag: "UPS" },
  { id: "ap9RUdtCK5A", title: "Ground-mount structure assembly", tag: "Solar PV" },
  { id: "sDwloJl-0A0", title: "UPS in service", tag: "UPS" },
  { id: "ypt5v6DwNj8", title: "Battery room installation", tag: "Storage" },
];
