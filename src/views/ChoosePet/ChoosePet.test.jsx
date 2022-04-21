import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import App from '../../App';
import ChoosePet from './ChoosePet';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../context/UserContext');

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
  rest.get('https://gatchi.herokuapp.com/api/v1/pets', (req, res, ctx) => {
    return res(ctx.json(data));
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
  const pet = await screen.getByRole('img');
  expect(pet).toBeInTheDocument();
});

test.only('reroutes you to pet page when you submit', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/choosepet']}>
      <UserProvider>
        <Route path="/choosepet">
          <ChoosePet />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  screen.debug();
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  //const textbox = await screen.findByLabelText('petnameinput');
  // console.log('LOOKHERE', textbox);
  // const submit = await screen.findByRole('button', {
  // name: /submit/i,
  //});
});
