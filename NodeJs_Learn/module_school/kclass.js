var student = require('./student');
var teacher = require('./teacher');

function add(_teacherName,_studentList){
  teacher.add(_teacherName);
  _studentList.forEach(function(item,index){
    student.add(item);
  })
}

exports.add=add
