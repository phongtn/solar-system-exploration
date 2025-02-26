import { useState } from "react";
import { format } from "date-fns";
import { getUpcomingEvents, type AstronomicalEvent } from "@/lib/astronomicalEvents";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Star, Sun, Orbit } from "lucide-react";

const eventTypeIcons = {
  eclipse: Sun,
  meteor_shower: Star,
  conjunction: Orbit,
  opposition: Orbit,
};

interface EventsCalendarProps {
  onEventSelect?: (event: AstronomicalEvent) => void;
}

export function EventsCalendar({ onEventSelect }: EventsCalendarProps) {
  const [daysAhead, setDaysAhead] = useState(30);
  const events = getUpcomingEvents(daysAhead);

  return (
    <div className="w-full max-w-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          Upcoming Events
        </h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDaysAhead(30)}
            className={daysAhead === 30 ? "bg-primary/20" : ""}
          >
            30 Days
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDaysAhead(90)}
            className={daysAhead === 90 ? "bg-primary/20" : ""}
          >
            90 Days
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {events.map((event) => {
          const Icon = eventTypeIcons[event.type];
          return (
            <Card
              key={`${event.name}-${event.startDate.toISOString()}`}
              className="p-3 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => onEventSelect?.(event)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(event.peakDate || event.startDate, "MMMM d, yyyy")}
                  </p>
                  <p className="text-sm mt-1">{event.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.visibility}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
        {events.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No upcoming events in the next {daysAhead} days
          </p>
        )}
      </div>
    </div>
  );
}
