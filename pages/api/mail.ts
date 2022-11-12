// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail')
mail.setApiKey('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')

type Data = {
  status: string;
  error?: string;
}

type Error = {
  response: {
    body: {
      errors: string;
    }
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body)
  mail.send({
    to: body.to,
    from: body.from,
    subject: 'New Message!',
    text: body.message,
  }).then(() => {
    res.status(200).json({ status: 'Sent' })
  }).catch((err: Error) => {
    res.status(422).json({ status: 'Not Sent', error: 'Something went wrong! Try again.' })
  })


}
