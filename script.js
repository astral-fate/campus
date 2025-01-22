document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const languageToggle = document.getElementById('language-toggle');
  const languageSelector = document.getElementById('language-selector');
  const closeInfo = document.getElementById('close-info');
  const locationInfo = document.getElementById('location-info');
  const getDirections = document.getElementById('get-directions');
  const currentLocation = document.getElementById('current-location');

  // Toggle sidebar
  sidebarToggle.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
  });

  // Toggle language selector
  languageToggle.addEventListener('click', () => {
    languageSelector.style.display = languageSelector.style.display === 'block' ? 'none' : 'block';
  });

  // Close location info
  closeInfo.addEventListener('click', () => {
    locationInfo.style.display = 'none';
  });

  // Get directions
  getDirections.addEventListener('click', () => {
    alert('Directions functionality not implemented yet.');
  });

  // Mock current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation.textContent = `Current Location: ${position.coords.longitude.toFixed(4)}, ${position.coords.latitude.toFixed(4)}`;
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }

  // Mock location selection
  document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
      locationInfo.style.display = 'block';
    });
  });
});
