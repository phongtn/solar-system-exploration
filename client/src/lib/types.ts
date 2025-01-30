export interface Moon {
  name: string;
  size: number;
  distance: number;
  texture: string;
}

export interface Planet {
  name: string;
  size: number;
  distanceFromSun: number;
  distanceFromSunKm: string;
  orbitalPeriod: number;
  diameter: number;
  averageTemp: number;
  rotationSpeed: number;
  orbitSpeed: number;
  texture: string;
  description: string;
  funFacts: string[];
  moons?: Moon[];
}