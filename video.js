document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.video-modal');
    const videoElement = modal.querySelector('video');
    const closeBtn = modal.querySelector('.close-btn');

    // Handle video thumb clicks
    document.querySelectorAll('.video-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const videoSrc = thumb.dataset.src;
            videoElement.querySelector('source').src = videoSrc;
            videoElement.load();
            modal.classList.remove('hidden');
            videoElement.play();
        });
    });

    // Close modal interactions
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        videoElement.pause();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            videoElement.pause();
        }
    });
});