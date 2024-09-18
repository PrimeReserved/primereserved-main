import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'text-encoding';
import ContactForm from '../components/Contact/FormHandling/ContactForm'; // The component with your form
import { addContact } from '../lib/action'; // Mock the API call

jest.mock('../lib/action'); // Mock the `addContact` function

describe('Contact Form Submission', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock data
  });

  test('should show success notification and set form as submitted when response.success is true', async () => {
    // Mock the API call to return a successful response
    (addContact as jest.Mock).mockResolvedValue({ success: true });

    render(<ContactForm />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'Samuel Chinonso Archibong' }
    });
    fireEvent.change(screen.getByLabelText(/Company Name/i), {
      target: { value: 'PrimeReserved' }
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'archibong.chinonso.samuel@gmail.com' }
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '08103155891' }
    });
    fireEvent.change(screen.getByLabelText(/Service Required/i), {
      target: { value: 'Web Development' }
    });
    fireEvent.change(screen.getByLabelText(/Project Details/i), {
      target: { value: 'Come back' }
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

    // Assert that the button is disabled while submitting
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();

    // Wait for the form submission to complete
    await waitFor(() => {
      // Check if the success notification was called
      expect(screen.getByText(/Success message/i)).toBeInTheDocument();
      // Check that the form is marked as submitted
      expect(screen.getByTestId('submission-status')).toHaveTextContent('Submitted');
    });

    // Check that the button is enabled again after submission
    expect(screen.getByRole('button', { name: /Submit/i })).not.toBeDisabled();
  });

  test('should show failure notification when response.success is false', async () => {
    // Mock the API call to return a failure response
    (addContact as jest.Mock).mockResolvedValue({
      success: false,
      error: 'Failed to submit form'
    });

    render(<ContactForm />);

    // Fill out the form fields as before
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'Samuel Chinonso Archibong' }
    });
    // (fill the other fields in the same way)

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Check if the failure notification was called
      expect(screen.getByText(/Failure message: Failed to submit form/i)).toBeInTheDocument();
    });
  });
});
