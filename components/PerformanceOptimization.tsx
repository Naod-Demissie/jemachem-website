export default function PerformanceOptimization() {
  return (
    <>
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        href="/jemachem-company-logo.webp" 
        as="image" 
        type="image/webp"
      />
      
      {/* Preload hero background image */}
      <link 
        rel="preload" 
        href="/hero-bg.webp" 
        as="image" 
        type="image/webp"
      />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for performance */}
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/products" />
      <link rel="prefetch" href="/contact" />
      
      {/* Critical CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          .font-sans { font-family: 'Poppins', sans-serif; }
          .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
          .bg-black { background-color: #000; }
          .text-white { color: #fff; }
          .container { width: 100%; margin-left: auto; margin-right: auto; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        `
      }} />
    </>
  );
}
