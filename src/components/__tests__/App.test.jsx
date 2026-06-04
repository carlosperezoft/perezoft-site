import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../../App';

vi.mock('../Navbar', () => ({ default: () => <nav data-testid="navbar">Navbar</nav> }));
vi.mock('../Hero', () => ({ default: () => <section data-testid="hero">Hero</section> }));
vi.mock('../About', () => ({ default: () => <section data-testid="about">About</section> }));
vi.mock('../Experience', () => ({ default: () => <section data-testid="experience">Experience</section> }));
vi.mock('../Skills', () => ({ default: () => <section data-testid="skills">Skills</section> }));
vi.mock('../Projects', () => ({ default: () => <section data-testid="projects">Projects</section> }));
vi.mock('../Services', () => ({ default: () => <section data-testid="services">Services</section> }));
vi.mock('../Contact', () => ({ default: () => <section data-testid="contact">Contact</section> }));
vi.mock('../Footer', () => ({ default: () => <footer data-testid="footer">Footer</footer> }));

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders Navbar', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders all main sections inside <main>', () => {
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('experience')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  it('renders Footer', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
