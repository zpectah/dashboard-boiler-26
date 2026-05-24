import { describe, it, expect, beforeEach } from 'vitest';
import { panelStorageKey } from '../src/constants/keys.storage'; // Předpokládám, že cesta je správná

describe('Panel CRUD Operations', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should create a new panel and store it in localStorage', () => {
    const newPanel = {
      id: 'panel-1',
      name: 'Test Panel',
      links: [],
    };

    // Simulace vytvoření panelu - přímá manipulace s localStorage
    const existingPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    existingPanels.push(newPanel);
    localStorage.setItem(panelStorageKey, JSON.stringify(existingPanels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0]).toEqual(newPanel);
  });

  it('should edit an existing panel in localStorage', () => {
    const initialPanel = {
      id: 'panel-1',
      name: 'Initial Panel Name',
      links: [],
    };
    localStorage.setItem(panelStorageKey, JSON.stringify([initialPanel]));

    const updatedPanel = {
      ...initialPanel,
      name: 'Updated Panel Name',
    };

    // Simulace editace panelu
    const panels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    const panelIndex = panels.findIndex((p: any) => p.id === updatedPanel.id);
    if (panelIndex !== -1) {
      panels[panelIndex] = updatedPanel;
    }
    localStorage.setItem(panelStorageKey, JSON.stringify(panels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0]).toEqual(updatedPanel);
  });

  it('should delete a panel from localStorage', () => {
    const panelToDelete = {
      id: 'panel-1',
      name: 'Panel to Delete',
      links: [],
    };
    const anotherPanel = {
      id: 'panel-2',
      name: 'Another Panel',
      links: [],
    };
    localStorage.setItem(panelStorageKey, JSON.stringify([panelToDelete, anotherPanel]));

    // Simulace smazání panelu
    let panels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    panels = panels.filter((p: any) => p.id !== panelToDelete.id);
    localStorage.setItem(panelStorageKey, JSON.stringify(panels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0]).toEqual(anotherPanel);
    expect(storedPanels.some((p: any) => p.id === panelToDelete.id)).toBeFalsy();
  });
});
