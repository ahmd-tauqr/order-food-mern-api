import jwt from 'jsonwebtoken'

const SECRET_KEY = "sseeeccccret"

const getLoginCred = (req) => {

  const header = req.request.headers.authorization

  if (!header) {
    throw new Error('Authentication Error')
  }

  const token = header.split(' ')[1]
  // console.log(token)
  const decoded = jwt.verify(token, SECRET_KEY)
  // console.log('logged in user id: ', decoded['id'])
  return decoded['id']
}

export {getLoginCred as default}