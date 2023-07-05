interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Chyna",
  lastName: "Gvng",
  age: 20,
  location: "Beijing",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];
