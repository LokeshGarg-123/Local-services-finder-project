let providers = JSON.parse(localStorage.getItem("providers")) || [
  { name: "Yash Gautam", service: "Plumber", experience: 5, price: 300 },
  { name: "Amit Kumar", service: "Electrician", experience: 7, price: 250 },
  { name: "Lalit Kumar", service: "Cleaner", experience: 4, price: 200 },
  { name: "Aman Verma", service: "Painter", experience: 7, price: 250 },
  { name: "Rohit Kumar", service: "AC Repair", experience: 4, price: 400 },
  { name: "Shivam", service: "Car & Bike Servicing", experience: 12, price: 200 },
  { name: "Greesh Kumar", service: "Cleaner", experience: 6, price: 250 },
  { name: "Chetan Singh", service: "Fitness Trainer", experience: 4, price: 200 },
  { name: "Sumit Yadav", service: "Cleaner", experience: 4, price: 200 },
  { name: "Shivam Yadav", service: "Home Tutor", experience: 9, price: 200 },
  { name: "Nitin Sharma", service: "Event Management", experience: 4, price: 800 },
  { name: "Manish Kumar", service: "Cleaner", experience: 4, price: 200 },
  { name: "Raj Sharma", service: "Cleaner", experience: 4, price: 200 },
  { name: "Hemant Dixit", service: "Driver", experience: 15, price: 300 },
  { name: "Lokesh Garg", service: "Mechanic", experience: 11, price: 350 },
  { name: "Rahul Kumar", service: "Mechanic", experience: 3, price: 350 },
  { name: "Kunal Sharma", service: "Painter", experience: 7, price: 400 },
  { name: "Piyush solanki", service: "Doctor", experience: 12, price: 500 }
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
