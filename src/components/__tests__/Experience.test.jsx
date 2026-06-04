import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Experience from '../Experience';

describe('Experience', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders all job roles', () => {
    expect(screen.getByText('Technical Leader')).toBeInTheDocument();
    expect(screen.getByText('Software Developer & Founder')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    expect(screen.getByText('LPG Group')).toBeInTheDocument();
    expect(screen.getByText('PEREZOFT / Efecto Byte S.A.S.')).toBeInTheDocument();
    expect(screen.getByText('Previous Roles (11+ positions)')).toBeInTheDocument();
  });

  it('renders periods', () => {
    expect(screen.getByText('2022 – Present')).toBeInTheDocument();
    expect(screen.getByText('2018 – Present')).toBeInTheDocument();
    expect(screen.getByText('~2012 – 2022')).toBeInTheDocument();
  });

  it('renders Current badge for active positions', () => {
    const currentBadges = screen.getAllByText('Current');
    expect(currentBadges).toHaveLength(2);
  });

  it('renders education section', () => {
    expect(screen.getByText('Academic Background')).toBeInTheDocument();
    expect(screen.getByText('Master in Engineering (Informatics)')).toBeInTheDocument();
    expect(screen.getByText('Specialist in Software Development')).toBeInTheDocument();
    expect(screen.getByText('Systems Engineer')).toBeInTheDocument();
  });

  it('renders education institutions', () => {
    const udeaElements = screen.getAllByText('Universidad de Antioquia');
    expect(udeaElements).toHaveLength(2);
    expect(screen.getByText('Universidad EAFIT')).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    expect(document.getElementById('experience')).toBeInTheDocument();
  });
});
