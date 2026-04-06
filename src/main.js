import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAR_DATA = {
    'mercedes-gt': {
        title: 'Silver Star GT',
        badge: 'Mercedes-Benz AMG',
        price: '$175,000',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
        desc: 'The pinnacle of German engineering. A symphony of raw power and sophisticated luxury, the AMG GT defines the modern grand tourer.',
        spec1: '577 HP',
        spec2: '3.1s'
    },
    'bmw-m8': {
        title: 'Bavarian Beast',
        badge: 'BMW M Division',
        price: '$162,000',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
        desc: 'An uncompromising pursuit of performance. The M8 Competition is where precision meets power in a breathtaking package.',
        spec1: '617 HP',
        spec2: '3.0s'
    },
    'apex-predator': {
        title: 'Apex Predator',
        badge: 'V-Series Limited',
        price: '$245,000',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
        desc: 'A track-focused weapon for the road. The Apex Predator uses obsessive weight-saving and advanced aero to dominate every corner.',
        spec1: '720 HP',
        spec2: '2.8s'
    },
    'midnight-gt': {
        title: 'Midnight GT',
        badge: 'GT-Spec Electric',
        price: '$189,000',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
        desc: 'The future of performance is silent and violent. Instant torque and low center of gravity make the Midnight GT a street legal phantom.',
        spec1: '550 HP',
        spec2: '3.4s'
    },
    'silver-arrow': {
        title: 'Silver Arrow',
        badge: '2025 Prototype',
        price: '$310,000',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
        desc: 'A glimpse into the next decade. The Silver Arrow hybrid V12 combines heritage sound with futuristic electrical assistance.',
        spec1: '810 HP',
        spec2: '2.2s'
    },
    'rosso-corsa': {
        title: 'Rosso Corsa',
        badge: 'Aero-X Performance',
        price: '$295,000',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
        desc: 'Italian passion refined. The Aero-X brings Formula engineering to the street with active aero and a screaming high-revving V8.',
        spec1: '690 HP',
        spec2: '2.9s'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial Hero Animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    if (document.querySelector('.reveal-text')) {
        tl.fromTo('.reveal-text', 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        )
        .fromTo('.reveal-subtext', 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2 }, 
            '-=1'
        )
        .fromTo('.reveal-btns', 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1 }, 
            '-=0.8'
        );
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'bg-showroom-950/95');
            nav.classList.remove('py-4', 'bg-showroom-950/80');
        } else {
            nav.classList.remove('py-2', 'bg-showroom-950/95');
            nav.classList.add('py-4', 'bg-showroom-950/80');
        }
    });

    // Modal Logic
    const modal = document.getElementById('car-modal');
    const closeModal = document.getElementById('close-modal');

    function openCarModal(carId) {
        const data = CAR_DATA[carId];
        if (!data) return;

        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-badge').innerText = data.badge;
        document.getElementById('modal-price').innerText = data.price;
        document.getElementById('modal-description').innerText = data.desc;
        document.getElementById('modal-spec1-val').innerText = data.spec1;
        document.getElementById('modal-spec2-val').innerText = data.spec2;

        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.querySelector('.relative').classList.remove('scale-95');
        modal.querySelector('.relative').classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function closeCarModal() {
        modal.classList.add('pointer-events-none', 'opacity-0');
        modal.querySelector('.relative').classList.add('scale-95');
        modal.querySelector('.relative').classList.remove('scale-100');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = btn.getAttribute('data-car') || btn.closest('.vehicle-card')?.getAttribute('data-car');
            if (carId) openCarModal(carId);
        });
    });

    if (closeModal) closeModal.addEventListener('click', closeCarModal);
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCarModal();
    });

    // Inventory Filtering Logic
    const catBtns = document.querySelectorAll('.cat-btn');
    const carCards = document.querySelectorAll('.car-card');

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-category');
            
            // Toggle active state
            catBtns.forEach(b => {
                b.classList.remove('bg-white', 'text-black', 'active-cat');
                b.classList.add('border', 'border-white/10', 'text-chrome-bright');
            });
            btn.classList.add('bg-white', 'text-black', 'active-cat');
            btn.classList.remove('border', 'border-white/10');

            // Filter cards
            carCards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, display: 'block' });
                } else {
                    gsap.to(card, { opacity: 0, scale: 0.95, duration: 0.4, display: 'none' });
                }
            });
        });
    });

    // Booking Form Simulation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingForm.classList.add('opacity-50', 'pointer-events-none');
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            submitBtn.innerText = "Processing...";
            
            setTimeout(() => {
                bookingForm.classList.add('hidden');
                document.getElementById('form-success').classList.remove('hidden');
            }, 1500);
        });
    }

    // Scroll Animations
    gsap.utils.toArray('.vehicle-card, .car-card').forEach((card) => {
        gsap.fromTo(card, 
            { y: 50, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=50',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
});
