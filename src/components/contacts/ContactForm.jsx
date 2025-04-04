import React,{useState} from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({ fullName: '', email: '',phone: '', message: '' });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newErrors = { name: false, email: false,phone: false, message: false };

        if (formData.fullName === '') newErrors.name = true;
        if (!emailRegex.test(formData.email)) newErrors.email = true;
        if (formData.phone === '') newErrors.phone = true;
        if (formData.message === '') newErrors.message = true;

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.phone && !newErrors.message) {
            e.target.submit()
            console.log(formData)
            alert('FORM SUBMITTED SUCCESSFULLY')
            setFormData({ fullName: '', email: '',phone: '', message: '' }); 
        };
    }

  return (
    <div className='sm:px-5 md:px-10 lg:px-24'>
        <div className='bg-[var(--accent-color)] sm:rounded-lg text-center sm:text-left py-10 sm:flex items-center sm:px-5 md:px-10 lg:px-24'>
            <div className='sm:w-1/2'>
                <h1 className='text-2xl text-white font-semibold md:text-4xl'>Contact us</h1>
                <p className='text-gray-100 mt-7 px-3 md:max-w-[450px]'>Ready to take it to the next level? Let's talk about your project or idea and find out how we can make your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
            </div>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4  mt-5 items-center px-5 sm:w-1/2'>
                <input 
                    name='fullName'
                    type="text" 
                    placeholder='Name' 
                    required 
                    onChange={handleChange}
                    value={formData.fullName}
                    className='border-b-2 sm:wfull border-gray-100 w-full py-2 px-3 placeholder:text-gray-100 text-white outline-0'
                />
                <input 
                    name='email'
                    type="text" 
                    placeholder='Email' 
                    required 
                    onChange={handleChange}
                    value={formData.email}
                    className='border-b-2 border-gray-100 w-full py-2 px-3 placeholder:text-gray-100 text-white outline-0'
                />
                <input
                    name='phone' 
                    type='number'
                    placeholder='Phone' 
                    required 
                    onChange={handleChange}
                    value={formData.phone}
                    className='border-b-2 border-gray-100 w-full py-2 px-3 placeholder:text-gray-100 text-white outline-0'
                />
                <textarea 
                    name="message" 
                    id="message" 
                    cols="15" 
                    rows="5" 
                    required
                    placeholder='Your message'
                    onChange={handleChange}
                    value={formData.message} 
                    className='border-b-2 border-gray-100 resize-none w-full py-2 px-3 placeholder:text-gray-100 outline-0 text-white'>
                </textarea>
                <button type='submit' className='bg-white hover:bg-black transition duration-300 hover:text-white shadow hover:shadow-white cursor-pointer text-black w-fit px-3 py-2 rounded-md mt-5'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm;