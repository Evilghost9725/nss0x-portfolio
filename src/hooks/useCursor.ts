import { useAppState } from '@/context/AppStateContext';
import { CursorType } from '@/types/appPhases';

export function useCursor() {
  const { cursor, setCursor } = useAppState();

  const changeCursor = (newCursor: CursorType) => {
    setCursor(newCursor);
    // Apply cursor style to document body
    document.body.style.cursor = newCursor;
  };

  return {
    cursor,
    setCursor: changeCursor,
  };
}
