import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import PetLoading from './PetLoading';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

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

test('renders the loading when logged in', async () => {
  render(
    <MemoryRouter initialEntries={['/pet']}>
      <UserProvider mockUser={mockUser}>
        <Route path="/pet">
          <PetLoading />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  const loading = await screen.findByText('loading');
  await waitForElementToBeRemoved(loading);

  const pet = await screen.findByText(/taking you to pet page/i);
  expect(pet).toBeInTheDocument();
});
