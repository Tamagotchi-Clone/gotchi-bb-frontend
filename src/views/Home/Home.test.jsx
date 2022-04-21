import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import App from '../../App';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
const server = setupServer(
  rest.get('http://localhost:7890/api/v1/pets', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
  rest.get('http://localhost:7890/api/v1/users/me', (req, res, ctx) => {
    return res(ctx.json(mockUser));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());

test('randomized pet renders on home screen', async () => {
  render(
    <UserProvider>
      <Home />
    </UserProvider>
  );
  const pet = await screen.findByRole('img');
  expect(pet).toBeInTheDocument();
});

test('renders app description', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const description = await screen.findByText(
    /pixel bb you can feed, clean, play with, and chat with\./i
  );
  expect(description).toBeInTheDocument();
});
