const StudentsDto = (result,index = 0) => {
    return{
        id:result.rows[index].id,
        npm:result.rows[index].npm,
        name:result.rows[index].name,
        gender:result.rows[index].gender,
        semester:result.rows[index].semester,
        address:result.rows[index].address,
        year:result.rows[index].year,
        faculties_id:result.rows[index].faculties_id,
        faculties:result.rows[index].faculties,
        programs_id:result.rows[index].programs_id,
        programs:result.rows[index].programs,
    }
}

module.exports = StudentsDto;