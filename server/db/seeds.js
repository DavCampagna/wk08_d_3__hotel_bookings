use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Mildred Pierce",
    email: "mildred@piercerestaurants.com",
    checkedIn: true
  },
  {
    name: "Jean Valjan",
    email: "jeanval@hotmail.fr",
    checkedIn: true
  },
  {
    name: "Veda Pierce",
    email: "vedap@ungratefuldaughters.net",
    checkedIn: true
  }
]);
