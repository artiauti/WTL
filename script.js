// Step 2: Fetch car data using async/await
async function fetchCarData() {
  try {
    const response = await fetch('https://myfakeapi.com/api/cars/');
    const data = await response.json();

    displayCars(data.cars); 

  } catch (err) {
    console.error("Error fetching car data:", err);
  }
}

// Step 3: Display cars in card format
function displayCars(cars) {
  const container = document.getElementById('car-container');

  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';

    card.innerHTML = `
      <img src="https://via.placeholder.com/250x150?text=${car.car}" alt="${car.car}">
      <h4>${car.car} ${car.car_model}</h4>
      <p><strong>Year:</strong> ${car.car_model_year}</p>
      <p><strong>Color:</strong> ${car.car_color}</p>
      <p><strong>Price:</strong> ${car.price}</p>
    `;

    container.appendChild(card);
  });
}

fetchCarData();
