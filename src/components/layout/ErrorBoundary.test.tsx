import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

// A component that throws an error for testing purposes
const ThrowError = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child Content</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Child Content')).toBeDefined();
  });

  it('should render the crash UI when a child throws', () => {
    // Suppress console.error for this test to keep logs clean
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('FAIR_SYSTEM_CRASH')).toBeDefined();
    expect(screen.getByText(/An unexpected exception occurred/)).toBeDefined();
    expect(screen.getByText('/restart_system')).toBeDefined();
    
    consoleSpy.mockRestore();
  });
});
