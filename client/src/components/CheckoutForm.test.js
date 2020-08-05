import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />);
  expect(screen.getByText(/Checkout Form/i));
});

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />);

  fireEvent.change(screen.getByTestId(/input-content/i), {
    target: { value: 'Tim' },
  });
  fireEvent.click(screen.getByText(/Checkout Now/i));

  screen.getByText(/tim/i);
});
