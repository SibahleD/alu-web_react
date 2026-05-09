interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student  = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Kigali'
}

const student2: Student  = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 24,
    location: 'Kimironko'
}

const studentsList: Student [] = [
    student1,
    student2
]

const table = document.getElementById("myTable") as HTMLTableElement;

const renderTable = (data: { name: string; age: number }[]) => {
  data.forEach((item) => {
    const row = table.insertRow(); // Creates a <tr>
    const cell1 = row.insertCell(0); // Creates a <td>
    const cell2 = row.insertCell(1);
    
    cell1.textContent = item.name;
    cell2.textContent = item.age.toString();
  });
};