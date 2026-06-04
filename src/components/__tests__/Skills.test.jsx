import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Skills from '../Skills';

describe('Skills', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Architecture & Engineering')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Tools')).toBeInTheDocument();
  });

  it('renders backend skill names', () => {
    expect(screen.getByText('Java / Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('Microservices Architecture')).toBeInTheDocument();
    expect(screen.getByText('GraphQL APIs')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders frontend skill names', () => {
    expect(screen.getByText('React JS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript / ES6+')).toBeInTheDocument();
    expect(screen.getByText('HTML5 / CSS3')).toBeInTheDocument();
    expect(screen.getByText('Web Design')).toBeInTheDocument();
  });

  it('renders skill percentage values', () => {
    expect(screen.getByText('97%')).toBeInTheDocument();
    expect(screen.getByText('93%')).toBeInTheDocument();
    expect(screen.getAllByText('88%').length).toBeGreaterThanOrEqual(1);
  });

  it('renders skill bars with data-width attribute', () => {
    const fills = document.querySelectorAll('.skills__bar-fill');
    expect(fills.length).toBe(16);
    expect(fills[0].dataset.width).toBe('97%');
  });

  it('has the correct section id', () => {
    expect(document.getElementById('skills')).toBeInTheDocument();
  });
});
