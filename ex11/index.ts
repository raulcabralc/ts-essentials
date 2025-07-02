interface UserEx {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type PersonEx = UserEx | Admin;

const people: PersonEx[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    occupation: "Pilot",
  },
];

function logPerson(person: PersonEx) {
  let additionalInfo: string;
  if ("role" in person) {
    additionalInfo = person.role;
  } else {
    additionalInfo = person.occupation;
  }
  console.log(` - ${person.name} | ${person.age} | ${additionalInfo}`);
}
