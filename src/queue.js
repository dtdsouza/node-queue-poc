import Queue from './config/queue'
import RegistrationMail from './jobs/registrationMail'

Queue.process(RegistrationMail.handle)
