import { useState } from 'react'
import { Error } from '../components/common/alert/Error';
import { Success } from '../components/common/alert/Success';

export const ContactFormSection = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityError, setSecurityError] = useState(false)
  const [sentStatus, setSentStatus] = useState<number>(0)
  const resetForm = () => {
    setFullname('')
    setEmail('')
    setMessage('')
    setSecurityQuestion('')
    setSecurityError(false)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(securityQuestion === '14') {
      const msg = {
        to: 'milosptr@icloud.com', // Change to your recipient
        from: 'milosptr@hotmail.com', // Change to your verified sender
        subject: 'Email from devolut.io',
        message: `Full name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
      }
      fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(msg)
      }).then((res) => {
        if(res.status === 200) {
          setSentStatus(200)
          resetForm()
          return
        }
        setSentStatus(422)
      })
    } else {
      setSecurityError(true)
    }
  }

  return (
    <section id="contactFormSection" className="py-32">
      <div className="container">
        <div className="lg:w-1/2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Get In Touch!</h2>
          <form
            method='post'
            action='/api/new'
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 text-sm gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  className="w-full form-control"
                  placeholder="Your Name (*)"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full form-control"
                  placeholder="Your Email (*)"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="text-sm mt-6">
              <textarea
                name="message"
                className="w-full form-control"
                rows={3}
                placeholder="Your Question (*)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className={`w-full form-control ${securityError ? 'with-error' : ''}`}
                placeholder='What is 3 + 11 = ?'
                required
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
              />
              { sentStatus > 0 && (
                <div className="mt-3">
                  { sentStatus === 200 && <Success message="Message sent! We'll get back to you shortly." /> }
                  { sentStatus === 422 && <Error message="Email not sent. Please try again later!" /> }
                </div>
              )}
            </div>
            <div className="mt-6">
              <button type="submit" className="main-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
