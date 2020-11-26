const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env;

const jwtVerify = async (token) => {
  try {
    const decoded = await jwt.verify(token, JWT_SECRET)
    return decoded
  } catch (e) {
    return false
  }
}

module.exports = jwtVerify
