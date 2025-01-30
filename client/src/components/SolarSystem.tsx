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

  useFrame(() => {
    if (autoRotate && meshRef.current && orbitRef.current) {
      meshRef.current.rotation.y += planet.rotationSpeed;
      orbitRef.current.rotation.y += planet.orbitSpeed;
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
      <line>
        <circleGeometry args={[distance, 64]} />
        <lineBasicMaterial color="gray" opacity={0.2} transparent />
      </line>
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
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />

      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          map={sunTexture}
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

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