import { useAppState } from '@/context/AppStateContext';
import { AppPhase } from '@/types/appPhases';

export function usePhase() {
  const { phase, setPhase, isLoading, setIsLoading } = useAppState();

  const transitionToPhase = async (newPhase: AppPhase, delay = 1000) => {
    setIsLoading(true);
    
    // Add transition delay for smooth UX
    await new Promise(resolve => setTimeout(resolve, delay));
    
    setPhase(newPhase);
    setIsLoading(false);
  };

  return {
    phase,
    isLoading,
    setPhase,
    transitionToPhase,
  };
}
