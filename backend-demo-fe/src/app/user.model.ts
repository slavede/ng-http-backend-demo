export class User {
  firstName: String;
  lastName: String;
  personalInfo: {
    age: Number,
    gender: String
  };

  constructor(firstName: String, lastName: String, personalInfo: {age: Number, gender: String}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personalInfo = personalInfo;

    console.log('In constructor!' + this.firstName);
  }
}
