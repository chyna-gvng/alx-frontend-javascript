interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Chyna',
  lastName: 'Gvng',
  age: 18,
  location: 'Beijing',
}

const secondStudent: Student = {
  firstName: 'Vicks',
  lastName: 'Batch',
  age: 16,
  location: 'Mogadishu',
}

const studentsList: Array<Student> = [firstStudent, secondStudent]

const newTable = document.createElement('table');
const bodyTable = document.createElement('body');

studentsList.forEach((obj) => {
  const myrow = document.createElement('row');
  const cellstName = document.createElement('tfn');
  const cellLocation = document.createElement('tlc');
  cellstName.textContent = obj.firstName;
  cellLocation.textContent =obj.location;
  myrow.appendChild(cellstName);
  myrow.appendChild(cellLocation);
  bodyTable.appendChild(myrow);
});

newTable.appendChild(bodyTable);
document.body.appendChild(newTable);
