import { useMemo, useState } from 'react';
import { usePanels } from '../../hooks';
import { mainPanelName } from '../../constants';
import type { Direction } from './types';
import { DirectionKeys } from './enums';
import { panelDirectionDefault } from './constants';

export const useDashboardSlider = (panel: string | undefined) => {
  const { panels } = usePanels();

  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(panelDirectionDefault);

  const currentIndex = useMemo(
    () =>
      panels.findIndex(
        (p) =>
          p.name === panel || (p.name === mainPanelName && panel === undefined),
      ),
    [panels, panel],
  );

  if (currentIndex !== prevIndex) {
    setDirection(
      currentIndex > prevIndex ? DirectionKeys.left : DirectionKeys.right,
    );
    setPrevIndex(currentIndex);
  }

  return {
    prevIndex,
    currentIndex,
    direction,
  };
};
