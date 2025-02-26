import { addDays, isAfter, isBefore, startOfDay } from "date-fns";

export interface AstronomicalEvent {
  name: string;
  type: "eclipse" | "meteor_shower" | "conjunction" | "opposition";
  startDate: Date;
  endDate?: Date;
  description: string;
  peakDate?: Date;
  visibility: string;
  relatedBodies: string[];
}

// Sample data for 2025 astronomical events
export const astronomicalEvents: AstronomicalEvent[] = [
  {
    name: "Quadrantids Meteor Shower",
    type: "meteor_shower",
    startDate: new Date("2025-01-03"),
    endDate: new Date("2025-01-04"),
    peakDate: new Date("2025-01-03"),
    description: "The Quadrantids is an above average shower, with up to 40 meteors per hour at its peak.",
    visibility: "Best viewed from Northern Hemisphere",
    relatedBodies: ["Earth"]
  },
  {
    name: "Total Lunar Eclipse",
    type: "eclipse",
    startDate: new Date("2025-03-14"),
    description: "A total lunar eclipse occurs when the Moon passes through the Earth's shadow.",
    visibility: "Visible from North and South America",
    relatedBodies: ["Earth", "Moon"]
  },
  {
    name: "Mars Opposition",
    type: "opposition",
    startDate: new Date("2025-01-16"),
    description: "Mars will be at its closest approach to Earth and fully illuminated by the Sun.",
    visibility: "Visible throughout the night",
    relatedBodies: ["Mars", "Earth"]
  },
  {
    name: "Venus-Jupiter Conjunction",
    type: "conjunction",
    startDate: new Date("2025-04-20"),
    description: "Venus and Jupiter will make a close approach, appearing just 0.2 degrees apart.",
    visibility: "Visible in the evening sky",
    relatedBodies: ["Venus", "Jupiter"]
  }
];

export function getUpcomingEvents(days: number = 30): AstronomicalEvent[] {
  const today = startOfDay(new Date());
  const futureDate = addDays(today, days);
  
  return astronomicalEvents.filter(event => {
    const eventDate = event.peakDate || event.startDate;
    return isAfter(eventDate, today) && isBefore(eventDate, futureDate);
  }).sort((a, b) => {
    const dateA = a.peakDate || a.startDate;
    const dateB = b.peakDate || b.startDate;
    return dateA.getTime() - dateB.getTime();
  });
}
