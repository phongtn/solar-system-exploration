export const planets = [
  {
    name: "Mercury",
    size: 0.4,
    distanceFromSun: 6,
    distanceFromSunKm: "57.9 million",
    orbitalPeriod: 88,
    diameter: 4879,
    averageTemp: 167,
    rotationSpeed: 0.01,
    orbitSpeed: 0.04,
    texture: "/textures/2k_mercury.jpg",
    description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 88 Earth days, making it the fastest planet.",
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
    rotationSpeed: 0.008,
    orbitSpeed: 0.015,
    texture: "/textures/2k_venus_surface.jpg",
    description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets.",
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
    rotationSpeed: 0.01,
    orbitSpeed: 0.01,
    texture: "/textures/2k_earth_daymap.jpg",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is water-covered.",
    funFacts: [
      "Earth is the only planet not named after a mythological god or goddess",
      "The Earth's core is as hot as the surface of the sun",
      "Our planet's atmosphere extends up to 10,000 kilometers into space"
    ],
    moons: [
      {
        name: "Moon",
        size: 0.27, // Relative to Earth
        distance: 2, // Scaled distance
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
    rotationSpeed: 0.009,
    orbitSpeed: 0.008,
    texture: "/textures/2k_mars.jpg",
    description: "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance in the night sky.",
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
    rotationSpeed: 0.015,
    orbitSpeed: 0.004,
    texture: "/textures/2k_jupiter.jpg",
    description: "Jupiter is the largest planet in our solar system. It's a gas giant and has a Great Red Spot, which is actually a giant storm.",
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
    rotationSpeed: 0.012,
    orbitSpeed: 0.002,
    texture: "/textures/2k_saturn.jpg",
    description: "Saturn is the sixth planet from the Sun and is famous for its prominent ring system, which is composed mostly of ice particles, rocky debris, and dust.",
    funFacts: [
      "Saturn's rings are mostly made of water ice",
      "Saturn has 82 confirmed moons",
      "Saturn is the least dense planet in the solar system"
    ]
  },
  {
    name: "Uranus",
    size: 1.5,
    distanceFromSun: 31,
    distanceFromSunKm: "2.9 billion",
    orbitalPeriod: 30687,
    diameter: 50724,
    averageTemp: -195,
    rotationSpeed: 0.007,
    orbitSpeed: 0.001,
    texture: "/textures/2k_uranus.jpg",
    description: "Uranus is the seventh planet from the Sun. It's an ice giant and the only planet that spins on its side.",
    funFacts: [
      "Uranus rotates east to west like Venus",
      "It has 13 known rings",
      "The planet is named after the Greek god of the sky"
    ]
  },
  {
    name: "Neptune",
    size: 1.4,
    distanceFromSun: 36,
    distanceFromSunKm: "4.5 billion",
    orbitalPeriod: 60190,
    diameter: 49244,
    averageTemp: -200,
    rotationSpeed: 0.006,
    orbitSpeed: 0.0006,
    texture: "/textures/2k_neptune.jpg",
    description: "Neptune is the eighth and farthest planet from the Sun. It's an ice giant known for its bright blue color caused by methane in its atmosphere.",
    funFacts: [
      "Neptune has the strongest winds in the solar system",
      "It has a dark spot similar to Jupiter's Great Red Spot",
      "Neptune takes 165 Earth years to orbit the Sun"
    ]
  }
];