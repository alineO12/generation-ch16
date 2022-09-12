USE generation1;

SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

SELECT Students.*, idtypes.name
FROM Students 
INNER JOIN idtypes 
ON idtypes.id_idTypes = students.idType_id;

-- 3
SELECT Students.*, idtypes.name, courses_has_students.* FROM Students INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idtypes
INNER JOIN courses_has_students ON Students.idStudent = courses_has_students.students_id_student;

-- 4

SELECT courses_has_students.* , courses.name, 
courses.credits, courses.module_code 
FROM courses_has_students 
INNER JOIN courses 
ON courses_has_students.course_code = courses.code ;

-- 5



