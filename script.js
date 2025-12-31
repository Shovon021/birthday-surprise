/* ============================================
   Birthday Surprise - Pastel Dream Logic ☁️
   Soft Interactions & Physics
   ============================================ */

const PHOTO_CAPTIONS = [
    "ওই যে!ওইখানে তোমার শ্বশুর বাড়ি!!", "তোমার হাসিতেই সব খুশি 😊", "Ice-cream খাবোওওওওও😋", "সেই মজার মুহূর্তটা 🎈",
    "তুমি আমার স্পেশাল ফ্রেন্ড 💕", "প্রতিটা দিন তোমার সাথে রঙিন 🌈", "স্মৃতিগুলো সারাজীবন থাকুক 📸", "তুমি সেরা! 🌟",
    "কচি!! তাড়াতাড়ি বিয়ে করো🫢", "সবসময় পাশে থাকার জন্য ধন্যবাদ 💝", "আমাদের পাগলামিগুলো 😂", "ফুলের মতো সুন্দর তুমি 🌸",
    "স্মৃতিময় এক মুহূর্ত ✨", "অকারণে হাসি আর গল্প 🗣️", "বন্ধুত্ব বেঁচে থাকুক চিরকাল ♾️", "তুমি আমার অনুপ্রেরণা 💪",
    "সব স্বপ্ন সত্যি হোক তোমার 🌙", "সেই বিশেষ দিনটি 🎊", "তুমি মানেই অনেক খুশি 🥰", "স্মৃতিগুলো ভেসে আসুক 🌊",
    "অমূল্য সব টাইম কাটানো ⏳", "সেরা স্মৃতিগুলোর একটা 🏆", "তোমার জন্য অনেক শুভকামনা 🙏", "সব সময় হাসিখুশি থাকো 😁",
    "সৃতিময় সব বিকেলে তুমিই☘️", "বন্ধুত্বের মায়াবী বন্ধন 🕸️", "তুমি অনেক স্পেশাল 💎", "স্মৃতি হোক অম্লান 🕯️",
    "জন্মদিন হোক জমকালো 🎆", "সবশেষে, তুমি আমার প্রিয় বন্ধু! 💜"
];

document.addEventListener('DOMContentLoaded', () => {
    // FIRST: Check if countdown already ended - skip overlay!
    // const TARGET_DATE = new Date('December 31, 2025 14:03:00').getTime(); // TEST MODE
    const TARGET_DATE = new Date('January 1, 2026 00:00:00').getTime(); // REAL BIRTHDAY!
    const overlay = document.getElementById('start-overlay');
    const countdownEnded = Date.now() >= TARGET_DATE;

    if (countdownEnded && overlay) {
        // Countdown ended - remove blocking overlay
        overlay.remove();
        console.log("🎂 Countdown ended - direct entry mode!");

        // Show a small floating music button instead
        showMusicButton();
    }

    generatePhotos(30);
    initScrollAnimations();
    initPathDrawing(); // Restored
    initLushTrees();
    initSoftFloatingElements();
    initCountdown();
    initMusicControls();
    initPastelConfetti();
    initProgressBar();
    init3DTilt();
    initCursorTrail();
    initBackgroundSlideshow(); // New
    initFireflies(); // New
    initMagneticElements(); // New
    initParallax(); // New
});

// ============================================
// BACKGROUND SLIDESHOW
// ============================================
function initBackgroundSlideshow() {
    const container = document.getElementById('bg-slideshow');
    // Specific photos requested: 1, 21, 5, 6, 12, 16, 17, 26, 27, 28, 30
    const images = [1, 21, 5, 6, 12, 16, 17, 26, 27, 28, 30];
    let currentIndex = 0;

    // Preload functionality not strictly needed for bg images but good practice
    // Create DOM elements
    images.forEach((num, index) => {
        const div = document.createElement('div');
        div.className = 'bg-slide';
        div.style.backgroundImage = `url('photos/photo${num}.png')`;
        if (index === 0) div.classList.add('active');
        container.appendChild(div);
    });

    setInterval(() => {
        const slides = document.querySelectorAll('.bg-slide');
        slides[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');
    }, 5000); // Change every 5 seconds
}

// ============================================
// ADVANCED: GLOWING FIREFLIES
// ============================================
function initFireflies() {
    const container = document.body;
    const fireflyCount = 30;
    const fireflies = [];

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        // Store properties for animation loop
        const speed = Math.random() * 0.5 + 0.2;
        const angle = Math.random() * Math.PI * 2;

        fireflies.push({
            el: firefly,
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed
        });

        // Set initial position to 0, use transform for all movement
        firefly.style.left = '0px';
        firefly.style.top = '0px';
        firefly.style.animationDelay = `${Math.random() * 4}s`; // Blinking anim

        container.appendChild(firefly);
    }

    // Single Optimized Loop
    function animate() {
        fireflies.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce
            if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
            if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

            // Random subtle turn
            if (Math.random() < 0.02) {
                p.vx += (Math.random() - 0.5) * 0.1;
                p.vy += (Math.random() - 0.5) * 0.1;
            }

            p.el.style.transform = `translate(${p.x}px, ${p.y}px)`; // Use transform instead of left/top
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================
// ADVANCED: MAGNETIC BUTTONS & RIPPLE
// ============================================
function initMagneticElements() {
    const magnets = document.querySelectorAll('button, .photo-frame');

    magnets.forEach(el => {
        el.classList.add('magnetic');

        // Magnetic Pull
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Strength of pull
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        // Reset
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0px, 0px)';
        });

        // Liquid Ripple Effect
        el.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            const diameter = Math.max(el.clientWidth, el.clientHeight);
            const radius = diameter / 2;

            const rect = el.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');

            const ripple = el.getElementsByClassName('ripple')[0];
            if (ripple) {
                ripple.remove();
            }

            el.appendChild(circle);
        });
    });
}

// ============================================
// ADVANCED: PARALLAX SCROLL
// ============================================
function initParallax() {
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;

                // Trees move slightly slower than scroll (Midground)
                const trees = document.querySelectorAll('.tree-container');
                trees.forEach(tree => {
                    tree.style.transform = `translateY(${scrolled * 0.1}px)`;
                });

                // Background slideshow is position: fixed, so it stays valid. 
                // Removed translateY to prevent gaps at top/bottom.

                // Floating elements move up faster (Foreground feeling)
                const petals = document.getElementById('petals');
                if (petals) petals.style.transform = `translateY(-${scrolled * 0.2}px)`;

                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// DYNAMIC PHOTO GENERATION
// ============================================
function generatePhotos(count) {
    const journey = document.getElementById('journey');
    const styles = ['style-heart', 'style-polaroid', 'style-glow', 'style-flower', 'style-vintage', 'style-modern'];
    const isMobile = window.innerWidth < 600;

    for (let i = 1; i <= count; i++) {
        const item = document.createElement('div');
        const side = i % 2 === 0 ? 'right' : 'left';
        item.className = `photo-item ${side}`;

        const style = styles[Math.floor(Math.random() * styles.length)];
        const tilt = isMobile ? (Math.random() - 0.5) * 4 : (Math.random() - 0.5) * 10;
        const caption = PHOTO_CAPTIONS[i - 1] || "Sweet Memory ✨";

        item.innerHTML = `
            <div class="photo-frame ${style}" style="transform: rotate(${tilt}deg)" data-tilt-container>
                <img src="photos/photo${i}.png" alt="Memory ${i}" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><rect fill=%22%23F3E5F5%22 width=%22300%22 height=%22300%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2222%22 fill=%22%23BA68C8%22>📷 photo${i}.png</text></svg>'">
            </div>
            <div class="photo-caption">${caption}</div>
        `;

        journey.appendChild(item);
    }
}

// ============================================
// SOFT FLOATING ELEMENTS (Clouds & Bubbles)
// ============================================
// ============================================
// SOFT FLOATING ELEMENTS (Love & Balloons)
// ============================================
function initSoftFloatingElements() {
    const container = document.getElementById('petals');
    const items = ['💜', '🎈', '💖', '✨', '🎂', '🍬', '🎁'];
    const isMobile = window.innerWidth < 600;

    function spawn(initial = false) {
        const maxItems = isMobile ? 12 : 25;
        if (container.children.length > maxItems) return;

        const el = document.createElement('div');
        el.textContent = items[Math.floor(Math.random() * items.length)];

        const duration = isMobile ? 10 : 15;
        const initialY = initial ? Math.random() * 100 : -10;

        el.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${initialY}%;
            font-size: ${Math.random() * 15 + (isMobile ? 15 : 25)}px;
            opacity: ${Math.random() * 0.5 + 0.4};
            pointer-events: none;
            transition: transform ${duration}s linear;
            transform: translateY(0) rotate(${Math.random() * 360}deg);
            z-index: 5;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        `;

        container.appendChild(el);

        // Trigger movement
        setTimeout(() => {
            el.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        }, 50);

        setTimeout(() => el.remove(), duration * 1000);
    }

    setInterval(() => spawn(false), isMobile ? 1200 : 800);
    for (let i = 0; i < (isMobile ? 6 : 12); i++) spawn(true);
}

// ============================================
// CURSOR TRAIL (Soft Bubbles)
// ============================================
function initCursorTrail() {
    const canvas = document.getElementById('cursorTrail');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    let lastTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < 100) return; // Throttle: Only spawn every 100ms
        lastTime = now;

        // Spawn fewer particles for performance
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 6 + 3,
            color: `hsla(${Math.random() * 60 + 330}, 100%, 80%, 0.4)`,
            speedX: Math.random() * 1.5 - 0.75,
            speedY: Math.random() * 1.5 - 0.75,
            life: 1
        });
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.02;
            p.size *= 0.95;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================
// PASTEL CONFETTI
// ============================================
function initPastelConfetti() {
    window.triggerConfetti = () => {
        const canvas = document.getElementById('confetti');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#FFD1DC', '#CBF1F5', '#E3DFFD', '#FFFBF5', '#FFB7B2'];
        let pieces = [];

        for (let i = 0; i < 80; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: -20,
                size: Math.random() * 8 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedY: Math.random() * 4 + 2,
                speedX: Math.random() * 4 - 2,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 10 - 5
            });
        }

        let active = true;
        function loop() {
            if (!active) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let stillFalling = false;

            for (let i = 0; i < pieces.length; i++) {
                const p = pieces[i];
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotationSpeed;

                if (p.y < canvas.height) {
                    stillFalling = true;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation * Math.PI / 180);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                    ctx.restore();
                }
            }

            if (stillFalling) requestAnimationFrame(loop);
            else active = false;
        }
        loop();
    };

    // Initial burst & Less frequent auto-confetti for performance
    setTimeout(window.triggerConfetti, 1000);
    setInterval(window.triggerConfetti, 10000); // Every 10 seconds instead of 4.5
}

// ============================================
// 3D TILT EFFECT & OTHERS
// ============================================
function init3DTilt() {
    document.addEventListener('mousemove', (e) => {
        const containers = document.querySelectorAll('[data-tilt-container].visible');
        containers.forEach(frame => {
            const rect = frame.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((centerY - y) / 10).toFixed(2);
                const rotateY = ((x - centerX) / 10).toFixed(2);

                frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            }
        });
    });

    document.addEventListener('mouseout', () => {
        document.querySelectorAll('[data-tilt-container]').forEach(frame => {
            frame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.photo-item').forEach(item => observer.observe(item));
}

function initLushTrees() {
    const trees = document.querySelectorAll('.tree-container');
    trees.forEach(tree => {
        // Extended clusters to fill all areas including right side
        const centers = [
            { x: 30, y: 60, r: 55 },
            { x: 80, y: 120, r: 50 },
            { x: 140, y: 150, r: 55 },
            { x: 60, y: 200, r: 45 },
            { x: 160, y: 100, r: 40 },
            // New clusters for right side coverage
            { x: 180, y: 140, r: 50 },
            { x: 190, y: 170, r: 45 },
            { x: 170, y: 200, r: 40 },
            { x: 200, y: 130, r: 35 },
            { x: 195, y: 160, r: 40 }
        ];

        centers.forEach(center => {
            for (let i = 0; i < 20; i++) {
                const p = document.createElement('div');
                p.className = 'lush-particle';

                const rand = Math.random();
                if (rand < 0.25) {
                    p.classList.add('leaf');
                } else if (rand < 0.45) {
                    // Red flower particles
                    p.classList.add('bloom-anim');
                    p.classList.add('red-flower');
                } else {
                    p.classList.add('bloom-anim');
                }

                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * center.r;
                const left = center.x + Math.cos(angle) * dist;
                const top = center.y + Math.sin(angle) * dist;

                p.style.left = left + 'px';
                p.style.top = top + 'px';
                p.style.animationDelay = Math.random() * 3 + 's';

                tree.appendChild(p);
            }
        });
    });
}

function initPathDrawing() {
    const path = document.getElementById('pathLine');
    const journey = document.getElementById('journey');

    // Flower types with emojis for variety
    const flowers = ['🌸', '🌺', '🌼', '🌷', '💐', '🌹', '🏵️', '💮'];

    function clearFlowerDecorations() {
        document.querySelectorAll('.ribbon-flower').forEach(f => f.remove());
    }

    function addFlowerDecorations() {
        clearFlowerDecorations();

        try {
            const pathLength = path.getTotalLength();
            if (pathLength < 50) return;

            // Get photo frame positions to avoid placing flowers on them
            const photoFrames = document.querySelectorAll('.photo-frame');
            const photoCenters = [];
            const journeyRect = journey.getBoundingClientRect();

            photoFrames.forEach(frame => {
                const rect = frame.getBoundingClientRect();
                photoCenters.push({
                    x: rect.left + rect.width / 2 - journeyRect.left,
                    y: rect.top + rect.height / 2 - journeyRect.top,
                    radius: Math.max(rect.width, rect.height) / 2 + 30 // Avoid zone
                });
            });

            // Place fewer flowers for performance
            const flowerInterval = 120;
            const numFlowers = Math.floor(pathLength / flowerInterval);

            for (let i = 0; i <= numFlowers; i++) {
                const distance = i * flowerInterval;
                const point = path.getPointAtLength(distance);

                // Check if this point is too close to any photo
                let tooCloseToPhoto = false;
                for (const photo of photoCenters) {
                    const dx = point.x - photo.x;
                    const dy = point.y - photo.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < photo.radius) {
                        tooCloseToPhoto = true;
                        break;
                    }
                }

                if (tooCloseToPhoto) continue; // Skip flowers near photos

                const flower = document.createElement('div');
                flower.className = 'ribbon-flower';
                flower.textContent = flowers[i % flowers.length];
                flower.style.left = point.x + 'px';
                flower.style.top = point.y + 'px';
                flower.style.animationDelay = (i * 0.1) + 's';

                journey.appendChild(flower);
            }
        } catch (e) {
            // Path not ready yet
        }
    }

    function draw() {
        const items = document.querySelectorAll('.photo-item');
        if (items.length < 2) return;

        let d = "";

        // We need coordinates relative to the SVG/Journey container (0,0 at top-left of #journey)
        const journeyRect = journey.getBoundingClientRect();

        items.forEach((item, index) => {
            const frame = item.querySelector('.photo-frame');
            const frameRect = frame.getBoundingClientRect();
            const x = (frameRect.left + frameRect.width / 2) - journeyRect.left;
            const y = (frameRect.top + frameRect.height / 2) - journeyRect.top;

            if (index === 0) {
                d += `M ${x} ${y}`;
            } else {
                const prevFrame = items[index - 1].querySelector('.photo-frame');
                const prevRect = prevFrame.getBoundingClientRect();
                const prevX = (prevRect.left + prevRect.width / 2) - journeyRect.left;
                const prevY = (prevRect.top + prevRect.height / 2) - journeyRect.top;

                // EXAGGERATED CURVE: Move the control points further out to create a flow
                const curveIntensity = Math.abs(x - prevX) > 50 ? 0.8 : 1.2;
                const controlY1 = prevY + (y - prevY) * 0.25;
                const controlY2 = prevY + (y - prevY) * 0.75;

                // Add some horizontal offset to control points for straight-ish transitions
                const offsetX = (index % 2 === 0) ? -150 : 150;
                const cp1x = prevX + offsetX;
                const cp2x = x - offsetX;

                d += ` C ${cp1x} ${controlY1}, ${cp2x} ${controlY2}, ${x} ${y}`;
            }
        });

        path.setAttribute('d', d);

        // Update Sheen Path (offset version of the main ribbon)
        const sheenPath = document.getElementById('pathSheen');
        if (sheenPath) sheenPath.setAttribute('d', d);

        // Add flowers after path is drawn
        setTimeout(addFlowerDecorations, 100);
    }

    // Aggressive redrawing to catch all layout shifts
    window.addEventListener('resize', draw);
    setTimeout(draw, 500);
    setTimeout(draw, 2000); // Extra delay for flowers
}

// Global flag to track if surprise has been revealed
let surpriseRevealed = false;

function initCountdown() {
    // REAL BIRTHDAY: January 1, 2026 at midnight
    // const target = new Date('December 31, 2025 14:03:00').getTime(); // TEST MODE
    const target = new Date('January 1, 2026 00:00:00').getTime();

    // Check if countdown already ended
    const alreadyEnded = Date.now() >= target;

    // Only lock scrolling if countdown is still running
    if (!alreadyEnded) {
        lockScroll();
    } else {
        // Countdown ended - ensure scroll is unlocked and trigger surprise
        unlockScroll();
        if (!surpriseRevealed) {
            setTimeout(triggerSurpriseReveal, 500);
        }
    }

    function updateCountdown() {
        const now = Date.now();
        const dist = target - now;

        if (dist <= 0 && !surpriseRevealed) {
            // 🎉 COUNTDOWN COMPLETE - TRIGGER THE SURPRISE!
            triggerSurpriseReveal();
            return;
        }

        if (dist < 0) {
            // Already revealed, show celebration emojis
            document.getElementById('days').textContent = '🎉';
            document.getElementById('hours').textContent = '🎂';
            document.getElementById('minutes').textContent = '🎁';
            document.getElementById('seconds').textContent = '💜';
            return;
        }

        const days = Math.floor(dist / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dist % (1000 * 60)) / 1000);

        // Update with animation
        updateBox('days', days.toString().padStart(2, '0'));
        updateBox('hours', hours.toString().padStart(2, '0'));
        updateBox('minutes', minutes.toString().padStart(2, '0'));
        updateBox('seconds', seconds.toString().padStart(2, '0'));
    }

    function updateBox(id, value) {
        const el = document.getElementById(id);
        if (el && el.textContent !== value) {
            el.textContent = value;
            el.classList.add('countdown-flip');
            setTimeout(() => el.classList.remove('countdown-flip'), 300);
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Lock scrolling
function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
}

// Unlock scrolling
function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}

// Show floating music button (for after countdown ends)
function showMusicButton() {
    const bgMusic = document.getElementById('bgMusic');

    // Try to autoplay first (some browsers allow after user gesture on page)
    bgMusic.volume = 1;
    bgMusic.play().then(() => {
        console.log("🎵 Music autoplayed!");
    }).catch(() => {
        // Browser blocked autoplay - show a floating button
        const btn = document.createElement('button');
        btn.className = 'floating-music-btn';
        btn.innerHTML = '🎵';
        btn.title = 'মিউজিক চালাও';
        btn.onclick = () => {
            bgMusic.volume = 1;
            bgMusic.play();
            btn.remove();
            window.triggerConfetti();
        };
        document.body.appendChild(btn);
    });
}

// 🎉 THE BIG SURPRISE REVEAL!
function triggerSurpriseReveal() {
    surpriseRevealed = true;

    const bgMusic = document.getElementById('bgMusic');
    const heroContent = document.querySelector('.hero-content');

    // Update countdown to celebration emojis
    document.getElementById('days').textContent = '🎉';
    document.getElementById('hours').textContent = '🎂';
    document.getElementById('minutes').textContent = '🎁';
    document.getElementById('seconds').textContent = '💜';

    // 1. START MUSIC LOUDLY! 🎵
    bgMusic.volume = 1;
    bgMusic.play().then(() => {
        console.log("🎵 Surprise music started!");
    }).catch(e => console.error("Audio failed:", e));

    // 2. MASSIVE CONFETTI BURST! 🎊 (with safety check)
    if (typeof window.triggerConfetti === 'function') {
        window.triggerConfetti();
        setTimeout(() => window.triggerConfetti(), 500);
        setTimeout(() => window.triggerConfetti(), 1000);
        setTimeout(() => window.triggerConfetti(), 1500);
    }

    // 3. Add celebration animation to hero
    if (heroContent) {
        heroContent.style.animation = 'celebrationPulse 0.5s ease-in-out 3';
        heroContent.style.boxShadow = '0 0 60px rgba(255, 105, 180, 0.8)';
    }

    // 4. Show a "Happy Birthday!" flash message
    showSurpriseFlash();

    // 5. UNLOCK SCROLLING after a short celebration moment
    setTimeout(() => {
        unlockScroll();

        // Add a subtle hint to scroll
        const scrollHint = document.createElement('div');
        scrollHint.className = 'scroll-hint';
        scrollHint.innerHTML = '↓ স্ক্রল করে দেখো তোমার জন্য কী আছে ↓';
        document.querySelector('.hero').appendChild(scrollHint);

        // Remove hint after 5 seconds
        setTimeout(() => scrollHint.remove(), 8000);
    }, 3000);
}

// Flash celebration message
function showSurpriseFlash() {
    const flash = document.createElement('div');
    flash.className = 'surprise-flash';
    flash.innerHTML = `
        <div class="flash-content">
            <div class="flash-emoji">🎂🎉🎁</div>
            <div class="flash-text">হ্যাপি বার্থডে!</div>
            <div class="flash-name">ইকরা</div>
        </div>
    `;
    document.body.appendChild(flash);

    // Remove after animation
    setTimeout(() => flash.remove(), 4000);
}

function initMusicControls() {
    const bgMusic = document.getElementById('bgMusic');
    const celebMusic = document.getElementById('celebrationMusic');
    const startBtn = document.getElementById('start-btn');
    const overlay = document.getElementById('start-overlay');

    // Check if countdown already ended (visiting after birthday)
    // const target = new Date('December 31, 2025 14:03:00').getTime(); // TEST MODE
    const target = new Date('January 1, 2026 00:00:00').getTime(); // REAL BIRTHDAY!
    const countdownEnded = Date.now() >= target;

    if (countdownEnded && overlay) {
        // Skip overlay completely - direct entry!
        overlay.remove();

        // Trigger surprise after a short delay
        setTimeout(() => {
            if (!surpriseRevealed) {
                triggerSurpriseReveal();
            }
        }, 1000);
        return;
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // DON'T play music yet - wait for countdown!
            // Just prepare audio context by loading
            bgMusic.load();

            // Hide Overlay
            overlay.style.transition = "opacity 1s ease";
            overlay.style.opacity = "0";
            setTimeout(() => overlay.remove(), 1000);

            // Check if countdown already ended (page reload after midnight)
            if (Date.now() >= target && !surpriseRevealed) {
                setTimeout(triggerSurpriseReveal, 1500);
            }
        });
    }

    // Transition to celebration music near the end of page
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout || !surpriseRevealed) return;
        scrollTimeout = setTimeout(() => {
            const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            if (scrolled > 0.9 && celebMusic.paused) {
                fadeTo(celebMusic, bgMusic);
            }
            scrollTimeout = null;
        }, 100);
    });
}

function fadeTo(inAudio, outAudio) {
    inAudio.volume = 0;
    inAudio.play().catch(() => { });
    let vol = 0;
    const fade = setInterval(() => {
        vol += 0.05;
        if (vol >= 1) {
            vol = 1;
            clearInterval(fade);
            outAudio.pause();
        }
        inAudio.volume = vol;
        outAudio.volume = 1 - vol;
    }, 200);
}

function initProgressBar() {
    const bar = document.getElementById('progressFill');
    window.onscroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (bar) bar.style.width = scrolled + '%';
    };
}

// ============================================
// PREMIUM SURPRISE BOX: MEGA BOUQUET & MESSAGE
// ============================================
window.openGift = function () {
    const box = document.querySelector('.gift-box');
    const lid = document.querySelector('.gift-lid');
    const text = document.querySelector('.gift-text');
    const container = document.querySelector('.gift-container');

    if (!box || !lid || !text || !container) return;
    if (box.classList.contains('opened')) return; // Prevent double trigger
    box.classList.add('opened');
    box.style.pointerEvents = 'none';

    // 1. Lid Animation (Fly off higher and fade)
    lid.style.transition = 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s';
    lid.style.transform = 'translateY(-450px) rotate(-30deg) rotateX(70deg) scale(0.6)';
    lid.style.opacity = '0';

    // 3. MEGA BOUQUET GENERATION (Floating Emojis)
    const bloomContainer = document.createElement('div');
    bloomContainer.className = 'mega-bouquet-container';
    container.appendChild(bloomContainer);

    const flowers = ['🌸', '🌺', '🌼', '🌷', '💐', '🌹', '🏵️', '💮'];
    const flowerCount = 60;

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.className = 'mega-flower';

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 200 + 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.6) - 200;

        flower.style.setProperty('--x', `${x}px`);
        flower.style.setProperty('--y', `${y}px`);
        flower.style.fontSize = `${Math.random() * 2 + 2.5}rem`;
        flower.style.animationDelay = `${Math.random() * 0.8}s`;

        bloomContainer.appendChild(flower);
    }

    // 4. Update Message (Aligned below flowers with clean styles)
    text.innerHTML = `
        <div style="font-family:'Dancing Script', cursive; font-size: 3rem; margin-bottom: 15px; color: #ff00cc; text-shadow: 0 0 15px rgba(255, 0, 204, 0.6); font-weight: 700;">
            Happy Birthday <span style="font-size: 3.5rem; text-decoration: underline decoration-wavy #333399;">Ekraaaaaaaaaa!!!</span>
        </div>
        <div style="font-size: 1.5rem; color: #6a1b9a; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">🌸 তোমার জীবন ফুলের মতো সুন্দর হোক 🌸</div>
    `;
    text.classList.add('final-active');

    // 5. Massive Confetti Shower (with safety check)
    if (typeof window.triggerConfetti === 'function') {
        window.triggerConfetti();
        setTimeout(() => window.triggerConfetti(), 600);
        setTimeout(() => window.triggerConfetti(), 1200);
    }

    // 6. Smooth Focus & Reveal Message
    setTimeout(() => {
        // Reveal the final footer message
        const finalWish = document.getElementById('finalWish');
        if (finalWish) {
            finalWish.classList.add('visible');
            finalWish.style.opacity = '1';
            finalWish.style.pointerEvents = 'auto';
            console.log("✅ Final letter revealed!");

            // Scroll to the letter after gift text
            setTimeout(() => {
                finalWish.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
        }
    }, 2500);
};
