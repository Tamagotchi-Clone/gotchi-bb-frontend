import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { UserProvider } from '../../context/UserContext';

test('testing login', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const login = await screen.findByRole('link', { name: /login/i });
  userEvent.click(login);

  const username = await screen.findByRole('textbox');
  userEvent.type(username, 'te');

  const password = await screen.findByPlaceholderText(/password/i);
  userEvent.type(password, 'password');

  const button = await screen.findByRole('button', { name: /login/i });
  userEvent.click(button);
});

test('testing login error', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const login = await screen.findByRole('link', { name: /login/i });
  userEvent.click(login);

  const username = await screen.findByRole('textbox');
  userEvent.type(username, 'incorrect');

  const password = await screen.findByPlaceholderText(/password/i);
  userEvent.type(password, 'password');

  const button = await screen.findByRole('button', { name: /login/i });
  userEvent.click(button);

  const errorMsg = await screen.findByText(
    /invalid username and\/or password, please try again!/i
  );
  expect(errorMsg).toBeInTheDocument();
});
