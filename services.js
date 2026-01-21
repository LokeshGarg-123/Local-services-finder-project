let providers = JSON.parse(localStorage.getItem("providers")) || [
  { name: "Yash Gautam", service: "Plumber", experience: 5, price: 300 },
  { name: "Amit", service: "Electrician", experience: 3, price: 250 },
  { name: "Lalit Kumar", service: "Cleaner", experience: 4, price: 200 }
];

function findServices() {
  const service = document.getElementById("serviceType").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  const filtered = providers.filter(p => p.service === service);

  if (filtered.length === 0) {
    results.innerHTML = "<p>No providers found</p>";
    return;
  }

  filtered.forEach(p => {
    results.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Service: ${p.service}</p>
        <p>Experience: ${p.experience} years</p>
        <p>Price: ₹${p.price}/hr</p>
        <button onclick="bookService('${p.name}')">Book Service</button>
      </div>
    `;
  });
}

function bookService(name) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { name: "Guest" };
  bookings.push({ provider: name, user: currentUser.name, date: new Date() });
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert(`Service booked with ${name}`);
}
