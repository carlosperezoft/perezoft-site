import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import About from '../About';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the section label', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    expect(screen.getByText('that matters')).toBeInTheDocument();
  });

  it('renders all highlight cards', () => {
    const labels = ['Technical Leader', 'Software Architect', 'Team Builder', 'Clean Code'];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders highlight descriptions', () => {
    expect(screen.getByText('Leading engineering teams to deliver business-critical systems')).toBeInTheDocument();
    expect(screen.getByText('Designing scalable enterprise-grade architectures')).toBeInTheDocument();
  });

  it('renders bio text with name', () => {
    expect(screen.getByText(/Carlos Alberto Perez Moncada/)).toBeInTheDocument();
  });

  it('renders stats section', () => {
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('11+')).toBeInTheDocument();
    expect(screen.getByText('Career Roles')).toBeInTheDocument();
    expect(screen.getByText('MSc')).toBeInTheDocument();
    expect(screen.getByText('Engineering Degree')).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });
});
