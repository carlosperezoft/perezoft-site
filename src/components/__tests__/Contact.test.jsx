import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import Contact from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the section title', () => {
    expect(screen.getByText(/Let's build something/)).toBeInTheDocument();
  });

  it('renders email and location', () => {
    expect(screen.getByText('contact@perezoft.com')).toBeInTheDocument();
    expect(screen.getByText('Medellín Metropolitan Area, Colombia')).toBeInTheDocument();
  });

  it('renders social links', () => {
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter / X')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders the contact form fields', () => {
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Service Needed')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('updates form fields on user input', async () => {
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Email Address');

    await user.type(nameInput, 'Test User');
    expect(nameInput).toHaveValue('Test User');

    await user.type(emailInput, 'test@example.com');
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('shows confirmation message after form submission', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Your Name'), 'Test');
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com');
    await user.selectOptions(screen.getByLabelText('Service Needed'), 'Web Development');
    await user.type(screen.getByLabelText('Your Message'), 'Hello');

    fireEvent.submit(document.querySelector('.contact__form'));

    expect(screen.getByText('✓ Message Sent!')).toBeInTheDocument();
  });

  it('resets form fields after submission', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('Your Name'), 'Test');
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com');
    await user.selectOptions(screen.getByLabelText('Service Needed'), 'Web Development');
    await user.type(screen.getByLabelText('Your Message'), 'Hello');

    fireEvent.submit(document.querySelector('.contact__form'));

    expect(screen.getByLabelText('Your Name')).toHaveValue('');
    expect(screen.getByLabelText('Email Address')).toHaveValue('');
    expect(screen.getByLabelText('Your Message')).toHaveValue('');
  });

  it('renders availability indicator', () => {
    expect(screen.getByText('Available for freelance projects')).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});
