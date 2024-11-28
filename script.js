function shareLocation() {
    function shareLocation() {
      const locationInput = document.getElementById("locationInput").value;
      const output = document.getElementById("locationOutput");
      if (locationInput.trim() !== "") {
        output.textContent = Location shared:${ locationInput };
      } else {
        output.textContent = "Please enter a location to share.";
      }
    }
  }
  
  function sendSOS() {
    const sosMessage = document.getElementById("sosMessage");
    sosMessage.textContent = "SOS sent! Emergency services have been notified.";
  }
  
  function findMedical() {
    const medicalOutput = document.getElementById("medicalOutput");
    medicalOutput.textContent = "Searching for nearby medical facilities...";
    setTimeout(() => {
      medicalOutput.textContent = "3 nearby medical facilities found. Contact them for immediate help.";
    }, 2000);
  }
  
  function findFood() {
    const foodOutput = document.getElementById("foodOutput");
    foodOutput.textContent = "Searching for nearby food centers...";
    setTimeout(() => {
      foodOutput.textContent = "5 nearby food centers found. Directions shared.";
    }, 2000);
  }
  
  // const x = document.getElementById("demo");
  
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }
  
  // function showPosition(position) {
  //   x.innerHTML = "Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude;
  // }