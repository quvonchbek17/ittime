const { fetchData } = require("../../utils/postgres");

const GET_VERIFYNUMBER = `
Select * from verifyemail where verify_number = $1
`
const POST_VERIFY = `
    Insert into verifyEmail(verify_email, verify_number) values($1, $2)
`;

const DELETE_VERIFY = `
    Delete from verifyemail where verify_id = $1
`;

const verifyNumber = async (number) => {
    return fetchData(GET_VERIFYNUMBER, number);
};

const verifyEmail = async (email, number) => {
    return fetchData(POST_VERIFY, email, number);
};

const deleteverify = async (id) => {
    return fetchData(DELETE_VERIFY, id);
};

module.exports = {
    verifyEmail,
    verifyNumber,
    deleteverify
}