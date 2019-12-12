interface Person {
  firstName: string;
  lastName: string;
  info:{
    day:number,
    year:number,
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName + 'day:' + person.info.day + 'year:' + person.info.year;
}

let user = { firstName: "Jane", lastName: "1",info:{day:1,year:10}};

console.log(greeter(user))