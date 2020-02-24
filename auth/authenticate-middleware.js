const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secret')

module.exports = (req, res, next) => {

  const token = req.headers.authorization

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {

      if(err) {
        res.status(401)
        .json({ message: "You are not authorized to be here...alerting the REAL authorities." })
      
      } else {
        req.user = decodedToken.user
        next()
      }
    })

  } else {
    res.status(401).json({ how: 'dare you try that at MY house. Just no.' })
  }
}
