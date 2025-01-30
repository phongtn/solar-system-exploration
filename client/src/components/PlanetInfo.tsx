import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { Planet } from '@/lib/types';
import '../styles/PlanetInfo.css';

interface PlanetInfoProps {
  planet: Planet;
}

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  return (
    <ScrollArea className="h-full p-4 md:p-6 text-white">
      <CardHeader className="p-0 mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {planet.name}
        </h1>
      </CardHeader>

      <CardContent className="p-0 space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-semibold text-white">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm md:text-base text-white">Distance from Sun</p>
              <p className="text-base md:text-lg">{planet.distanceFromSunKm} km</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-400">Orbital Period</p>
              <p className="text-base md:text-lg">{planet.orbitalPeriod} Earth days</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-400">Surface Temperature</p>
              <p className="text-base md:text-lg">{planet.averageTemp}°C</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-400">Diameter</p>
              <p className="text-base md:text-lg">{planet.diameter} km</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 my-4 md:my-6" />

        <div className="space-y-2 md:space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-purple-400">Description</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {planet.description}
          </p>
        </div>

        <Separator className="bg-gray-800 my-4 md:my-6" />

        <div className="space-y-2 md:space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-purple-400">Fun Facts</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
            {planet.funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </ScrollArea>
  );
}