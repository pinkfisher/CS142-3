class TableTemplate {
  static fillIn(id, dict, column_name) {
    var row_list = document
      .getElementById(id)
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr");
    var is_header = true;
    var td_list, text, col_to_replace;

    for (let row of row_list) {
      td_list = row.getElementsByTagName("td");
      if (is_header) {
        for (let i = 0; i < td_list.length; i++) {
          text = td_list[i].innerHTML.slice(2, -2);
          td_list[i].innerHTML = text in dict ? dict[text] : " ";
          console.log(text, column_name);
          if (dict[text] === column_name) {
            col_to_replace = i;
          }
        }
        if (column_name !== undefined) {
          is_header = false;
        }
      } else {
        text = td_list[col_to_replace].innerHTML.slice(2, -2);
        td_list[col_to_replace].innerHTML = text in dict ? dict[text] : " ";
      }
    }

    document.getElementById(id).setAttribute("style", "visibility:visible");
  }
}
