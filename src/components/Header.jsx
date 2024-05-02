import { HashLink } from "react-router-hash-link";
import HeaderImage from "../assets/images/header-image.jpg";
import HeaderInnerImage from "../assets/images/header-inner-image.png";
import Navbar from "../components/Navbar";
import { ArrowDown, ArrowRight } from "@carbon/icons-react";

export default function Header(){
    return(
        <>
            <section id="home" className="xui-bg-sz-cover xui-bg-pos-center xui-text-white" style={{"backgroundImage": `url('${HeaderImage}')`}}>
                {/* <Navbar /> */}
                <div className="xui-h-fluid-100 xui-overlay-1 amd-header xui-container">
                    <div className="xui-lg-mt-5 xui-mt-2 xui-d-flex ">
                        <div className="xui-lg-w-250 xui-w-fluid-100">
                            <h1 className="xui-lg-font-sz-450 xui-lg-pos-absolute xui-pos-static xui-z-index-1 xui-font-w-500 xui-font-sz-300 bold-font">Revolutionizing Agriculture Through Innovation</h1>
                            <p className="xui-font-sz-90 xui-mt-1 xui-opacity-8 xui-line-height-1-half lg-mt-14 mt-14">Dive Into A World Of Possibilities Where Traditional Farming Meets Modern Solutions</p>
                        </div>
                        <div className="amd-header-middle">
                            <div className="xui-bg-sz-cover xui-lg-mt-none xui-mt-1 xui-p-3 xui-bg-pos-center amd-header-inner xui-d-flex xui-flex-ai-flex-end xui-flex-jc-center" style={{"backgroundImage": `url('${HeaderInnerImage}')`}}>
                                <p className="xui-font-sz-120 xui-lg-w-fluid-70 xui-w-fluid-100 ">Explore Sustainable Agricultural Produce And Diverse Agricultural Innovations</p>
                            </div>
                            <HashLink smooth to='#about' className="amd-green-bg xui-text-white xui-ml-5 xui-mt-1-half xui-mb-2 xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-py-half xui-pl-1 xui-pr-half">
                                <p className="xui-font-sz-90">Our Solutions</p>
                                <span className="xui-w-35 xui-h-35 xui-ml-4 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <ArrowRight color="#020031" />
                                </span>
                            </HashLink>
                        </div>
                        <div className="xui-lg-w-250 xui-w-fluid-100 xui-d-flex xui-flex-ai-flex-end xui-flex-jc-flex-end">
                            <HashLink smooth to='#about' className="xui-text-white xui-bdr-rad-10 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center">
                                <p className="xui-font-sz-90">Explore More</p>
                                <ArrowDown color="#FFF" strokeWidth='1.2' className="xui-ml-1" />
                            </HashLink>
                        </div>
                        
                    </div>
                </div>
                
            </section>
          
    
        </>
    )
}