

function CustomerBooking(bookingId, customerName, film, showDate) {
  this.bookingId = bookingId;
  this.customerName = customerName;
  this.film = film;
  this.showDate = showDate;
}

// Getters
CustomerBooking.prototype.getBookingId = function() {
  return this.bookingId;
}
CustomerBooking.prototype.getCustomerName = function() {
  return this.customerName;
}
CustomerBooking.prototype.getFilm = function() {
  return this.film;
}
CustomerBooking.prototype.getShowDate = function() {
  return this.showDate;
}

// Setters
CustomerBooking.prototype.setBookingId = function(bookingId) {
  this.bookingId = bookingId;
}
CustomerBooking.prototype.setCustomerName = function(customerName) {
  this.customerName = customerName;
}
CustomerBooking.prototype.setFilm = function(setFilm) {
  this.film = film;
}
CustomerBooking.prototype.setShowDate = function(showDate) {
  this.showDate = showDate;
}

// Cinema type
function Cinema() {
  this.bookings = [];
}

Cinema.prototype.addBooking = function(bookingId, customerName, film, showDate) {
  this.bookings[bookingId] = new CustomerBooking(bookingId, customerName, film, showDate);
}

Cinema.prototype.getBookingsTable = function() {
  var booking,
      bookingsTableHTML = "<table class='table'>";
      bookingsTableHTML += "<tr><th>Id</th><th>Name</th><th>Film</th></tr>";
      for (booking in this.bookings) {
        bookingsTableHTML += "<tr><td>";
        bookingsTableHTML += this.bookings[booking].getBookingId();
        bookingsTableHTML +="</td>";
        bookingsTableHTML += "<td>";
        bookingsTableHTML += this.bookings[booking].getCustomerName();
        bookingsTableHTML += "</td>";
        bookingsTableHTML += "<td>";
        bookingsTableHTML += this.bookings[booking].getFilm();
        bookingsTableHTML += "</td>";
        bookingsTableHTML += "</tr>";
      }
      bookingsTableHTML += "</table>";

      return bookingsTableHTML;
}


// Create instances of the object
var firstBooking = new CustomerBooking(1234, 'Robert Smith', 'Raging Bull', '25 July 2004 18:20');
var secondBooking = new CustomerBooking(1244, 'Arnold Palmer', 'Toy Story', '27 July 2004 20:15');

document.write('firstBooking: ' + firstBooking.getCustomerName() + "<br><br>");


var londonOdeon = new Cinema();
    londonOdeon.addBooking(342, 'Arnold Palmer', 'Toy Story', '15 July 2004 20:15');
    londonOdeon.addBooking(335, 'Louise Anderson', 'The Shawshank Redemption', '27 July 2009 11:25');
    londonOdeon.addBooking(566, 'Catherin Hughes', 'Never Say Never', '27 July 2009 17:55');
    londonOdeon.addBooking(324, 'Beci Smith', 'Shrek', '29 July 2009 20:55');

  document.write(londonOdeon.getBookingsTable());
