import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import SolarSystem from '@/components/SolarSystem';
import PlanetInfo from '@/components/PlanetInfo';
import Controls from '@/components/Controls';
import { Card } from '@/components/ui/card';
import { planets } from '@/lib/planets';

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-screen flex">
      <div className="flex-grow relative">
        <Canvas
          camera={{ position: [0, 20, 25], fov: 60 }}
          style={{ background: 'black' }}
        >
          <Suspense fallback={null}>
            <SolarSystem 
              selectedPlanet={selectedPlanet}
              onSelectPlanet={setSelectedPlanet}
              autoRotate={autoRotate}
            />
          </Suspense>
        </Canvas>
        <Controls 
          autoRotate={autoRotate}
          onToggleAutoRotate={() => setAutoRotate(!autoRotate)}
        />
      </div>

      <Card className="w-96 h-full overflow-auto bg-black/80 border-gray-800">
        <PlanetInfo planet={selectedPlanet} />
      </Card>
    </div>
  );
}