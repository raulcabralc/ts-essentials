type User = {
  name: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

type Employee = User & JobRole;
// Junção dos dois types

const user: Employee = {
  name: "Raul",
  age: 18,
  id: 6,
  role: "Back-End Intern",
};
