export class Person {
  data: PersonData = {
    name: "",
    birthday: "",
    likes: []
  }

  static fromData(personData: PersonData): Person {
    const person = new Person();
    person.data = personData;
    return person;
  }

  getBirthday(): Date {
    return new Date(this.data.birthday);
  }

  greet() {
    console.log(`Hi, my name is ${this.data.name}, and I was born ${this.data.birthday}. That was on the ${this.getBirthday().getDay()} day of the week!`);
  }
}

export type PersonData = {
  name: string,
  birthday: string;
  likes: string[]
}