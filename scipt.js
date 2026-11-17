document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa Móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Carrito de Compras Dinámico (Contador interactivo)
    const addToCartBtn = document.getElementById('add-to-cart-hero');
    const cartCountSpan = document.getElementById('cart-count');
    let cartItems = 0;

    if (addToCartBtn && cartCountSpan) {
        addToCartBtn.addEventListener('click', () => {
            cartItems++;
            cartCountSpan.textContent = cartItems;
            
            // Efecto visual sutil de confirmación
            addToCartBtn.textContent = "✨ ¡Añadido a la Bolsa!";
            addToCartBtn.classList.add('bg-stone-900');
            
            setTimeout(() => {
                addToCartBtn.textContent = "Añadir Colección Niñas (0-12)";
                addToCartBtn.classList.remove('bg-stone-900');
            }, 2000);
        });
    }

    // 3. Modal Informativo Dinámico (Guías, Cuidados, Certificados, Regalos)
    const infoModal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeModalBtn = document.getElementById('close-modal');
    const modalButtons = document.querySelectorAll('.info-modal-btn');

    modalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const title = btn.getAttribute('data-title');
            const content = btn.getAttribute('data-content');

            modalTitle.textContent = title;
            modalText.textContent = content;
            infoModal.classList.remove('hidden');
        });
    });

    if (closeModalBtn && infoModal) {
        closeModalBtn.addEventListener('click', () => {
            infoModal.classList.add('hidden');
        });

        // Cerrar modal haciendo clic fuera de la caja
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.classList.add('hidden');
            }
        });
    }

    // 4. Validación básica del Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte a Aura de Oro! Tu código de 10% de descuento ha sido enviado.');
            newsletterForm.reset();
        });
    }
});