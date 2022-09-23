const { fetchData } = require("../../utils/postgres");


const POST_USER = `
    Insert into users(user_name, user_fullname, user_email, user_password, user_phone) values($1, $2, $3, $4, $5)
`;

const UPDATE_PASSWORD = `
 Update users set user_password = $1where user_email = $2
`;




const postUser = async (username,fullname,email,password,phone) => {
    const created = await fetchData(
      `Select * from users where user_name = $1 or user_email = $2 or user_phone = $3`,
      username,
      email,
      phone
    );
    if (created.length > 0) {
      return null;
    } else {
      return fetchData(POST_USER, username, fullname, email, password, phone);
    }
  };

  const updatePassword = async (newpassword,email) => {
    fetchData(UPDATE_PASSWORD, newpassword,email);
    };


module.exports = {
    postUser,
    updatePassword
}