import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { UserProvider } from '../../context/UserContext';
import Leaderboard from './Leaderboard';
import userEvent from '@testing-library/user-event';

test('should display users leaderboard', () => {
  render(
    <UserProvider>
      <Leaderboard />
    </UserProvider>
  );

  const leader = screen.getByRole('heading', {
    name: /users leaderboard/i,
  });
  expect(leader).toBeInTheDocument();
});

test('nav bar takes you where you need to go', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const link = await screen.findByRole('link', {
    name: /leaderboard/i,
  });

  userEvent.click(link);
  const heading = await screen.findByRole('heading', {
    name: /users leaderboard/i,
  });
  expect(heading).toBeInTheDocument();
});
