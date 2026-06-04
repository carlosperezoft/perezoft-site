import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Footer from '../Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the PEREZOFT logo', () => {
    expect(screen.getByText('PEREZOFT')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    expect(screen.getByText('Crafting digital products that make a difference.')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    const navLinks = document.querySelectorAll('.footer__nav-link');
    const labels = ['About', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'];
    expect(navLinks).toHaveLength(labels.length);
    labels.forEach((label, i) => {
      expect(navLinks[i].textContent).toBe(label);
    });
  });

  it('renders social links with correct aria-labels', () => {
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders contact email', () => {
    expect(screen.getByText('contact@perezoft.com')).toBeInTheDocument();
  });

  it('renders Get in Touch CTA', () => {
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} PEREZOFT. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders Made with by Carlos Perez', () => {
    expect(screen.getByText(/by Carlos Perez/)).toBeInTheDocument();
  });

  it('renders availability note', () => {
    expect(screen.getByText(/Available for freelance/)).toBeInTheDocument();
  });
});
