import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value })
    }

    //service_ppd3g5g
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        try {
            await emailjs.send('service_ppd3g5g', 'template_8odxfmf', 
            {
                    from_name: form.name,
                    to_name: 'Tyler',
                    from_email: form.email,
                    to_email: 'tylerstocks100@outlook.com',
                    message: form.message
            },
                //key    
                'cm9G9S6bzZXBSlKdG'
            )

            setLoading(false);
            alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: '',
            })

        } catch(error) {

            setLoading(false)
            console.log(error)
            alert('Somthing went wrong!')
        }

    }

  return (
    
    <section className='c=space my-20' id='contact'>

        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen pb-10'/>

            <div className='contact-container'>
            <h3 className='head-text'> Let's Talk</h3>
            
            <p className='text-lg text-white-600 mt-3'>
            I'm eager to connect with studios and companies looking for passionate game developers.
             With a strong background in C++ and game design, I'm ready to bring my skills to a dynamic team.
             If you have an opportunity that aligns with my expertise,
              don't hesitate to reach out—I'd love to discuss how I can contribute to your next game project!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                <label className='space-y-3'>
                    <span className='field-label'>Full Name</span>

                    <input
                     type="text"
                     name='name'
                     value={form.name}
                     onChange={handleChange}
                     required 
                     className='field-input'
                     placeholder='John Doe'
                     />

                </label>
                <label className='space-y-3'>
                    <span className='field-label'>Email</span>

                    <input
                     type="email"
                     name='email'
                     value={form.email}
                     onChange={handleChange}
                     required 
                     className='field-input'
                     placeholder='Johndoe@gmail.com'
                     />
                     
                </label>
                <label className='space-y-3'>
                    <span className='field-label'>Your Message</span>

                    <textarea
                     name='message'
                     value={form.message}
                     onChange={handleChange}
                     required 
                     rows={5}
                     className='field-input'
                     placeholder='Hi, I&apos;m interested in...'
                     />
                     
                </label>

                <button className='field-btn' type='submit' disabled={loading}>
                    {loading ? 'Sending ...' : 'Send Message'}
                    <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                </button>

            </form>
            </div>
        </div>

        
    </section>


  )
}

export default Contact