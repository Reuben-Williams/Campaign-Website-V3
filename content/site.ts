export const siteConfig = {
  name: "Carmen T. Morales",
  shortName: "Morales for Assembly",
  office: "Assemblywoman",
  jurisdiction: "New Jersey Legislative District 34",
  repoBasePath: "/Campaign-Website-V3",
  description:
    "A modern campaign website for Carmen T. Morales focused on community service, constituent connection, and practical local priorities.",
  paidFor: "Paid for by Morales for Assembly",
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Issues", href: "/issues" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Volunteer", href: "/volunteer" },
];

export const images = {
  hero: {
    src: "/images/campaign/carmen-leaders.jpg",
    alt: "Carmen Morales with state and community leaders inside a civic chamber.",
  },
  community: {
    src: "/images/campaign/carmen-family-bike-event.jpg",
    alt: "Carmen Morales greeting a young family at an outdoor neighborhood event.",
  },
  table: {
    src: "/images/campaign/carmen-community-table.jpg",
    alt: "Carmen Morales and residents at a community table during a local event.",
  },
  listening: {
    src: "/images/campaign/community-listening-session.jpg",
    alt: "Residents gathered around tables during a community listening session.",
  },
  literature: {
    src: "/images/campaign/campaign-literature.jpg",
    alt: "Morales campaign literature and voter information at an event table.",
  },
  civic: {
    src: "/images/campaign/carmen-civic-event.jpg",
    alt: "Carmen Morales participating in a civic community event.",
  },
  portrait: {
    src: "/images/campaign/carmen-community-portrait.jpg",
    alt: "Carmen Morales with neighbors and community members.",
  },
};

export const priorities = [
  {
    title: "Affordability and opportunity",
    label: "Economy",
    body: "Support practical policies that help working families keep more stability in their monthly budgets and build long-term opportunity.",
  },
  {
    title: "Safe, connected neighborhoods",
    label: "Community",
    body: "Invest in safer streets, responsive services, and neighborhood partnerships that make public life stronger block by block.",
  },
  {
    title: "Schools and youth programs",
    label: "Education",
    body: "Champion the classrooms, after-school programs, and career pathways that give young people room to grow.",
  },
  {
    title: "Responsive constituent service",
    label: "Service",
    body: "Keep government accessible with clear communication, local office hours, and follow-through when residents need help.",
  },
];

export const events = [
  {
    title: "Community Listening Session",
    date: "July 18",
    time: "6:00 PM",
    location: "District office and community partners",
    body: "An open conversation on local priorities, affordability, and resident services.",
  },
  {
    title: "Weekend Canvass Launch",
    date: "July 27",
    time: "10:00 AM",
    location: "Campaign field office",
    body: "Volunteer training, turf assignments, and a morning neighborhood launch.",
  },
  {
    title: "Family Resource Fair",
    date: "August 9",
    time: "12:00 PM",
    location: "Local community center",
    body: "A family-friendly event connecting residents with services and campaign updates.",
  },
];

export const news = [
  {
    title: "Morales campaign opens new volunteer shifts",
    date: "June 28, 2026",
    body: "The campaign is expanding weekend field shifts for residents who want to help with voter contact, events, and outreach.",
  },
  {
    title: "Community leaders join district roundtable",
    date: "June 14, 2026",
    body: "Local leaders met with Carmen Morales to discuss public safety, youth programs, and everyday constituent service.",
  },
  {
    title: "Campaign releases summer organizing calendar",
    date: "May 31, 2026",
    body: "The summer calendar includes canvass launches, phone banks, listening sessions, and neighborhood visibility events.",
  },
];

export const endorsements = [
  "Local educators",
  "Small business advocates",
  "Public service leaders",
  "Neighborhood volunteers",
  "Labor and community partners",
  "Families across the district",
];

export const volunteerRoles = [
  "Knock doors with trained team leads",
  "Make calls and send voter texts",
  "Host a neighborhood conversation",
  "Help staff campaign events",
  "Share campaign updates online",
  "Prepare literature and signs",
];

export const donationAmounts = [25, 50, 100, 250, 500, 1000];

export const pages = {
  home: {
    title: "Carmen T. Morales for Assembly",
    eyebrow: "Community-first leadership",
    heading: "A campaign built around service, access, and local results.",
    body: "Carmen Morales is organizing with residents, families, and community partners to keep government close to the people it serves.",
    image: images.hero,
  },
  about: {
    title: "About Carmen",
    eyebrow: "Public service",
    heading: "Rooted in community. Focused on follow-through.",
    body: "Carmen Morales brings a hands-on approach to public service, grounded in neighborhood relationships and direct constituent support.",
    image: images.community,
  },
  issues: {
    title: "Issues",
    eyebrow: "Campaign priorities",
    heading: "Practical priorities for New Jersey families.",
    body: "The campaign is focused on clear, everyday concerns: affordability, safety, education, and responsive service.",
    image: images.table,
  },
  events: {
    title: "Events",
    eyebrow: "On the ground",
    heading: "Meet the campaign in your neighborhood.",
    body: "Join upcoming events, volunteer launches, and listening sessions across the district.",
    image: images.listening,
  },
  donate: {
    title: "Donate",
    eyebrow: "Power the campaign",
    heading: "Help reach more voters before Election Day.",
    body: "Grassroots contributions help fund field outreach, voter materials, digital tools, and community events.",
    image: images.civic,
  },
  endorsements: {
    title: "Endorsements",
    eyebrow: "Community support",
    heading: "A coalition of neighbors, workers, families, and local leaders.",
    body: "The campaign is built with people who believe in accessible, service-driven representation.",
    image: images.civic,
  },
  news: {
    title: "News",
    eyebrow: "Campaign updates",
    heading: "Latest updates from the trail.",
    body: "Follow organizing updates, event announcements, and campaign news as the demo site grows.",
    image: images.portrait,
  },
  volunteer: {
    title: "Volunteer",
    eyebrow: "Join the team",
    heading: "There is a role for every supporter.",
    body: "Help the campaign connect with voters through canvassing, calls, events, and neighbor-to-neighbor outreach.",
    image: images.community,
  },
};
