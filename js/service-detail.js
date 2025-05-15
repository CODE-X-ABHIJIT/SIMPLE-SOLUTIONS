document.addEventListener('DOMContentLoaded', function () {
  const serviceData = {
    steel: {
      title: "Stainless Steel Modular Kitchen",
      image: "icons/steel.webp",
      points: [
        "Rust and corrosion resistant",
        "Durable and long-lasting",
        "Easy to clean and maintain",
        "Modern and sleek look"
      ]
    },
    glass: {
      title: "Glass Modular Kitchen",
      image: "icons/glass.avif",
      points: [
        "Stylish and contemporary design",
        "Easy visibility of contents",
        "Tempered for safety",
        "Reflects light and brightens space"
      ]
    },
    laminated: {
      title: "Laminate Modular Kitchen",
      image: "icons/laminated.jpg",
      points: [
        "Budget-friendly option",
        "Wide range of colors and patterns",
        "Scratch and moisture resistant",
        "Low maintenance"
      ]
    },
    acrylic: {
      title: "Acrylic Modular Kitchen",
      image: "icons/acrylic.webp",
      points: [
        "Glossy, premium finish",
        "Highly durable and easy to clean",
        "Non-toxic and safe",
        "Moisture and UV resistant"
      ]
    },
    ceramic: {
      title: "Ceramic Modular Kitchen",
      image: "icons/ceramic.jpg",
      points: [
        "Heat and stain resistant",
        "Classic aesthetic appeal",
        "Eco-friendly material",
        "Suitable for traditional themes"
      ]
    },
    membrane: {
      title: "Membrane Modular Kitchen",
      image: "icons/membrane.jpeg",
      points: [
        "Smooth, seamless surface",
        "Available in matte and glossy finishes",
        "Budget-friendly with quality feel",
        "Water and heat resistant"
      ]
    }
  };

  // Get the service ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = urlParams.get('type');

  if (serviceKey && serviceData[serviceKey]) {
    const data = serviceData[serviceKey];
    document.getElementById('service-image').src = data.image;
    document.getElementById('service-title').textContent = data.title;

    const ul = document.getElementById('service-points');
    ul.innerHTML = '';
    data.points.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
  } else {
    document.querySelector('.service-detail-container').innerHTML = "<p>Invalid service type or no data available.</p>";
  }
});
