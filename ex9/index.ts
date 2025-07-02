class EmployeeTest {
  constructor(public title: string, public salary: number) {}
}

const employee = new EmployeeTest("Engineer", 10000);
console.log(
  `The new employee's title is ${employee.title} and they earn ${employee.salary}`
);
