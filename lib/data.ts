export const navLinks = [
  { href: "/systems", label: "Systems" },
  { href: "/explore", label: "Explore" },
  { href: "/store", label: "Store" },
  { href: "/journal", label: "Journal" },
  { href: "/community", label: "Community" },
  { href: "/support", label: "Support" },
];

export const systems = [
  {
    id: "one",
    name: "Astronautia One",
    tagline: "The flagship exploration vessel",
    dimensions: "38 cm × 18 cm × 12 cm",
    weight: "1.2 kg",
    runtime: "4 hours",
    camera: "1080p stabilized, 120° FOV",
    gps: "Dual-band GNSS, 2m accuracy",
    comms: "LoRa mesh, 2km range",
    deploy: "1 mini sub module",
    description:
      "Astronautia One is our flagship autonomous exploration system. Designed for extended lake and coastal missions, it combines precise GPS navigation with a stabilized camera platform and deployable underwater observation modules.",
  },
  {
    id: "drift",
    name: "Astronautia Drift",
    tagline: "Quiet observation, redefined",
    dimensions: "32 cm × 15 cm × 10 cm",
    weight: "0.8 kg",
    runtime: "6 hours",
    camera: "4K wide-angle, 140° FOV",
    gps: "Single-band GNSS, 3m accuracy",
    comms: "WiFi + LoRa, 1.5km range",
    deploy: "Passive drift mode",
    description:
      "Drift is built for passive observation. Without active propulsion noise, it glides through calm waters capturing uninterrupted footage of underwater life and sky transitions. Ideal for wildlife observation and atmospheric recording.",
  },
  {
    id: "mini-sub",
    name: "Astronautia Mini Sub",
    tagline: "Deep observation, compact form",
    dimensions: "12 cm × 8 cm × 6 cm",
    weight: "0.3 kg",
    runtime: "2 hours",
    camera: "1080p underwater, 90° FOV",
    gps: "Surface relay only",
    comms: "Tethered to host vessel",
    deploy: "Deployable from One or Drift",
    description:
      "The Mini Sub extends your observation beneath the surface. Deployed from any Astronautia vessel, it descends to 5 meters with a stabilized camera and environmental sensors, relaying data through its host.",
  },
];

export const exploreModes = [
  {
    title: "Lake Exploration",
    subtitle: "Calm waters, endless discovery",
    description:
      "Navigate freshwater environments with precision. Map shorelines, observe aquatic ecosystems, and capture the subtle movements of lake life from a quiet, autonomous platform.",
  },
  {
    title: "Underwater Observation",
    subtitle: "Beneath the surface",
    description:
      "Deploy the Mini Sub to observe underwater worlds invisible from above. Capture clear footage through calm water columns and document submerged environments with minimal disturbance.",
  },
  {
    title: "Sky Observation",
    subtitle: "Horizons from the water",
    description:
      "Position your vessel as a floating observatory. Track bird migration, capture dawn and dusk transitions, and record atmospheric phenomena from a unique water-level perspective.",
  },
  {
    title: "Weather Tracking",
    subtitle: "Environmental awareness",
    description:
      "Equipped with temperature, humidity, and barometric sensors, Astronautia vessels quietly collect environmental data while you focus on observation.",
  },
  {
    title: "Coastal Exploration",
    subtitle: "Where land meets sea",
    description:
      "Explore tidal zones, estuaries, and calm coastal waters. Navigate shallow environments safely while documenting the intersection of terrestrial and marine ecosystems.",
  },
  {
    title: "Night Missions",
    subtitle: "After dark, another world",
    description:
      "Low-light capable cameras and quiet electric propulsion make night missions possible. Observe nocturnal aquatic life and capture the stillness of water after sunset.",
  },
];

export const journalEntries = [
  {
    id: "night-hebbal",
    title: "Night Observation over Hebbal Lake",
    date: "March 2026",
    excerpt:
      "At 2:47 AM, the surface was glass. We deployed Astronautia One at the northern shore and watched as the vessel traced a slow arc across the water, its camera capturing the reflection of Orion in the lake's surface.",
    category: "Field Log",
  },
  {
    id: "first-deployment",
    title: "First Autonomous Deployment",
    date: "January 2026",
    excerpt:
      "The moment the vessel left the shore on its own, something shifted. No tether, no remote control—just a pre-planned route and trust in the system we had built. It returned 45 minutes later with 12 minutes of footage we never could have captured manually.",
    category: "Development",
  },
  {
    id: "underwater-visibility",
    title: "Underwater Visibility Test",
    date: "February 2026",
    excerpt:
      "We lowered the Mini Sub into murky pond water expecting disappointment. Instead, the stabilized camera revealed a world of suspended particles catching light—an unexpected beauty in what we assumed was poor visibility.",
    category: "Technical",
  },
  {
    id: "quiet-waters",
    title: "Quiet Waters Initiative",
    date: "December 2025",
    excerpt:
      "The Quiet Waters Initiative began with a simple question: what would exploration look like if it made no sound? Six months later, our passive drift systems are answering that question in lakes across three countries.",
    category: "Initiative",
  },
];

export const storeProducts = [
  {
    id: "astronautia-one",
    name: "Astronautia One",
    price: 1299,
    tagline: "Flagship exploration system",
    features: ["38cm autonomous vessel", "1080p stabilized camera", "4-hour runtime", "GPS waypoint navigation", "Deployable mini sub"],
  },
  {
    id: "mini-sub-module",
    name: "Mini Sub Module",
    price: 349,
    tagline: "Underwater observation extension",
    features: ["12cm submersible", "1080p underwater camera", "2-hour dive time", "5m depth rating", "Tethered relay"],
  },
  {
    id: "camera-module",
    name: "Camera Module",
    price: 199,
    tagline: "4K wide-angle upgrade",
    features: ["4K 30fps recording", "140° field of view", "Low-light optimization", "Stabilized gimbal", "Quick-swap mount"],
  },
  {
    id: "exploration-case",
    name: "Exploration Case",
    price: 89,
    tagline: "Protective transport system",
    features: ["Custom foam insert", "Water-resistant shell", "Shoulder strap", "Accessory compartments", "Astronautia branded"],
  },
  {
    id: "docking-platform",
    name: "Docking Platform",
    price: 149,
    tagline: "Home base for your vessel",
    features: ["Solar charging pad", "Data sync station", "Weather-resistant", "LED status indicators", "Compact footprint"],
  },
];

export const communityMissions = [
  {
    id: "m1",
    user: "Elena V.",
    location: "Lake Como, Italy",
    image: "/images/mission-1.jpg",
    description: "Dawn patrol along the eastern shore. Captured heron feeding patterns over 3 hours.",
  },
  {
    id: "m2",
    user: "Marcus T.",
    location: "Bodensee, Germany",
    image: "/images/mission-2.jpg",
    description: "First underwater footage of the reed beds. Visibility was exceptional at 6am.",
  },
  {
    id: "m3",
    user: "Yuki S.",
    location: "Lake Biwa, Japan",
    image: "/images/mission-3.jpg",
    description: "Night mission documenting bioluminescence near the northern inlet.",
  },
  {
    id: "m4",
    user: "Amara K.",
    location: "Vembanad Lake, India",
    image: "/images/mission-4.jpg",
    description: "Coastal exploration during monsoon transition. Quiet waters, unexpected clarity.",
  },
];

export const downloads = [
  {
    id: "firmware",
    name: "Astronautia Firmware",
    version: "v2.1.4",
    size: "4.2 MB",
    description: "Latest firmware for all Astronautia systems including waypoint navigation improvements and battery optimization.",
  },
  {
    id: "mission-planner",
    name: "Mission Planner",
    version: "v1.3.0",
    size: "28 MB",
    description: "Desktop application for planning autonomous routes, setting waypoints, and simulating missions before deployment.",
  },
  {
    id: "telemetry-app",
    name: "Telemetry App",
    version: "v1.2.1",
    size: "12 MB",
    description: "Mobile companion app for real-time vessel monitoring, sensor data visualization, and mission control.",
  },
  {
    id: "setup-manual",
    name: "Setup Manual",
    version: "2026 Edition",
    size: "8.5 MB",
    description: "Comprehensive setup guide covering initial configuration, calibration, safety procedures, and first deployment.",
  },
  {
    id: "cad-templates",
    name: "CAD Templates",
    version: "v1.0",
    size: "15 MB",
    description: "3D models and CAD files for custom payload design, mounting bracket creation, and accessory development.",
  },
];

export const faqs = [
  {
    question: "What environments can Astronautia systems operate in?",
    answer:
      "Astronautia systems are designed for calm freshwater and coastal environments including lakes, ponds, beaches, and sheltered coastal waters. They are not intended for open ocean or rough water conditions.",
  },
  {
    question: "How do I update the firmware?",
    answer:
      "Firmware updates are delivered through the Mission Planner desktop application. Connect your vessel via USB, open Mission Planner, and select 'Check for Updates' from the vessel menu. The update process takes approximately 5 minutes.",
  },
  {
    question: "What is the battery life?",
    answer:
      "Astronautia One provides approximately 4 hours of active runtime. Astronautia Drift, with its passive observation mode, extends to 6 hours. The Mini Sub operates for 2 hours per dive. All batteries are rechargeable lithium-polymer cells.",
  },
  {
    question: "Is the system waterproof?",
    answer:
      "All Astronautia vessels are rated IP67, meaning they can withstand temporary immersion up to 1 meter for 30 minutes. The Mini Sub is rated for continuous operation at depths up to 5 meters. Always inspect seals before deployment.",
  },
  {
    question: "Can I add custom sensors or payloads?",
    answer:
      "Yes. The modular payload bay on Astronautia One and Drift accepts custom sensors and cameras up to 200 grams. CAD templates and mounting specifications are available in the Downloads section for custom development.",
  },
  {
    question: "How does the communication system work?",
    answer:
      "Astronautia vessels use LoRa mesh networking for inter-vessel communication with a range of up to 2 kilometers. For remote monitoring, the Telemetry App connects via WiFi when the vessel is within range of your mobile hotspot or local network.",
  },
];
