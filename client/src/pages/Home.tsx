import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import SolarSystem from "@/components/SolarSystem";
import PlanetInfo from "@/components/PlanetInfo";
import Controls from "@/components/Controls";
import { TimeController, type TimeControlState } from "@/components/TimeController";
import type { Planet } from "@/lib/types";
import { planets } from "@/lib/planets";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planets[2]);
  const [autoRotate, setAutoRotate] = useState(true);
  const [timeState, setTimeState] = useState<TimeControlState>({
    isPlaying: true,
    speed: 1,
    currentDate: new Date(),
  });

  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <Controls autoRotate={autoRotate} onToggleAutoRotate={() => setAutoRotate(!autoRotate)} />
      </div>

      <Canvas camera={{ position: [0, 20, 25], fov: 60 }}>
        <SolarSystem
          selectedPlanet={selectedPlanet}
          onSelectPlanet={setSelectedPlanet}
          autoRotate={autoRotate}
          timeState={timeState}
        />
      </Canvas>

      {/* Time Controller */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10"> {/* Added positioning */}
        <TimeController onTimeChange={setTimeState} />
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            variant="outline" 
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10"
          >
            Planet Info
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-[80vh]">
            <PlanetInfo planet={selectedPlanet} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}