import { useRef, useMemo } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { planets } from "@/lib/planets";
import type { Planet } from "@/lib/types";
import type { TimeControlState } from "./TimeController";

// Custom atmosphere shader
const atmosphereVertexShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const atmosphereFragmentShader = `
varying vec3 vNormal;
uniform vec3 glowColor;
uniform float atmosphereDensity;
void main() {
  float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0) * atmosphereDensity;
  gl_FragColor = vec4(glowColor, intensity);
}
`;

// Create custom shader material
class AtmosphereMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      uniforms: {
        glowColor: { value: new THREE.Color(0x93cfef) },
        atmosphereDensity: { value: 1.0 }
      }
    });
  }
}

extend({ AtmosphereMaterial });

interface PlanetProps {
  planet: Planet;
  distance: number;
  isSelected: boolean;
  onSelect: (planet: Planet) => void;
  autoRotate: boolean;
  timeState: TimeControlState;
}

function Planet({
  planet,
  distance,
  isSelected,
  onSelect,
  autoRotate,
  timeState,
}: PlanetProps) {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(THREE.TextureLoader, planet.texture);
  const ringTexture = planet.name === "Saturn"
    ? useLoader(THREE.TextureLoader, "/textures/2k_saturn_ring_alpha.png")
    : null;

  // Create atmosphere material with planet-specific colors
  const atmosphereMaterial = useMemo(() => {
    return new AtmosphereMaterial();
  }, []);

  useFrame((state) => {
    if (!timeState.isPlaying || !planetRef.current || !orbitRef.current || !meshRef.current) return;

    // Apply axial tilt
    planetRef.current.rotation.x = planet.axialTilt || 0;

    // Calculate position based on orbital period and current date
    if (autoRotate) {
      // Rotate planet on its axis with time control
      meshRef.current.rotation.y += planet.rotationSpeed * timeState.speed;

      // Orbit around sun with time control
      orbitRef.current.rotation.y += planet.orbitSpeed * timeState.speed;
    }

    // Update atmosphere if present
    if (atmosphereRef.current && planet.atmosphereDensity > 0) {
      const material = atmosphereRef.current.material as AtmosphereMaterial;
      material.uniforms.glowColor.value = new THREE.Color(planet.atmosphereColor);
      material.uniforms.atmosphereDensity.value = planet.atmosphereDensity;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance, distance + 0.05, 128]} />
        <meshBasicMaterial color={0x666666} side={THREE.DoubleSide} transparent opacity={0.5} wireframe />
      </mesh>

      <group ref={planetRef} position={[distance, 0, 0]}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(planet);
          }}
        >
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            emissive={isSelected ? "white" : "black"}
            emissiveIntensity={isSelected ? 0.2 : 0}
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>

        {planet.atmosphereDensity > 0 && (
          <mesh ref={atmosphereRef}>
            <sphereGeometry args={[planet.size * 1.1, 32, 32]} />
            <primitive object={atmosphereMaterial} />
          </mesh>
        )}

        {planet.name === "Saturn" && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[3, 5, 64]} />
            <meshStandardMaterial
              map={ringTexture}
              transparent={true}
              opacity={1}
              side={THREE.DoubleSide}
              emissive="#FFFFFF"
              emissiveIntensity={0.1}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        )}

        {planet.moons?.map((moon, index) => (
          <group
            key={index}
            rotation={[0, (2 * Math.PI * index) / (planet.moons?.length || 1), 0]}
          >
            <mesh position={[moon.distance, 0, 0]}>
              <sphereGeometry args={[moon.size, 16, 16]} />
              <meshStandardMaterial
                map={useLoader(THREE.TextureLoader, moon.texture)}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

interface SolarSystemProps {
  selectedPlanet: Planet;
  onSelectPlanet: (planet: Planet) => void;
  autoRotate: boolean;
  timeState: TimeControlState;
}

export default function SolarSystem({
  selectedPlanet,
  onSelectPlanet,
  autoRotate,
  timeState,
}: SolarSystemProps) {
  const sunTexture = useLoader(THREE.TextureLoader, "/textures/2k_sun.jpg");

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        position={[0, 0, 0]}
        intensity={50}
        color="#FDB813"
        distance={100}
        decay={1}
      />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} />

      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial map={sunTexture} color="#FDB813" />
      </mesh>

      {/* Asteroid Belt */}
      <group rotation={[Math.PI / 8, 0, 0]}>
        {Array.from({ length: 200 }).map((_, i) => {
          const angle = (i / 200) * Math.PI * 2;
          const radius = 18 + Math.random() * 2; // Between Mars and Jupiter
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 2;
          const asteroidTextures = [
            "/textures/2k_asteroid_1.jpg",
            "/textures/2k_asteroid_2.jpg",
            "/textures/2k_asteroid_3.jpg",
            "/textures/2k_asteroid_4.jpg",
          ];
          const randomTexture = useLoader(
            THREE.TextureLoader,
            asteroidTextures[
              Math.floor(Math.random() * asteroidTextures.length)
            ],
          );
          return (
            <mesh
              key={i}
              position={[x, y, z]}
              rotation={[
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI,
              ]}
              scale={[
                0.08 + Math.random() * 0.08,
                0.06 + Math.random() * 0.08,
                0.07 + Math.random() * 0.08,
              ]}
            >
              <icosahedronGeometry args={[1, Math.floor(Math.random() * 2)]} />
              <meshStandardMaterial
                map={randomTexture}
                metalness={0.5}
                roughness={0.2}
              />
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
          timeState={timeState}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.2}
        maxDistance={100}
        minDistance={5}
      />
    </>
  );
}