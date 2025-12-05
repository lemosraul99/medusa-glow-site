// Cargar AdSense después de que la página esté lista
document.addEventListener('DOMContentLoaded', function() {
    // Solo cargar si hay marcadores de anuncios
    if (document.querySelector('.ad-unit')) {
        const adsenseScript = document.createElement('script');
        adsenseScript.async = true;
        adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6513938846287010';
        adsenseScript.crossOrigin = 'anonymous';
        document.head.appendChild(adsenseScript);
        
        // Inicializar anuncios después de cargar
        adsenseScript.onload = function() {
            if (window.adsbygoogle) {
                // Inicializar todos los anuncios
                (adsbygoogle = window.adsbygoogle || []).push({});
                
                // También inicializar anuncios en contenedores específicos
                document.querySelectorAll('.ad-unit').forEach(function(unit) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            }
        };
    }
});
