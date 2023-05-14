const bcrypt = require('bcrypt');
const auth = require('../../auth-token');
const jwt = require('jsonwebtoken');
const { getUserService } = require('../services/user-service');

const loginService = async (login) => {
  try {
    const data = await validateUserLogin({ username: login.username });
    if (data.password === login.password) {
      let payload = {
        _id: data._id.toString(),
        name: data.name,
        document: data.document,
        username: data.username,
        password: data.password,
      };
      const token = jwt.sign(payload, 'secretkey');
      return { token };
    } else {
      throw new Error('Informacion invalida');
    }
  } catch (error) {
    throw new error();
  }
};

const validateUserLogin = async (q) => {
  let col = await getUserService();
  let keys = Object.keys(q);
  let key = keys[0];

  return col.filter((item) => item[key] === q[key])[0] || null;
};
/**
 *
 *
 * @param {*} data
 * @return {*}
 */
const saveUserToken = async (data) => {
  const authData = {
    id: data.id,
  };

  if (data.username) {
    authData.username = data.username;
  }

  if (data.password) {
    authData.password = await bcrypt.hash(data.password, 5);
  }

  // return authData;
};

module.exports = {
  loginService,
  saveUserToken,
};
