export class User {
  private id?: number;
  private email?: string;
  private password?: string;
  private firstName?: string;
  private lastName?: string;

  constructor(email: string, password: string, firstName: string, lastName: string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName = () => this.firstName ? this.firstName + " " + this.lastName : '';
}