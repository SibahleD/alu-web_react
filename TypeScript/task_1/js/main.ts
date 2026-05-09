interface teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};

interface Director extends teacher {
    numberOfReports: number;
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

const Teacher: printTeacherFunction = (firstName,lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string; 

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    
    workOnHomework(): string {
        return 'Currently working';
    };

    displayName(): string {
        return this.firstName;
    };
};