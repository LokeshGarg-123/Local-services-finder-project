function saveBooking(provider) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({ provider, date: new Date() });
  localStorage.setItem("bookings", JSON.stringify(bookings));
}
