import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { EventsCalendar } from "@/components/EventsCalendar";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <Router />
        {/* Calendar toggle button */}
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <Calendar className="h-[1.2rem] w-[1.2rem]" />
        </Button>

        {/* Calendar panel */}
        {showCalendar && (
          <div className="fixed top-16 right-4 z-50">
            <EventsCalendar />
          </div>
        )}
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;