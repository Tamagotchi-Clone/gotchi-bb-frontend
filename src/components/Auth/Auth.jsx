import React from 'react';

export default function Auth() {
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => e.target.value}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => e.target.value}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
