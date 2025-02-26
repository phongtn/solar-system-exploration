export const planets = [
  {
    name: "Mercury",
    size: 0.4,
    distanceFromSun: 6,
    distanceFromSunKm: "57.9 million",
    orbitalPeriod: 88,
    diameter: 4879,
    averageTemp: 167,
    rotationSpeed: 0.002, // Reduced from 0.01
    orbitSpeed: 0.008, // Reduced from 0.04
    texture: "/textures/2k_mercury.jpg",
    description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 88 Earth days, making it the fastest planet.",
    axialTilt: 0.034,
    mass: 0.055,
    atmosphereDensity: 0,
    atmosphereColor: "#ffffff",
    funFacts: [
      "Mercury has no moons and no substantial atmosphere",
      "Despite being closest to the Sun, Venus is actually hotter than Mercury",
      "Mercury's surface resembles our Moon's heavily cratered terrain"
    ]
  },
  {
    name: "Venus",
    size: 0.9,
    distanceFromSun: 11,
    distanceFromSunKm: "108.2 million",
    orbitalPeriod: 225,
    diameter: 12104,
    averageTemp: 464,
    rotationSpeed: 0.0016, // Reduced from 0.008
    orbitSpeed: 0.003, // Reduced from 0.015
    texture: "/textures/2k_venus_surface.jpg",
    description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets.",
    axialTilt: 3.096,
    mass: 0.815,
    atmosphereDensity: 0.9,
    atmosphereColor: "#ffcc99",
    funFacts: [
      "Venus spins backwards compared to most other planets",
      "It's the hottest planet in our solar system",
      "A day on Venus is longer than its year"
    ]
  },
  {
    name: "Earth",
    size: 1,
    distanceFromSun: 16,
    distanceFromSunKm: "149.6 million",
    orbitalPeriod: 365.25,
    diameter: 12742,
    averageTemp: 15,
    rotationSpeed: 0.002, // Reduced from 0.01
    orbitSpeed: 0.002, // Reduced from 0.01
    texture: "/textures/2k_earth_daymap.jpg",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is water-covered.",
    axialTilt: 0.409,
    mass: 1,
    atmosphereDensity: 0.5,
    atmosphereColor: "#add8e6",
    funFacts: [
      "Earth is the only planet not named after a mythological god or goddess",
      "The Earth's core is as hot as the surface of the sun",
      "Our planet's atmosphere extends up to 10,000 kilometers into space"
    ],
    moons: [
      {
        name: "Moon",
        size: 0.27,
        distance: 2,
        texture: "/textures/2k_moon.jpg"
      }
    ]
  },
  {
    name: "Mars",
    size: 0.5,
    distanceFromSun: 22,
    distanceFromSunKm: "227.9 million",
    orbitalPeriod: 687,
    diameter: 6779,
    averageTemp: -63,
    rotationSpeed: 0.0018, // Reduced from 0.009
    orbitSpeed: 0.0016, // Reduced from 0.008
    texture: "/textures/2k_mars.jpg",
    description: "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance in the night sky.",
    axialTilt: 0.242,
    mass: 0.107,
    atmosphereDensity: 0.01,
    atmosphereColor: "#e9967a",
    funFacts: [
      "Mars has the largest volcano in the solar system, Olympus Mons",
      "The red color comes from iron oxide (rust) on its surface",
      "Mars has two moons: Phobos and Deimos"
    ]
  },
  {
    name: "Jupiter",
    size: 2.5,
    distanceFromSun: 30,
    distanceFromSunKm: "778.5 million",
    orbitalPeriod: 4333,
    diameter: 139820,
    averageTemp: -110,
    rotationSpeed: 0.003, // Reduced from 0.015
    orbitSpeed: 0.0008, // Reduced from 0.004
    texture: "/textures/2k_jupiter.jpg",
    description: "Jupiter is the largest planet in our solar system. It's a gas giant and has a Great Red Spot, which is actually a giant storm.",
    axialTilt: 0.087,
    mass: 317.8,
    atmosphereDensity: 1.3,
    atmosphereColor: "#f0e68c",
    funFacts: [
      "Jupiter has the shortest day of any planet",
      "The Great Red Spot has been raging for at least 400 years",
      "Jupiter has at least 79 moons"
    ]
  },
  {
    name: "Saturn",
    size: 2,
    distanceFromSun: 38,
    distanceFromSunKm: "1.4 billion",
    orbitalPeriod: 10759,
    diameter: 116460,
    averageTemp: -140,
    rotationSpeed: 0.0024, // Reduced from 0.012
    orbitSpeed: 0.0004, // Reduced from 0.002
    texture: "/textures/2k_saturn.jpg",
    description: "Saturn is the sixth planet from the Sun and is famous for its prominent ring system, which is composed mostly of ice particles, rocky debris, and dust.",
    axialTilt: 0.551,
    mass: 95.2,
    atmosphereDensity: 0.7,
    atmosphereColor: "#f0e68c",
    funFacts: [
      "Saturn's rings are mostly made of water ice",
      "Saturn has 82 confirmed moons",
      "Saturn is the least dense planet in the solar system"
    ]
  },
  {
    name: "Uranus",
    size: 1.5,
    distanceFromSun: 46,
    distanceFromSunKm: "2.9 billion",
    orbitalPeriod: 30687,
    diameter: 50724,
    averageTemp: -195,
    rotationSpeed: 0.0014, // Reduced from 0.007
    orbitSpeed: 0.0002, // Reduced from 0.001
    texture: "/textures/2k_uranus.jpg",
    description: "Uranus is the seventh planet from the Sun. It's an ice giant and the only planet that spins on its side.",
    axialTilt: 1.791,
    mass: 14.5,
    atmosphereDensity: 0.8,
    atmosphereColor: "#87cefa",
    funFacts: [
      "Uranus rotates east to west like Venus",
      "It has 13 known rings",
      "The planet is named after the Greek god of the sky"
    ]
  },
  {
    name: "Neptune",
    size: 1.4,
    distanceFromSun: 54,
    distanceFromSunKm: "4.5 billion",
    orbitalPeriod: 60190,
    diameter: 49244,
    averageTemp: -200,
    rotationSpeed: 0.0012, // Reduced from 0.006
    orbitSpeed: 0.00012, // Reduced from 0.0006
    texture: "/textures/2k_neptune.jpg",
    description: "Neptune is the eighth and farthest planet from the Sun. It's an ice giant known for its bright blue color caused by methane in its atmosphere.",
    axialTilt: 0.716,
    mass: 17.1,
    atmosphereDensity: 1.2,
    atmosphereColor: "#4682b4",
    funFacts: [
      "Neptune has the strongest winds in the solar system",
      "It has a dark spot similar to Jupiter's Great Red Spot",
      "Neptune takes 165 Earth years to orbit the Sun"
    ]
  },
  {
    name: "Pluto",
    size: 0.3,
    distanceFromSun: 85,
    distanceFromSunKm: "5.9 billion",
    orbitalPeriod: 90560,
    diameter: 2377,
    averageTemp: -230,
    rotationSpeed: 0.0008, // Reduced from 0.004
    orbitSpeed: 0.00008, // Reduced from 0.0004
    texture: "/textures/2k_asteroid_1.jpg",
    description: "Pluto is a dwarf planet in the Kuiper belt. It was once considered the ninth planet from the Sun before being reclassified as a dwarf planet in 2006.",
    axialTilt: 0.440,
    mass: 0.0022,
    atmosphereDensity: 0.000001,
    atmosphereColor: "#d3d3d3",
    funFacts: [
      "Pluto is smaller than Earth's moon",
      "It has five known moons, with Charon being the largest",
      "A year on Pluto is 248 Earth years"
    ]
  }
];