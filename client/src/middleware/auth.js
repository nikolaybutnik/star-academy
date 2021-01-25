const jwt = require('jsonwebtoken')
const jwtPrivateKey = 'secret'

const parseToken = function (headerValue) {
  if (headerValue) {
    const [type, token] = headerValue.split(' ')
    if (type === 'Bearer' && typeof token !== 'undefined') {
      return token
    }
    return undefined
  }
}

module.exports = async (req, res, next) => {
  // Get the token from the request header.
  const token = parseToken(req.header('Authorization'))
  console.log(token)
  if (!token) {
    return res.status(401).send({
      errors: [
        {
          status: 'Unauthorized',
          code: '401',
          title: 'Authentication failed',
          description: 'Missing bearer token',
        },
      ],
    })
  }
  try {
    const payload = jwt.verify(token, jwtPrivateKey)
    req.user = payload
    next()
  } catch (err) {
    res.status(400).send({
      errors: [
        {
          status: 'Bad request',
          code: '400',
          title: 'Validation Error',
          description: 'Invalid bearer token',
        },
      ],
    })
  }
}
