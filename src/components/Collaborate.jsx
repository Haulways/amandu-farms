import { useForm } from "react-hook-form";
import CollabImage from "../assets/images/collab-image.jpg";
export default function Collaborate(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
    }
    return(
        <>
            <section id="collaborate" className="xui-py-3 xui-container">
                <div className="xui-bg-sz-cover xui-bg-pos-center xui-text-white xui-bdr-rad-2" style={{"backgroundImage": `url('${CollabImage}')`}}>
                    <div className="xui-overlay-1 xui-p-2 xui-bdr-rad-2">
                        <h1 className=" xui-lg-w-fluid-80 xui-w-fluid-100 xui-font-sz-250">Join And Collaborate with other Agricultural Enthusiasts.</h1>
                        <p className="xui-font-sz-90 xui-lg-w-fluid-40 xui-w-fluid-100 xui-opacity-8 xui-line-height-1-half xui-mt-half">Join our growing community of nature lovers, food enthusiasts, and sustainability advocates as we work together to create a better world, one harvest at a time.</p>
                        <div className="xui-mt-2 xui-d-flex xui-flex-jc-flex-end">
                            <form className="xui-mt-4" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                                <div className="xui-d-flex xui-bdr-rad-1-half xui-flex-ai-center xui-p-half xui-font-sz-90 xui-mt-half xui-bg-white">
                                    <input style={{"width": "calc(100% - 100px)", "outline": "none", "border": "none", "padding": "0 0 0 1rem", "border": "none"}} {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="xui-bdr-rad-5 xui-bdr-rad-1 xui-bg-white xui-font-sz-90" placeholder="Your email address" />
                                    <button className="xui-w-100 xui-btn xui-py-half xui-font-sz-100 xui-bdr-rad-1 amd-green-bg xui-text-white">
                                        <p className="">Join now</p>
                                    </button>
                                </div>
                                {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                                {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                                
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
          
    
        </>
    )
}