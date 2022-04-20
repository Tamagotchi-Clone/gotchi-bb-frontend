import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import App from '../../App';
import ChoosePet from './ChoosePet';
import { MemoryRouter, Route } from 'react-router-dom';

// jest.mock('../../context/UserContext');

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

test('all the pets from our pet table render on screen', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const pet = await screen.findByRole('img');
  expect(pet).toBeInTheDocument();
});

test.only('reroutes you to pet page when you submit', async () => {
  render(
    <MemoryRouter initialEntries={['/choosepet']}>
      <UserProvider>
        <ChoosePet />
      </UserProvider>
    </MemoryRouter>
  );
  const loading = screen.getByRole('heading');
  expect(loading).toBeInTheDocument();
  //const textbox = await screen.findByLabelText('petnameinput');
  // console.log('LOOKHERE', textbox);
  // const submit = await screen.findByRole('button', {
  // name: /submit/i,
  //});
});
