const Response = () => {
    const successMessage = (code, msg, data) => ({
        code: code,
        msg: msg,
        data: data
    });

    const errorMessage = (code, msg) => ({
        code: code,
        msg: msg
    });

    const pagination = (code, msg, data, keyword, page, totalItem, size, sortBy, sortType) => {
        return {
            code: code,
            msg: msg,
            data: data,
            keyword: keyword,
            sortBy: sortBy,
            sortType: sortType,
            paging: {
                page: page,
                totalPages: Math.ceil(totalItem/size),
                totalRows: totalItem,
                rowPerPage: size
            }
        }
    }

    return {
        successMessage, errorMessage, pagination
    }
}

module.exports = Response;
