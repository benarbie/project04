document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        
        const angle = Math.atan2(deltaY, deltaX);
        
        const maxOffset = 9; // maximum offset for pupil within the eye
        const pupilX = maxOffset * Math.cos(angle);
        const pupilY = maxOffset * Math.sin(angle);
        
        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});

