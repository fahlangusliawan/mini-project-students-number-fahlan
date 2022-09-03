const BillsDto = (result,index = 0) => {
    return{
        id:result.rows[index].id,
        students_npm:result.rows[index].students_npm,
        bill_name:result.rows[index].bill_name,
        amount:result.rows[index].amount,
        status:result.rows[index].status
    }
}

module.exports = BillsDto;