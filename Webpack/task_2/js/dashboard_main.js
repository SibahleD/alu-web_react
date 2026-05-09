import $ from "jquery";
import _ from "lodash";

// Add elements to the DOM
$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let counter = 0;

const updateCounter = () => {
  counter += 1;
  $('#count').text(`${counter} clicks on the button`);
};

const debouncedUpdate = _.debounce(updateCounter, 500);

$('#clickButton').on('click', debouncedUpdate);
