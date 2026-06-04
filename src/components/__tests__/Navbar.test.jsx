import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders the PEREZOFT logo text', () => {
    expect(screen.getByText('PEREZOFT')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    const expectedLinks = ['About', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'];
    expectedLinks.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders the Hire Me CTA button', () => {
    const hireBtns = screen.getAllByText('Hire Me');
    expect(hireBtns.length).toBeGreaterThanOrEqual(1);
  });

  it('renders mobile toggle button', () => {
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', () => {
    const toggle = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggle);
    const mobileMenu = document.querySelector('.navbar__mobile--open');
    expect(mobileMenu).toBeInTheDocument();
  });

  it('closes mobile menu when a nav link is clicked', () => {
    const toggle = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggle);
    expect(document.querySelector('.navbar__mobile--open')).toBeInTheDocument();

    const mobileLinks = document.querySelectorAll('.navbar__mobile-link');
    fireEvent.click(mobileLinks[0]);
    expect(document.querySelector('.navbar__mobile--open')).not.toBeInTheDocument();
  });

  it('adds scrolled class when window is scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    expect(document.querySelector('.navbar--scrolled')).toBeInTheDocument();
  });
});
