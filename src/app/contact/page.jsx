import Image from 'next/image'
import './contact.css'

export default function ContactPage(){
    return(
        <>
        <div className="contact_container">
            <div>
                <Image width={400} height={400} src={'/images/contact.png'}/>
            </div>
            <div className='form_container'>
                <input type='text' placeholder='Name and Surname '/>
                <input type='text' placeholder='Email address'/>
                <input type='text' placeholder='Phone number (Optional)'/>
                <textarea></textarea>
            </div>
        </div>
        </>
    )
}