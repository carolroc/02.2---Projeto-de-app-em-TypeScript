export class Person {
  fullName: string;
  birthdayYear: number;

  getFullName(firstName: string, middleName: string, lastName: string) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    return 'nome completo: ' + this.fullName;
  }

  getBithdayYear(age: number) {
    this.birthdayYear = 2022 - age;
    return 'nascido em: ' + this.birthdayYear;
  }
}
