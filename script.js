// Enhanced mobile input handling

// Improved touch detection
let touchStartX, touchStartY;
const touchThreshold = 50;

function handleTouchStart(event) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}

function handleTouchMove(event) {
    const touch = event.touches[0];
    const moveX = touch.clientX - touchStartX;
    const moveY = touch.clientY - touchStartY;

    if (Math.abs(moveX) > touchThreshold) {
        if (moveX > 0) {
            // Swipe right
            console.log('Swipe right');
        } else {
            // Swipe left
            console.log('Swipe left');
        }
    }
}

// Responsive game scaling for portrait orientation and various device sizes
function adjustGameSize() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio < 1) {
        // Portrait mode
        // Scale and adjust game elements accordingly
    } else {
        // Landscape mode
        // Scale and adjust game elements accordingly
    }
}

window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('touchmove', handleTouchMove);
window.addEventListener('resize', adjustGameSize);
adjustGameSize(); // Initial call to set the size on load
