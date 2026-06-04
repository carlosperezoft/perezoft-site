import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Hero from '../Hero';

vi.mock('../../assets/profile.png', () => ({ default: 'profile.png' }));

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders the name', () => {
    expect(screen.getByText('Carlos Perez')).toBeInTheDocument();
  });

  it('renders the title role', () => {
    expect(screen.getByText('Technical Leader & Software Architect')).toBeInTheDocument();
  });

  it('renders tech stack badges', () => {
    const techs = ['Java', 'Spring Boot', 'React JS', 'Microservices', 'GraphQL', 'Docker'];
    techs.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders Hire Me and View Projects buttons', () => {
    expect(screen.getByText('Hire Me')).toBeInTheDocument();
    expect(screen.getByText('View Projects')).toBeInTheDocument();
  });

  it('renders social links with correct aria-labels', () => {
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders location text', () => {
    expect(screen.getByText('Medellín, Colombia')).toBeInTheDocument();
  });

  it('renders profile image', () => {
    const img = screen.getByAltText('Carlos Alberto Perez Moncada - PEREZOFT');
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
  });

  it('renders floating stat cards', () => {
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Years Exp.')).toBeInTheDocument();
    expect(screen.getByText('MSc')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
  });

  it('renders scroll-down hint button', () => {
    expect(screen.getByLabelText('Scroll down')).toBeInTheDocument();
  });

  it('renders availability eyebrow', () => {
    expect(screen.getByText('Available for new projects')).toBeInTheDocument();
  });
});
