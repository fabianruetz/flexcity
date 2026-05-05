/* ════════════════════════════════════════════════════════
   FLEXCITY — Main Script
   ════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Nav: Scroll-Klasse & Burger ─────────────────── */
    const nav    = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const links  = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    }, { passive: true });

    burger.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    /* ── Scroll-Reveal ───────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── Lightbox ────────────────────────────────────── */
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    document.querySelectorAll('.galerie__item img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src, img.alt);
        });
    });

    lightbox.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });

    /* ── Active Nav-Link beim Scrollen ───────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav__links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.getAttribute('id');
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => sectionObserver.observe(s));

})();
