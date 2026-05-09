namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
  };

  // Cpp
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Java
  console.log('Java');
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // React
  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
