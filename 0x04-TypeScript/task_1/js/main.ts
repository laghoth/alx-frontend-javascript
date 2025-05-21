// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
// Example
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra property allowed
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false,
  numberOfReports: 17,
};

console.log(teacher3);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // J. Doe
