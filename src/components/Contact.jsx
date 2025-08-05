import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://formsubmit.co/ajax/dipinkharayat@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === 'true') {
                toast.success("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' }); // reset form
            } else {
                toast.error("Failed to send message!");
            }

        } catch (err) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <section id='contact' className='px-6 py-16 bg-black text-white h-screen'>
            <ToastContainer />
            <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
                {/* Contact Info */}
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Let's talk</h1>
                    <p className='mb-6 text-gray-300'>
                        I'm currently available to take on new projects, so feel free to get in touch.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <Mail className='text-lime-400' />
                            <p className='text-lg'>dipinkharayat@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Phone className='text-lime-400' />
                            <p className='text-lg'>+91 9528686169</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form
                        className='bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 text-black'
                        onSubmit={onSubmitHandler}
                    >
                        <div>
                            <label htmlFor="name" className='block font-semibold mb-1'>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={onChangeHandler}
                                placeholder='Enter your name'
                                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className='block font-semibold mb-1'>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={onChangeHandler}
                                placeholder='Enter your email'
                                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className='block font-semibold mb-1'>Write your message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={onChangeHandler}
                                rows="6"
                                placeholder='Enter your message'
                                className='w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-lime-400'
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='bg-lime-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-lime-600 transition duration-200'
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
