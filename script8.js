document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("agreeCheckbox");
    const button = document.getElementById("submitButton");
    const locationStatus = document.getElementById("locationStatus");
  
    // Enable or disable the button based on checkbox
    checkbox.addEventListener("change", () => {
      button.disabled = !checkbox.checked;
      if (checkbox.checked) {
        locationStatus.textContent = "Waiting for location permission...";
        getLocation();
      } else {
        locationStatus.textContent = "";
      }
    });
  
    // Geolocation function
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            locationStatus.textContent = Location: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude};
          },
          (error) => {
            locationStatus.textContent = "Unable to retrieve location. Please check your permissions.";
          }
        );
      } else {
        locationStatus.textContent = "Geolocation is not supported by your browser.";
      }
    }
  });