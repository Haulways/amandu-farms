import { ArrowRight, ArrowUpRight, Send } from "@carbon/icons-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Socials from "../assets/images/socials.png";

export default function Footer(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
    }
    return(
        <>
            <section className="xui-pt-3 xui-pb-5 xui-container footer">
                <div className="xui-lg-d-flex xui-d-none xui-flex-ai-center xui-py-2 xui-pos-relative footer-line-holder xui-flex-jc-space-between xui-flex-ai-center">
                    <p className="xui-font-sz-90 xui-w-400">Join Us</p>
                    <p className="xui-font-sz-90 amd-text-green bold-font xui-text-center" style={{"width": "calc(100% - 800px)"}}>Amandu Farm</p>
                    <p className="xui-font-sz-90 xui-w-400 bold-font xui-text-right">&copy; 2024 From Grascope</p>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-2'>
                    <div>
                        <p className='xui-font-sz-90 bold-font amd-text-green'>Follow us</p>
                        <img className="xui-mt-1 xui-img-150" src={Socials} alt="" />
                    </div>
                    <div>
                        <p className='xui-font-sz-90 bold-font amd-text-green'>Quick Links</p>
                        <HashLink smooth to="/#about" className="xui-opacity-6 xui-font-sz-80">About us</HashLink>
                        <HashLink smooth to="/#contact" className="xui-opacity-6 xui-font-sz-80 xui-mt-1-half">Contact us</HashLink>
                    </div>
                    <div>
                        <p className='xui-font-sz-90 bold-font amd-text-green'>Explore</p>
                        <HashLink smooth to="/privacy-policy" className="xui-opacity-6 xui-font-sz-80">Privacy Policy</HashLink>
                        <HashLink smooth to="/#collaborate" className="xui-opacity-6 xui-font-sz-80 xui-mt-1-half">Collaborate with us</HashLink>
                    </div>
                  
                    <div>
                        <form className="" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                            <p className='xui-font-sz-90 amd-text-green'>Subscribe</p>
                            <div className="xui-d-flex xui-flex-ai-items-center xui-font-sz-80 xui-mt-1">
                                <div className='xui-pr-1' style={{"width": "calc(100% - 40px)"}}>
                                    <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="xui-bdr-rad-10 amd-green-bg xui-text-white contact-input xui-form-input xui-font-sz-80" placeholder="Email address" />
                                </div>
                                <button className="xui-w-40 xui-h-40 xui-d-flex xui-p-none xui-flex-jc-center xui-flex-ai-center amd-green-bg xui-btn xui-bdr-rad-circle">
                                    <Send color='#FFF' />
                                </button>
                            </div>
                            {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                            {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                            
                        </form>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}