const ProgramsDto = (result,index = 0) => {
    return{
        id:result.rows[index].id,
        name:result.rows[index].name,
        faculties_id:result.rows[index].faculties_id,
        faculties:result.rows[index].faculties
    }
}

module.exports = ProgramsDto;