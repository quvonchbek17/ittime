const { fetchData } = require("../../utils/postgres");

const USER = `
    Select * from users where user_email = $1 and user_password = $2
`;

const user = (email, password) => fetchData(USER, email, password);

module.exports = {
    user
};