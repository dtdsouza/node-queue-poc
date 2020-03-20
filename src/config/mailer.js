import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'fba444259eca70',
    pass: '6268ca93abcb12'
  }
})
