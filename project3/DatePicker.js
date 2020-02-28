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
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    var cell;
    var row;
    var i;
    var month_name = [
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
    var body = document.createElement("tbody");
    var header_row = document.createElement("tr");
    //create next button, decrease month by 1
    var back = document.createElement("span");
    back.innerHTML = "Back";
    back.setAttribute("id", "back");
    back.addEventListener("click", () => {
      table.remove();
      date.setMonth(date.getMonth() - 1);
      this.render(date);
    });
    //create next button, increase month by 1
    var next = document.createElement("span");
    next.innerHTML = "Next";
    next.setAttribute("id", "next");
    next.addEventListener("click", () => {
      table.remove();
      date.setMonth(date.getMonth() + 1);
      this.render(date);
    });
    //create day of week row
    var dow = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var dayofweek_row = document.createElement("tr");
    for (let i = 0; i < dow.length; i++) {
      cell = document.createElement("th");
      cell.innerHTML = dow[i];
      dayofweek_row.appendChild(cell);
    }

    const cur_date = document.createElement("th");
    cur_date.innerHTML = month_name[date.getMonth()] + " " + date.getFullYear();
    const first_date = new Date(date.getFullYear(), date.getMonth(), 1);
    const first_date_dow = first_date.getDay();
    const max_date = daysInMonth(first_date);
    row = document.createElement("tr");
    //create first calendar row
    for (i = 1; i <= 7; i++) {
      if (i <= first_date_dow) {
        cell = document.createElement("td");
        cell.setAttribute("class", "dif");
        cell.innerHTML = max_date - first_date_dow + i;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("class", "cur");
        cell.innerHTML = i - first_date_dow;
      }
      row.appendChild(cell);
    }
    body.appendChild(row);
    //create remaining rows
    row = document.createElement("tr");
    i -= first_date_dow;
    var counter = 0;
    while (i <= max_date) {
      cell = document.createElement("td");
      cell.innerHTML = i;
      i++;
      counter++;
      row.appendChild(cell);
      if (counter % 7 === 0) {
        body.appendChild(row);
        row = document.createElement("tr");
      }
    }
    //add date after this month to calendar
    i = 1;
    while (row.childElementCount % 7 !== 0) {
      cell = document.createElement("td");
      cell.setAttribute("class", "dif");
      cell.innerHTML = i;
      i++;
      row.appendChild(cell);
    }
    if (row.childElementCount !== 0) {
      body.appendChild(row);
    }
    //build dom tree
    table.appendChild(header);
    header.appendChild(header_row);
    header.appendChild(dayofweek_row);
    header_row.appendChild(back);
    header_row.appendChild(cur_date);
    header_row.appendChild(next);
    table.appendChild(body);

    return table;
  }
}
