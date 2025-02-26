import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Pause, Play, FastForward, Rewind } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface TimeControlState {
  isPlaying: boolean;
  speed: number;
  currentDate: Date;
}

interface TimeControllerProps {
  onTimeChange: (state: TimeControlState) => void;
}

export function TimeController({ onTimeChange }: TimeControllerProps) {
  const [state, setState] = useState<TimeControlState>({
    isPlaying: true,
    speed: 1,
    currentDate: new Date(),
  });

  const speeds = [0.25, 0.5, 1, 2, 5, 10];

  useEffect(() => {
    onTimeChange(state);
  }, [state, onTimeChange]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-lg shadow-lg flex items-center gap-4">
      {/* Play/Pause Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))}
      >
        {state.isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      {/* Speed Controls */}
      <div className="flex items-center gap-2">
        <Rewind className="h-4 w-4" />
        <Slider
          value={[speeds.indexOf(state.speed)]}
          min={0}
          max={speeds.length - 1}
          step={1}
          onValueChange={([value]) => {
            setState(prev => ({ ...prev, speed: speeds[value] }));
          }}
          className="w-32"
        />
        <FastForward className="h-4 w-4" />
      </div>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="min-w-[240px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(state.currentDate, "PPP")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={state.currentDate}
            onSelect={(date) => date && setState(prev => ({ ...prev, currentDate: date }))}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
