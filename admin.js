function viewBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const div = document.getElementById("data");

  if (bookings.length === 0) {
    div.innerHTML = "<p>No bookings yet.</p>";
    return;
  }

  div.innerHTML = bookings.map(b => 
    `<p>User: ${b.user}, Provider: ${b.provider}, Date: ${new Date(b.date).toLocaleString()}</p>`
  ).join("");
}

// Auto-load bookings
viewBookings();
