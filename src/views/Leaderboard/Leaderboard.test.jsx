import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import Leaderboard from './Leaderboard';

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
