const FacultiesDto = (result,index = 0) => {
    return{
        id:result.rows[index].id,
        name:result.rows[index].name
    }
}

module.exports = FacultiesDto;