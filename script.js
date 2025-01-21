document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    const locationsList = document.getElementById('locations-list');
    const locationInfo = document.getElementById('location-info');
    const locationName = document.getElementById('location-name');
    const locationDepartment = document.getElementById('location-department');
    const locationAddress = document.getElementById('location-address');
    const locationPhone = document.getElementById('location-phone');
    const locationHours = document.getElementById('location-hours');
    const routeBtn = document.getElementById('route-btn');

    const locations = [
        { name: 'Library', department: 'Academic', address: 'Building 1', phone: '123-456-7890', hours: '9 AM - 5 PM' },
        { name: 'Student Center', department: 'Facilities', address: 'Building 2', phone: '987-654-3210', hours: '8 AM - 10 PM' },
        { name: 'Administration Office', department: 'Administration', address: 'Building 3', phone: '555-555-5555', hours: '8 AM - 6 PM' }
    ];

    languageSelect.addEventListener('change', function() {
        alert('Language changed to ' + languageSelect.value);
    });

    searchBtn.addEventListener('click', function() {
        searchResults.classList.toggle('hidden');
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        locationsList.innerHTML = '';
        locations.filter(location => location.name.toLowerCase().includes(query)).forEach(location => {
            const li = document.createElement('li');
            li.textContent = location.name;
            li.addEventListener('click', function() {
                showLocationInfo(location);
            });
            locationsList.appendChild(li);
        });
    });

    function showLocationInfo(location) {
        locationName.textContent = location.name;
        locationDepartment.textContent = location.department;
        locationAddress.textContent = location.address;
        locationPhone.textContent = location.phone;
        locationHours.textContent = location.hours;
        locationInfo.classList.remove('hidden');
    }

    routeBtn.addEventListener('click', function() {
        alert('Route to ' + locationName.textContent + ' is being generated...');
        // Here you would add logic to draw the route on the map
    });
});
