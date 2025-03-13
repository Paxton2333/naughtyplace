document.addEventListener('DOMContentLoaded', () => {
    const firstContainer = document.querySelector('.first-container');
    const secondContainer = document.querySelector('.second-container');
    const rr34Container = document.querySelector('.rr34-container');
    const naughtyButton = document.querySelector('.naughty-button');
    const rbxlButton = document.querySelector('.rbxl-button');
    const way3dButton = document.querySelector('.way-3d-button');
    const way2dButton = document.querySelector('.way-2d-button');
    const wipButton = document.querySelector('.wip-button');
    const downloadRR34Button = document.querySelector('.download-rr34-button');
    const goBackRR34Button = document.querySelector('.go-back-rr34-button');

    firstContainer.addEventListener('mouseover', () => {
        firstContainer.style.transform = 'scale(1.05)';
        firstContainer.style.transition = 'transform 0.3s ease';
    });

    firstContainer.addEventListener('mouseout', () => {
        firstContainer.style.transform = 'scale(1)';
    });

    naughtyButton.addEventListener('click', () => {
        // Fade out first container
        firstContainer.style.transition = 'opacity 0.5s ease';
        firstContainer.style.opacity = '0';
        
        setTimeout(() => {
            firstContainer.style.display = 'none';
            
            // Fade in second container
            secondContainer.style.transition = 'opacity 0.5s ease';
            secondContainer.style.opacity = '1';
        }, 500);
    });

    rbxlButton.addEventListener('click', () => {
        // Fade out second container
        secondContainer.style.transition = 'opacity 0.5s ease';
        secondContainer.style.opacity = '0';
        
        setTimeout(() => {
            secondContainer.style.display = 'none';
            
            // Fade in RR34 container
            rr34Container.style.display = 'block';
            rr34Container.style.transition = 'opacity 0.5s ease';
            rr34Container.style.opacity = '1';
        }, 500);
    });

    way3dButton.addEventListener('click', () => {
        console.log('Navigating to 3D');
    });

    way2dButton.addEventListener('click', () => {
        console.log('Navigating to 2D');
    });

    wipButton.addEventListener('click', () => {
        console.log('WIP section');
    });

    downloadRR34Button.addEventListener('click', () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = 'rr34.zip'; // Ensure this file exists in your project directory
        link.download = 'rr34.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    goBackRR34Button.addEventListener('click', () => {
        // Fade out RR34 container
        rr34Container.style.transition = 'opacity 0.5s ease';
        rr34Container.style.opacity = '0';
        
        setTimeout(() => {
            rr34Container.style.display = 'none';
            
            // Fade in second container
            secondContainer.style.display = 'block';
            secondContainer.style.transition = 'opacity 0.5s ease';
            secondContainer.style.opacity = '1';
        }, 500);
    });
});