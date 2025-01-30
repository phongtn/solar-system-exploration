import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { planets } from '@/lib/planets';
import type { Planet } from '@/lib/types';

interface PlanetProps {
  planet: Planet;
  distance: number;
  isSelected: boolean;
  onSelect: (planet: Planet) => void;
  autoRotate: boolean;
}

function Planet({ 
  planet, 
  distance, 
  isSelected, 
  onSelect,
  autoRotate 
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, planet.texture);
  const moons = planet.moons || [];

  const isMobile = window.innerWidth < 768;
  
  useFrame(() => {
    if (autoRotate && meshRef.current && orbitRef.current) {
      meshRef.current.rotation.y += planet.rotationSpeed;
      orbitRef.current.rotation.y += planet.orbitSpeed;
    }
    // Adjust camera position for mobile
    if (isMobile && meshRef.current) {
      const scale = 1.5;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh
        ref={meshRef}
        position={[distance, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(planet);
        }}
      >
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          emissive={isSelected ? 'white' : 'black'}
          emissiveIntensity={isSelected ? 0.2 : 0}
        />
      </mesh>
      {moons.map((moon, index) => (
        <group key={index} rotation={[0, (2 * Math.PI * index) / moons.length, 0]}>
          <mesh position={[distance + moon.distance, 0, 0]}>
            <sphereGeometry args={[moon.size, 16, 16]} />
            <meshStandardMaterial map={useLoader(THREE.TextureLoader, moon.texture)} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

interface SolarSystemProps {
  selectedPlanet: Planet;
  onSelectPlanet: (planet: Planet) => void;
  autoRotate: boolean;
}

export default function SolarSystem({ 
  selectedPlanet, 
  onSelectPlanet,
  autoRotate 
}: SolarSystemProps) {
  const sunTexture = useLoader(THREE.TextureLoader, "/textures/2k_sun.jpg");

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight 
        position={[0, 0, 0]} 
        intensity={1.5} 
        color="#FDB813" 
        distance={100}
        decay={2}
      />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />

      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          map={sunTexture}
          color="#FDB813"
        />
      </mesh>

      {/* Asteroid Belt */}
      <group rotation={[Math.PI / 8, 0, 0]}>
        {Array.from({ length: 200 }).map((_, i) => {
          const angle = (i / 200) * Math.PI * 2;
          const radius = 18 + Math.random() * 2; // Between Mars and Jupiter
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 2;
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.05 + Math.random() * 0.05, 4, 4]} />
              <meshStandardMaterial color="#666666" />
            </mesh>
          );
        })}
      </group>

      {planets.map((planet) => (
        <Planet
          key={planet.name}
          planet={planet}
          distance={planet.distanceFromSun}
          isSelected={selectedPlanet.name === planet.name}
          onSelect={onSelectPlanet}
          autoRotate={autoRotate}
        />
      ))}

      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        maxDistance={100}
        minDistance={5}
      />
    </>
  );
}