import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Projects from '../Projects';

describe('Projects', () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    expect(screen.getByText('Spring Boot + React CRUD')).toBeInTheDocument();
    expect(screen.getByText('Microservices with Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('GraphQL Java API')).toBeInTheDocument();
    expect(screen.getByText('Business Software Solutions')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    expect(screen.getByText(/seamless integration between a Spring Boot REST API/)).toBeInTheDocument();
    expect(screen.getByText(/Advanced microservices architecture implementation/)).toBeInTheDocument();
  });

  it('renders project tags', () => {
    expect(screen.getAllByText('Spring Boot').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Java').length).toBeGreaterThanOrEqual(1);
  });

  it('renders View Project links', () => {
    const viewBtns = screen.getAllByText('View Project');
    expect(viewBtns).toHaveLength(4);
  });

  it('renders GitHub CTA link', () => {
    expect(screen.getByText('See more on GitHub')).toBeInTheDocument();
  });

  it('does not render demo link for projects with # as demo URL', () => {
    const demoLinks = screen.getAllByLabelText('Live demo');
    expect(demoLinks).toHaveLength(3);
  });

  it('has the correct section id', () => {
    expect(document.getElementById('projects')).toBeInTheDocument();
  });
});
