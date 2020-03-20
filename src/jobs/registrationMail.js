import { transport } from '../config/mailer'

export default {
  key: 'RegistrationMail',
  async handle ({ data: user }) {
    await transport.sendMail({
      from: 'Queue test <queue@queue.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'User signup',
      html: `Olá, ${user.name}!`
    })
  }
}
