import React, { useContext } from 'react'
import '../../styles/Enquire.scss'
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../context/AppContext';

function Enquire() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setFormOpen,formOpen } = useAppContext()

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic (e.g., sending data to a server)
    };
    function handleClose(e){
        e.preventDefault()
        setFormOpen(false)

    }

    return (
        <>
            <div className={`enquire_main ${formOpen}`}>
            <div className={`enquire_container ${formOpen}`}>
                <div className='enquire_div1'>
                    <h1>CONNECT US</h1>
                    <p>Fill in the form below, our team will be in touch.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form_div'>
                            <label htmlFor="services">Services</label>
                            <select {...register("services", { required: "Please select a service" })} id="services">
                                <option value="">Select a service</option>
                                <option value="web-development">Web Development</option>
                                <option value="app-development">App Development</option>
                                <option value="digital-marketing">Digital Marketing</option>
                            </select>
                            {errors.services && <p>{errors.services.message}</p>}
                        </div>

                        <div className='form_div'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required", maxLength: 30 })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>

                        <div className='form_div'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address" }
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div className='form_div'>
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="tel"
                                id="mobile"
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" }
                                })}
                            />
                            {errors.mobile && <p>{errors.mobile.message}</p>}
                        </div>

                        <div className='form_div'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                        <div className='form_div'>
                            <button type="submit">Submit</button>

                        </div>
                    </form>
                </div>

            </div>
            <div className='btn_container' onClick={handleClose}>
                <button className="button-container" type="button" onClick={() => setIsFormOpen(false)}>
                    <a href="#" class="close-button">
                        <div class="in">
                            <div class="close-button-block"></div>
                            <div class="close-button-block"></div>
                        </div>
                        <div class="out">
                            <div class="close-button-block"></div>
                            <div class="close-button-block"></div>
                        </div>
                    </a>
                </button>
            </div>

        </div>
        </>
    )
}

export default Enquire