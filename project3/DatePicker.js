"use strict";
class DatePicker {
  constructor(id, callback) {
    this.id = id;
    this.callback = callback;
  }

  render(date) {
    var parent = document.getElementById(this.id);
    parent.appendChild(this.createCalendar(date));
  }

  createCalendar(date) {
    function daysInMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }
    var cell;
    var row;
    var i;
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var table = document.createElement("table");

    var header = document.createElement("thead");
    header.innerHTML = "header";

    var body = document.createElement("tbody");

    var header_row = document.createElement("tr");

    var back = document.createElement("span");
    back.innerHTML = "Back";
    back.setAttribute("id", "back");
    back.addEventListener("click", () => {
      table.remove();
      date.setMonth(date.getMonth() - 1);
      this.render(date);
    });

    var next = document.createElement("span");
    next.innerHTML = "Next";
    next.setAttribute("id", "next");
    next.addEventListener("click", () => {
      table.remove();
      date.setMonth(date.getMonth() + 1);
      this.render(date);
    });

    var dow = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var dayofweek_row = document.createElement("tr");
    for (let i = 0; i < dow.length; i++) {
      cell = document.createElement("th");
      cell.innerHTML = dow[i];
      dayofweek_row.appendChild(cell);
    }

    var cur_date = document.createElement("th");
    cur_date.innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    var first_date = new Date(date.getFullYear(), date.getMonth(), 1);
    console.log("first date", first_date);
    row = document.createElement("tr");
    const first_date_dow = first_date.getDay();
    for (i = 1; i <= 7; i++) {
      if (i <= first_date_dow) {
        cell = document.createElement("td");
        cell.innerHTML = daysInMonth(first_date) - first_date_dow + i;
      } else {
        cell = document.createElement("td");
        cell.innerHTML = i - first_date_dow;
      }
      row.appendChild(cell);
    }
    console.log(i);


    table.appendChild(header);

    header.appendChild(header_row);
    header.appendChild(dayofweek_row);

    header_row.appendChild(back);
    header_row.appendChild(cur_date);
    header_row.appendChild(next);

    table.appendChild(body);
    body.appendChild(row);

    return table;
  }
}
