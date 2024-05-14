function getClothingRecommendation() {
    let temperature = parseFloat(prompt("Enter the current temperature (in Celsius): "));
    let isRaining = prompt("Is it raining? (yes/no): ").toLowerCase().trim();

    if (isNaN(temperature) || (isRaining !== "yes" && isRaining !== "no")) {
      alert("Invalid input. Please enter a valid temperature and 'yes' or 'no' for raining.");
      return;
    }

    let clothing = recommendClothing(temperature, isRaining);
    document.getElementById("recommendation").textContent = `Based on the temperature (${temperature}°C) and rain (${isRaining}), it's recommended to wear ${clothing}.`;
  }

  function recommendClothing(temperature, isRaining) {
    if (temperature > 25) {
      return isRaining ? "light rain gear like a raincoat and rain boots" : "light clothing like a t-shirt and shorts";
    } else if (temperature <= 15) {
      return isRaining ? "raincoat, boots, and a sweater" : "warmer clothing like a sweater and jeans";
    } else {
      return "consider your comfort level and activity when choosing clothes";
    }
  }
