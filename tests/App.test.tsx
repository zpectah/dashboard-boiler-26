import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { App } from '../src/App';

test('App main', async () => {
  const { getByText } = await render(<App />);
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument();
});
