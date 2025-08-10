import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
};

const bounceIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 160, damping: 14 },
    },
};

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
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error("Failed to send message!");
            }

        } catch (err) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <section id='contact' className='px-6 py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen'>
            <ToastContainer />
            <motion.div
                className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                {/* Contact Info */}
                <motion.div variants={bounceIn}>
                    <h1 className='text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text'>
                        Let’s talk 💬
                    </h1>
                    <motion.p
                        className='mb-8 text-gray-400 leading-relaxed'
                        animate={{ x: [0, -5, 5, -5, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    >
                        I'm open to freelance projects and collaboration ideas. Reach out!
                    </motion.p>

                    <div className='flex flex-col gap-6'>
                        <motion.div whileHover={{ scale: 1.05 }} className='flex items-center gap-4'>
                            <Mail className='text-teal-400 w-6 h-6 animate-bounce' />
                            <p className='text-lg'>dipinkharayat@gmail.com</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className='flex items-center gap-4'>
                            <Phone className='text-teal-400 w-6 h-6 animate-pulse' />
                            <p className='text-lg'>+91 9528686169</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={onSubmitHandler}
                    className='bg-gradient-to-br from-gray-950 via-slate-900 to-black p-10 rounded-3xl shadow-2xl flex flex-col gap-6 text-white'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {['name', 'email', 'message'].map((field, i) => (
                        <motion.div key={field} variants={fadeInUp} custom={i + 2}>
                            <label htmlFor={field} className='block font-semibold mb-2 capitalize text-gray-300'>
                                {field === 'message' ? 'Your Message' : `Your ${field}`}
                            </label>
                            {field === 'message' ? (
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={onChangeHandler}
                                    placeholder="Type your message..."
                                    className='w-full px-4 py-3 border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-white placeholder-gray-500'
                                    required
                                />
                            ) : (
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={onChangeHandler}
                                    placeholder={`Enter your ${field}`}
                                    className='w-full px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-white placeholder-gray-500'
                                    required
                                />
                            )}
                        </motion.div>
                    ))}

                    <motion.button
                        type='submit'
                        variants={fadeInUp}
                        custom={5}
                        whileHover={{ scale: 1.05 }}
                        className='bg-gradient-to-r from-gray-800 via-purple-900 to-indigo-950 text-white font-semibold py-3 px-6 rounded-md border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105'
                    >
                        🚀 Submit Now
                    </motion.button>
                </motion.form>

            </motion.div>
        </section>
    );
};

export default Contact;
