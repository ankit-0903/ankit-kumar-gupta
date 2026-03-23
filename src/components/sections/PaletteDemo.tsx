import React from 'react';

export function PaletteDemo() {
  const palettes = [
    // --- DARK MODE OPTIONS ---
    {
      name: "Option A: Modern Zinc (Dark)",
      colors: {
        bg: '#09090b', surface1: '#18181b', surface2: '#27272a',
        text1: '#fafafa', text2: '#a1a1aa', text3: '#d4d4d8', accent: '#818cf8',
      }
    },
    {
      name: "Option B: Midnight & Mint (Dark)",
      colors: {
        bg: '#0a192f', surface1: '#112240', surface2: '#233554',
        text1: '#f8fafc', text2: '#ccd6f6', text3: '#8892b0', accent: '#4ade80',
      }
    },
    {
      name: "Option C: Charcoal & Amber (Dark)",
      colors: {
        bg: '#1c1917', surface1: '#292524', surface2: '#44403c',
        text1: '#fafaf9', text2: '#a8a29e', text3: '#d6d3d1', accent: '#fbbf24',
      }
    },
    {
      name: "Option D: Ocean & Azure (Dark)",
      colors: {
        bg: '#020617', surface1: '#0ea5e920', surface2: '#1e293b',
        text1: '#f0f9ff', text2: '#94a3b8', text3: '#bae6fd', accent: '#38bdf8',
      }
    },
    {
      name: "Option E: Espresso & Sage (Dark)",
      colors: {
        bg: '#1c1917', surface1: '#4d7c0f20', surface2: '#44403c',
        text1: '#fafaf9', text2: '#a8a29e', text3: '#d9f99d', accent: '#a3e635',
      }
    },
    {
      name: "Option F: Graphite & Crimson (Dark)",
      colors: {
        bg: '#000000', surface1: '#e11d4820', surface2: '#27272a',
        text1: '#ffffff', text2: '#a1a1aa', text3: '#fecdd3', accent: '#f43f5e',
      }
    },

    // --- LIGHT MODE OPTIONS ---
    {
      name: "Option A: Modern Zinc (Light)",
      colors: {
        bg: '#ffffff', surface1: '#f4f4f5', surface2: '#e4e4e7',
        text1: '#18181b', text2: '#52525b', text3: '#3f3f46', accent: '#4f46e5',
      }
    },
    {
      name: "Option B: Midnight & Mint (Light)",
      colors: {
        bg: '#f4fcf8', surface1: '#ffffff', surface2: '#d1e6dd',
        text1: '#0f172a', text2: '#334155', text3: '#475569', accent: '#10b981',
      }
    },
    {
      name: "Option C: Charcoal & Amber (Light)",
      colors: {
        bg: '#fbfbf9', surface1: '#f0ece1', surface2: '#e7e5e4',
        text1: '#1c1917', text2: '#57534e', text3: '#44403c', accent: '#d97706',
      }
    },
    {
      name: "Option D: Ocean & Azure (Light)",
      colors: {
        bg: '#f0f9ff', surface1: '#e0f2fe', surface2: '#bae6fd',
        text1: '#0f172a', text2: '#475569', text3: '#334155', accent: '#0284c7',
      }
    },
    {
      name: "Option E: Espresso & Sage (Light)",
      colors: {
        bg: '#fafaf9', surface1: '#f5f5f4', surface2: '#e7e5e4',
        text1: '#292524', text2: '#57534e', text3: '#44403c', accent: '#4d7c0f',
      }
    },
    {
      name: "Option F: Graphite & Crimson (Light)",
      colors: {
        bg: '#ffffff', surface1: '#fff1f2', surface2: '#fecdd3',
        text1: '#09090b', text2: '#52525b', text3: '#3f3f46', accent: '#e11d48',
      }
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Color Palette Previews</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here is a temporary demo to help you visualize what the fully populated site will look like across varying light and dark themes. Once you choose one, we will permanently bake it into the system!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {palettes.map((p, i) => (
          <div 
            key={i} 
            style={{ backgroundColor: p.colors.bg, borderColor: p.colors.surface2 }} 
            className="rounded-xl overflow-hidden border shadow-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl"
          >
            {/* Header */}
            <div style={{ backgroundColor: p.colors.surface1, borderBottomColor: p.colors.surface2 }} className="px-6 py-4 border-b">
              <h3 style={{ color: p.colors.text1 }} className="font-bold">{p.name}</h3>
            </div>
            
            {/* Body */}
            <div className="p-8 flex flex-col space-y-6 flex-1">
              
              {/* Dummy Hero */}
              <div>
                <p style={{ color: p.colors.accent }} className="font-mono text-sm mb-2">Hi, my name is</p>
                <h4 style={{ color: p.colors.text1 }} className="text-3xl font-bold mb-2">SalesSphere.</h4>
                <p style={{ color: p.colors.text2 }} className="text-sm leading-relaxed mb-4">I&apos;m a modern enterprise application specializing in building exceptional digital experiences.</p>
                <button style={{ color: p.colors.accent, borderColor: p.colors.accent }} className="bg-transparent border px-5 py-2.5 rounded text-xs font-mono hover:opacity-75 transition-colors">
                  View Demo!
                </button>
              </div>

              {/* Dummy Card */}
              <div style={{ backgroundColor: p.colors.surface1, borderColor: p.colors.surface2 }} className="mt-auto p-6 rounded relative border shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <div style={{ color: p.colors.accent }}>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                </div>
                <h5 style={{ color: p.colors.text1 }} className="font-bold text-lg mb-2">Sample Component</h5>
                <p style={{ color: p.colors.text2 }} className="text-xs leading-relaxed">This card demonstrates how the UI text, borders, and surfaces contrast with each other in this specific palette.</p>
                <div style={{ color: p.colors.text3 }} className="flex gap-3 font-mono text-[11px] mt-4">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
