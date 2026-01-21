function saveProfile() {
  const name = document.getElementById("providerName").value;
  const service = document.getElementById("serviceType").value;
  const experience = document.getElementById("experience").value;
  const price = document.getElementById("price").value;

  if (!name || !experience || !price) {
    alert("Please fill all fields");
    return;
  }

  const profile = { name, service, experience, price };
  localStorage.setItem("providerProfile", JSON.stringify(profile));

  // Add provider to main providers list
  let providers = JSON.parse(localStorage.getItem("providers")) || [];
  const index = providers.findIndex(p => p.name === name);
  if (index >= 0) providers[index] = profile;
  else providers.push(profile);
  localStorage.setItem("providers", JSON.stringify(providers));

  alert("Profile saved successfully!");
  displayProfile();
  displayBookings();
}

function displayProfile() {
  const profile = JSON.parse(localStorage.getItem("providerProfile"));
  if (!profile) return;
  document.getElementById("providerName").value = profile.name;
  document.getElementById("serviceType").value = profile.service;
  document.getElementById("experience").value = profile.experience;
  document.getElementById("price").value = profile.price;
}

function displayBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const profile = JSON.parse(localStorage.getItem("providerProfile"));
  const myBookings = bookings.filter(b => b.provider === profile.name);

  const div = document.getElementById("bookingList");
  div.innerHTML = myBookings.length
    ? myBookings.map(b => `<p>${b.user} booked on ${new Date(b.date).toLocaleString()}</p>`).join("")
    : "<p>No bookings yet.</p>";
}

// Initialize
displayProfile();
displayBookings();
