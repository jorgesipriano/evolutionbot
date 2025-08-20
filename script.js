document.addEventListener('DOMContentLoaded', () => {

    // PARTE 1: Script de animação de rolagem e entrada de seções
    
    // Animação de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]:not(#open-popup-btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animação de entrada para seções da página
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Ativa a animação com 15% da seção visível
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // PARTE 2: Script do Popup do WhatsApp
    
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const whatsappPopup = document.getElementById('whatsapp-popup');

    if (openPopupBtn && closePopupBtn && whatsappPopup) {
        // Abre o popup quando o botão do header é clicado
        openPopupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            whatsappPopup.classList.add('active');
        });

        // Fecha o popup quando o botão 'X' é clicado
        closePopupBtn.addEventListener('click', function() {
            whatsappPopup.classList.remove('active');
        });

        // Fecha o popup quando se clica fora da caixa de conteúdo
        whatsappPopup.addEventListener('click', function(event) {
            if (event.target === whatsappPopup) {
                whatsappPopup.classList.remove('active');
            }
        });
    }
});
