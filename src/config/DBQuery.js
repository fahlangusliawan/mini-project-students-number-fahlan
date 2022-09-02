const DBQUery = () => {
    const SELECT_FACULTY_LIST = `SELECT * FROM faculties ORDER BY id`
    const INSERT_FACULTY = `INSERT INTO faculties
    (id,name,created_at)
    VALUES ($1,$2,now()) RETURNING *`
    const UPDATE_FACULTY = `UPDATE faculties
    SET name=$1,updated_at=now()
    WHERE id=$2 RETURNING *`
    const DELETE_FACULTY = `DELETE FROM faculties WHERE id=$1`
    const SELECT_FACULTY_ID = `SELECT * FROM faculties WHERE id=$1`

    const SELECT_PROGRAM_LIST = `SELECT * FROM programs ORDER BY id`
    const INSERT_PROGRAM = `INSERT INTO programs
    (id,name,faculties_id,created_at)
    VALUES ($1,$2,$3,now()) RETURNING *`
    const UPDATE_PROGRAM = `UPDATE programs
    SET name=$1,faculties_id=$2,updated_at=now()
    WHERE id=$3 RETURNING *`
    const DELETE_PROGRAM = `DELETE FROM programs WHERE id=$1`
    const SELECT_PROGRAM_ID = `SELECT * FROM programs WHERE id=$1`
    const SELECT_PROGRAM_BYFACULTY_ID = `SELECT * FROM programs WHERE faculties_id=$1`

    const INSERT_STUDENT = `INSERT INTO students
    (id,npm,name,gender,semester,year,address,faculties_id,programs_id,created_at)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,now()) RETURNING *`
    const SELECT_STUDENT_NPM = `SELECT * FROM students WHERE npm=$1`
    const SELECT_STUDENT_LIST = `SELECT * FROM students ORDER BY id`
    const UPDATE_STUDENT = `UPDATE students
    SET name=$1,gender=$2, address=$3,updated_at=now()
    WHERE id=$4 RETURNING *`
    const NEXT_SEMESTER = `UPDATE students
    SET semester=$1,updated_at=now()
    WHERE id=$2 RETURNING *`
    const DELETE_STUDENT = `DELETE FROM students WHERE id=$1`

    return{
        SELECT_FACULTY_ID,SELECT_FACULTY_LIST,INSERT_FACULTY,DELETE_FACULTY,UPDATE_FACULTY,
        SELECT_PROGRAM_ID,SELECT_PROGRAM_LIST,INSERT_PROGRAM,DELETE_PROGRAM,UPDATE_PROGRAM,SELECT_PROGRAM_BYFACULTY_ID,
        SELECT_STUDENT_LIST,SELECT_STUDENT_NPM,INSERT_STUDENT,UPDATE_STUDENT,NEXT_SEMESTER,DELETE_STUDENT
    }
}

module.exports = DBQUery;