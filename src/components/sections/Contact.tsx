'use client';
import { useState } from 'react';

import { usePortfolioData } from '@/hooks/usePortfolioData';
import { RevealWrapper } from "../layout/RevealWrapper";

export function Contact() {
  const { titles } = usePortfolioData();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-5xl mx-auto">
      <RevealWrapper>
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-[16px] mb-4">06. What&apos;s Next?</p>
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{titles.contact} 🤝</h2>
        </div>
      </RevealWrapper>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
        {/* Left Side - Text & Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-justify">
          <RevealWrapper>
            <p className="text-muted-foreground text-[18px] leading-relaxed mb-10">
              I&apos;m actively looking for new opportunities, and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <a
              href="mailto:ankit.kumar121897@gmail.com"
              className="inline-block text-accent bg-transparent border border-accent rounded px-8 py-4 font-mono text-sm leading-none transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-accent)]"
            >
              Say Hello!
            </a>
          </RevealWrapper>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <RevealWrapper>
            <form
              className="flex flex-col gap-4 bg-surface/30 backdrop-blur-sm border border-border/80 rounded-2xl pt-5 pb-3 px-5 md:pt-6 md:pb-4 md:px-6 shadow-sm"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Send me a message</h3>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  disabled={status === 'submitting'}
                  className="bg-background/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent/60 transition-colors w-full text-sm disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  disabled={status === 'submitting'}
                  className="bg-background/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent/60 transition-colors w-full text-sm disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  aria-required="true"
                  disabled={status === 'submitting'}
                  className="bg-background/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent/60 transition-colors w-full resize-none text-sm disabled:opacity-50"
                  placeholder="Hello Ankit, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full text-accent bg-transparent border border-accent rounded py-3 font-mono text-sm transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-accent)] mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  "Message Sent! ✨"
                ) : status === 'error' ? (
                  "Failed to Send (Try again)"
                ) : (
                  "Send Message"
                )}
              </button>
              
              <div aria-live="polite" className={status === 'success' || status === 'error' ? "mt-2" : ""}>
                {status === 'success' && (
                  <p className="text-green-400 text-xs font-mono text-center animate-fade-in">
                    Thanks! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-xs font-mono text-center animate-fade-in">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
