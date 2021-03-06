import Queue from 'bull'
import redisConfig from './redis'
import registrationMail from '../jobs/registrationMail'

const mailQueue = new Queue(registrationMail.key, redisConfig)

export default mailQueue
