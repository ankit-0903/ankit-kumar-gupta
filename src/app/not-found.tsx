import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-md w-full border border-border bg-surface/30 p-8 rounded-xl backdrop-blur-sm shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent/50 animate-pulse"></div>
        
        <h1 className="text-6xl font-bold text-accent mb-4 animate-bounce">404</h1>
        <div className="space-y-4 text-muted-foreground">
          <p className="text-secondary tracking-tighter">ERROR_CODE: PAGE_NOT_FOUND</p>
          <div className="h-[1px] bg-border w-full my-4"></div>
          <p className="text-sm border-l-2 border-accent pl-4 py-1 italic bg-accent/5">
            {`// The module you are looking for has been moved or deleted.`}
          </p>
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-block text-accent border border-accent rounded px-6 py-3 transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-accent)]"
            >
              cd /home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
