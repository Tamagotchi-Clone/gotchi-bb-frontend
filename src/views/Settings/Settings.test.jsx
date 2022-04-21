import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UserProvider } from '../../context/UserContext';
import App from '../../App';

const mockUser = {
  id: 1,
  username: 'petlover',
  password: 'hilol',
};

const server = setupServer(
  rest.get('http://localhost:7890/api/v1/users/me', (req, res, ctx) => {
    return res(ctx.json(mockUser));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());

test('assures that settings is not in the document', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const setting = await screen.findByText('Settings');
  expect(setting).toBeInTheDocument();
});

test('goes to settings', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const setting = await screen.findByText('Settings');
  userEvent.click(setting);

  const header = await screen.findByRole('heading', { name: /edit your bb/i });
  expect(header).toBeInTheDocument();
});

test('settings has buttons', async () => {
  render(
    <UserProvider mockUser={mockUser}>
      <App />
    </UserProvider>
  );
  const setting = await screen.findByText('Settings');
  userEvent.click(setting);

  const input = await screen.findByRole('textbox');
  userEvent.type(input, 'egg');
  const button = await screen.findByRole('button', { name: /change name/i });
  expect(button).toBeInTheDocument();
});
