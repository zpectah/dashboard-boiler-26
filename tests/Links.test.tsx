import { describe, it, expect, beforeEach } from 'vitest';
import { panelStorageKey } from '../src/constants/keys.storage';

describe('Link CRUD Operations within a Panel', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const initialPanel = {
    id: 'panel-1',
    name: 'Test Panel',
    links: [],
  };

  it('should create a new link in an existing panel', () => {
    localStorage.setItem(panelStorageKey, JSON.stringify([initialPanel]));

    const newLink = {
      id: 'link-1',
      name: 'Test Link',
      url: 'https://example.com',
    };

    // Simulace vytvoření odkazu
    const panels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    const targetPanel = panels.find((p: any) => p.id === initialPanel.id);
    if (targetPanel) {
      targetPanel.links.push(newLink);
    }
    localStorage.setItem(panelStorageKey, JSON.stringify(panels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0].links).toHaveLength(1);
    expect(storedPanels[0].links[0]).toEqual(newLink);
  });

  it('should edit an existing link in a panel', () => {
    const existingLink = {
      id: 'link-1',
      name: 'Old Link Name',
      url: 'https://old.com',
    };
    const panelWithLink = {
      ...initialPanel,
      links: [existingLink],
    };
    localStorage.setItem(panelStorageKey, JSON.stringify([panelWithLink]));

    const updatedLink = {
      ...existingLink,
      name: 'New Link Name',
      url: 'https://new.com',
    };

    // Simulace editace odkazu
    const panels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    const targetPanel = panels.find((p: any) => p.id === panelWithLink.id);
    if (targetPanel) {
      const linkIndex = targetPanel.links.findIndex((l: any) => l.id === updatedLink.id);
      if (linkIndex !== -1) {
        targetPanel.links[linkIndex] = updatedLink;
      }
    }
    localStorage.setItem(panelStorageKey, JSON.stringify(panels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0].links).toHaveLength(1);
    expect(storedPanels[0].links[0]).toEqual(updatedLink);
  });

  it('should delete a link from a panel', () => {
    const linkToDelete = {
      id: 'link-1',
      name: 'Link to Delete',
      url: 'https://delete.com',
    };
    const anotherLink = {
      id: 'link-2',
      name: 'Another Link',
      url: 'https://another.com',
    };
    const panelWithLinks = {
      ...initialPanel,
      links: [linkToDelete, anotherLink],
    };
    localStorage.setItem(panelStorageKey, JSON.stringify([panelWithLinks]));

    // Simulace smazání odkazu
    const panels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    const targetPanel = panels.find((p: any) => p.id === panelWithLinks.id);
    if (targetPanel) {
      targetPanel.links = targetPanel.links.filter((l: any) => l.id !== linkToDelete.id);
    }
    localStorage.setItem(panelStorageKey, JSON.stringify(panels));

    const storedPanels = JSON.parse(localStorage.getItem(panelStorageKey) || '[]');
    expect(storedPanels).toHaveLength(1);
    expect(storedPanels[0].links).toHaveLength(1);
    expect(storedPanels[0].links[0]).toEqual(anotherLink);
    expect(storedPanels[0].links.some((l: any) => l.id === linkToDelete.id)).toBeFalsy();
  });
});
