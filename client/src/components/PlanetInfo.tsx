import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import '../styles/PlanetInfo.css';

export default function PlanetInfo({ planet }) {
  return (
    <ScrollArea className="h-full p-6 text-white">
      <CardHeader className="p-0 mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {planet.name}
        </h1>
      </CardHeader>

      <CardContent className="p-0 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-400">Quick Facts</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Distance from Sun</p>
              <p className="text-lg">{planet.distanceFromSunKm} km</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Orbital Period</p>
              <p className="text-lg">{planet.orbitalPeriod} Earth days</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Surface Temperature</p>
              <p className="text-lg">{planet.averageTemp}°C</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Diameter</p>
              <p className="text-lg">{planet.diameter} km</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-400">Description</h2>
          <p className="text-gray-300 leading-relaxed">
            {planet.description}
          </p>
        </div>

        <Separator className="bg-gray-800" />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-400">Fun Facts</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {planet.funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </ScrollArea>
  );
}
