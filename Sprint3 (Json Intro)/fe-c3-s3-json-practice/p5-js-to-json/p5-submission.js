/*
Practice 5 - Convert JavaScript Object to JSON
*/

// Declare and initialize variable to store the iven `airports` data.

const airports = `[
    {
        "ORD": {
            "airportName": "Chicago O'Hare International Airport",
            "state": "Chicago",
            "facilities":["taxi parking","family lounge", "on-site hotel", "lost and found"]
        },
        "LWA": {
            "airportName": "LaGuardia Airport",
            "state": "New York",
            "facilities": ["terminal transits", "business lounge", "private car parking", "taxi parking"]
        }
    }
]`

const airportObject = JSON.parse(airports);                  // convert (JSON data) into (javaScript object) in this line using parse.
//console.log(airportObject);

// Convert JavaScript object to JSON format.
const airportJSON = JSON.stringify(airportObject);            // convert (javaScript object) into (JSON data) in this line using stringfy.
//console.log(airportJSON);

// do not delete below code, it is written to make airportJSON constant exportable for testing purpose
module.exports = {
    airportJSON
};