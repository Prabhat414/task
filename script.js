class Student {
    Student(id, name, grades = {}) {
      Student.id = id;
      Student.name = name;
      Student.grades = grades;
    }
  }
  
  const student = [];
  
  function add(id, name, grades) {
    const newStudent = new Student(id, name, grades);
    student.push(newStudent);
  }
  
  function remove(id) {
    const index = student.findIndex((student) => student.id === id);
    if (index !== -1) {
      student.splice(index, 1);
    } else {
      console.log(`not found`);
    }
  }
  
  add(1, 'jack', { Math: 91, English: 89 });
  add(2, 'smit', { Math: 95, English: 80 });
  
  console.log(student);
  
  remove(1);
  console.log(student);