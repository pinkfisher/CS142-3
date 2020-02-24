var assert = require("assert");

function Cs142TemplateProcessor(template) {
  this.org_str = template;
  this.fillIn = function(dict) {
    var new_str = this.org_str;
    for (let key in dict) {
      new_str = new_str.replace(`{{${key}}}`, dictionary[key]);
    }
    new_str = new_str.replace(/{{.*}}/, "");
    return new_str;
  };
}
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

assert(str === 'My favorite month is July but not the day 1 or the year 2016');

//Case: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary2);

assert(str === 'My favorite month is  but not the day 1 or the year 2016');
