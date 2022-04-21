import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App';
import { UserProvider } from '../../context/UserContext';
import userEvent from '@testing-library/user-event';

const mockUser = {
  id: 1,
  username: 'petlover',
  password: 'hilol',
};
const data = [
  {
    id: '1',
    species: 'Chikcy',
    image: 'https://i.postimg.cc/1f3txb9Q/pet1.png',
  },
  {
    id: '2',
    species: 'Seahorse',
    image: 'https://i.postimg.cc/21qSyvb9/pet2.png',
  },
  { id: '3', species: 'Dino', image: 'https://i.postimg.cc/bGkYHhRQ/pet3.png' },
];

test('can feed your pet', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const petPage = await screen.findByRole('link', {
    name: /your bb/i,
  });
  userEvent.click(petPage);
  const feedButton = await screen.findByRole('button', {
    name: /feed/i,
  });
  expect(feedButton).toBeInTheDocument();
});

test('pet renders on page', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const petPage = await screen.findByRole('link', {
    name: /your bb/i,
  });
  userEvent.click(petPage);
  const heading = await screen.findByRole('heading', {
    name: /omelette/i,
  });
  expect(heading).toBeInTheDocument();
});
