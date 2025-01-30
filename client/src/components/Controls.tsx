import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export default function Controls({ autoRotate, onToggleAutoRotate }) {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
      <Button
        variant="secondary"
        size="lg"
        className="bg-black/50 hover:bg-black/70"
        onClick={onToggleAutoRotate}
      >
        {autoRotate ? <Pause className="mr-2" /> : <Play className="mr-2" />}
        {autoRotate ? 'Pause Rotation' : 'Start Rotation'}
      </Button>
    </div>
  );
}
