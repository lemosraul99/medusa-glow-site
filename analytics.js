// Google Analytics GA4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Reemplaza con tu ID real

// Schema Markup para SEO
function addSchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Medusa Glow",
        "description": "Herramientas de productividad y software para freelancers",
        "url": "https://www.medusa-glow.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.medusa-glow.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSchemaMarkup);
} else {
    addSchemaMarkup();
}
