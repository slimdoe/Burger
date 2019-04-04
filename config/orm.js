var connection = require("../config/connection");

var tableName = "allBurgers";

var orm = {
    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    allBurgers: function(callback) {
      var s = "SELECT * FROM " + tableName;
  
      connection.query(s, function(err, result) {
        callback(result);
      });
    },
  
    // Here our ORM is creating a simple method for performing a query of a single character in the table.
    // Again, we make use of the callback to grab a specific character from the database.
    searchBurger: function(name, callback) {
      var s = "select * from " + tableName + " where routeName=?";
  
      connection.query(s, [name], function(err, result) {
        callback(result);
      });
    },
  
    // Here our ORM is creating a simple method for adding characters to the database
    // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
    addBurger: function(burger, callback) {
      // Creating a routeName so its easy to search.
  
      // Using a RegEx Pattern to remove spaces from character.name
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      var routeName = burger.name.replace(/\s+/g, "").toLowerCase();
      console.log(routeName);
  
      var s = "INSERT INTO " + tableName + " (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)";
  
      connection.query(s, [routeName, burger.name, burger.role, burger.age, burger.forcePoints], function(
        err,
        result
      ) {
        callback(result);
      });
    }
  };
  
  module.exports = orm;