function Cs142TemplateProcessor(template) {
  this.org_str = template;
  this.fillIn = function(dict) {
    var new_str = this.org_str;
    for (let key in dict) {
      new_str = new_str.replace(`{{${key}}}`, dict[key]);
    }
    new_str = new_str.replace(/{{.*}}/, "");
    return new_str;
  };
}
