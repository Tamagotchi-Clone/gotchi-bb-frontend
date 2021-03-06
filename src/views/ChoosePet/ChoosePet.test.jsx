import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import ChoosePet from './ChoosePet';

const mockUser = {
  id: 1,
  username: 'petlover',
  password: 'hilol',
};
const data = [
  {
    id: '1',
    species: 'Chicky',
    image: 'https://i.postimg.cc/1f3txb9Q/pet1.png',
  },
  {
    id: '2',
    species: 'Seahorse',
    image: 'https://i.postimg.cc/21qSyvb9/pet2.png',
  },
  { id: '3', species: 'Dino', image: 'https://i.postimg.cc/bGkYHhRQ/pet3.png' },
];
const pet = {
  cleanliness: '2022-04-21T17:51:50.940Z',
  hunger: '2022-04-21T17:51:47.178Z',
  id: '3',
  name: 'd',
  petId: '1',
  play: '2022-04-21T17:51:49.195Z',
  userId: '1',
};
const server = setupServer(
  rest.get(`${process.env.API_URL}/api/v1/pets`, (req, res, ctx) => {
    return res(ctx.json(data));
  }),
  rest.get(`${process.env.API_URL}/api/v1/users/me`, (req, res, ctx) => {
    return res(ctx.json(mockUser));
  }),
  rest.get(
    `${process.env.API_URL}/api/v1/userpets/users/1`,
    (req, res, ctx) => {
      return res(ctx.json(pet));
    }
  )
);
beforeAll(() => server.listen());
afterAll(() => server.close());

test('all the pets from our pet table render on screen', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <ChoosePet />
    </UserProvider>
  );
  const pet = await screen.findByAltText('Seahorse');
  expect(pet).toBeInTheDocument();
});
