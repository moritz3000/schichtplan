// Simple Notification-Funktion
export function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = 'notification';
  if (type === 'error') {
    // Du könntest hier z.B. anderen Hintergrund definieren
    notification.style.background = '#ef4444'; 
  }
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registriert:', registration);
      })
      .catch(error => {
        console.log('SW-Registrierung fehlgeschlagen:', error);
      });
  });
}

// Verhindert Zoom (Optional, je nach UX-Bedarf)
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('touchmove', e => {
  if(e.scale !== 1) e.preventDefault();
}, { passive: false });
