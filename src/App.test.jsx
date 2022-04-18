import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';

test('testing sign up', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const signup = await screen.findByRole('link', { name: /sign up/i });
  userEvent.click(signup);

  const username = await screen.findByRole('textbox');
  userEvent.type(username, 'test@test.com');

  const password = await screen.findByPlaceholderText(/password/i);
  userEvent.type(password, 'password');

  const button = await screen.findByRole('button', { name: /sign up/i });
  userEvent.click(button);

  const errorMsg = await screen.findByText(/this username is already taken\./i);
  expect(errorMsg).toBeInTheDocument();
});
