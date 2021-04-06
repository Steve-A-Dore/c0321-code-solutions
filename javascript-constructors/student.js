/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction = function () {
  var student = new Student(this.firstName, this.lastName, this.subject);
  var personFullName = student.getFullName();
  var introSentence = `Hello, my name is ${personFullName} and I am studying ${this.subject}.`;
  return introSentence;
};
