'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center font-mono">
          <div className="max-w-xl border border-red-500/30 bg-red-500/5 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-red-500 mb-4 tracking-tighter">FAIR_SYSTEM_CRASH</h2>
            <div className="h-[1px] bg-red-500/20 w-full my-4"></div>
            <p className="text-muted-foreground text-sm mb-6">
              An unexpected exception occurred in the terminal. The session has been terminated to prevent further data corruption.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-red-500 border border-red-500/50 rounded px-6 py-2 transition-all hover:bg-red-500/10"
            >
              /restart_system
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
