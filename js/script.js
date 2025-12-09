// Navegação entre páginas com JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Verifica se é um link interno (não começa com http)
            if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#')) {
                e.preventDefault();

                // Adiciona animação de fade out
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s';

                // Navega após a animação
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // Fade in ao carregar a página
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s';
    }, 100);
});

console.log('Portfolio carregado!');
