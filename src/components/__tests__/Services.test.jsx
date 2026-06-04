import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Services from '../Services';

describe('Services', () => {
  beforeEach(() => {
    render(<Services />);
  });

  it('renders the section label', () => {
    expect(screen.getByText('What I offer')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders all service titles', () => {
    const titles = [
      'Enterprise Java Development',
      'Microservices Architecture',
      'React JS Frontend',
      'GraphQL API Design',
      'Software Architecture Consulting',
      'Technical Leadership',
    ];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders service descriptions', () => {
    expect(screen.getByText(/Custom Java and Spring Boot applications/)).toBeInTheDocument();
    expect(screen.getByText(/Design and implementation of distributed microservices/)).toBeInTheDocument();
  });

  it('renders service tags', () => {
    expect(screen.getAllByText('Java').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Docker').length).toBeGreaterThanOrEqual(1);
  });

  it('renders 6 service cards', () => {
    const cards = document.querySelectorAll('.services__card');
    expect(cards).toHaveLength(6);
  });

  it('has the correct section id', () => {
    expect(document.getElementById('services')).toBeInTheDocument();
  });
});
