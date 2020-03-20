import queue from '../config/queue'

export const store = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  // Send email
  await queue.add(user)

  return res.json(user)
}

export default {
  store
}
