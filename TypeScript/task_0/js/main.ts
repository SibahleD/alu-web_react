interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

studentsList.forEach((student) => {
    const row = tbody.insertRow();
    row.insertCell().innerHTML = student.firstName;
    row.insertCell().innerHTML = student.location;
});

document.body.appendChild(table);