import { useState } from "react";

export default function Services(){
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return(
        <>
            <section id="services" className="xui-py-3 xui-container">
                <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1">
                    <div>
                        <h3 className="xui-font-sz-150 xui-font-9 amd-text-grey">// Green Practices</h3>
                        <p className="xui-font-sz-120 xui-mt-half xui-ml-8">Our Services</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half">Learn about our sustainable farming methods and eco-friendly initiatives aimed at reducing our environmental footprint. From farm tours to farm-to-table dining, we offer a range of experiences designed to delight and inspire. Embark on a guided tour of our fields and learn about our organic farming practices.</p>
                    </div>
                </div>
                <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2 xui-mt-4">
                    <div>
                        <div className={'service ' + (activeTab === 0 ? 'amd-green-bg-light xui-bdr-none' : 'xui-bg-none')} onClick={() => handleTabClick(0)}>
                            <h3 className="xui-font-9 xui-font-sz-150"><span className="xui-d-inline-block xui-mr-half">01</span> Seeds and Seedlings</h3>
                        </div>
                        <div className={'service ' + (activeTab === 1 ? 'amd-green-bg-light xui-bdr-none' : 'xui-bg-none')} onClick={() => handleTabClick(1)}>
                            <h3 className="xui-font-9 xui-font-sz-150"><span className="xui-d-inline-block xui-mr-half">02</span> Fertilizers and Soil Enhancers </h3>
                        </div>
                        <div className={'service ' + (activeTab === 2 ? 'amd-green-bg-light xui-bdr-none' : 'xui-bg-none')} onClick={() => handleTabClick(2)}>
                            <h3 className="xui-font-9 xui-font-sz-150"><span className="xui-d-inline-block xui-mr-half">03</span> Soil Protection</h3>
                        </div>
                    </div>
                    <div>
                        {activeTab === 0 && 
                            <>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                            </>
                        }
                        {activeTab === 1 && 
                            <>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                            </>
                        }
                        {activeTab === 2 && 
                            <>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                                <p className="xui-opacity-8 xui-font-sz-80 xui-mt-2 xui-line-height-1-half">Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops</p>
                            </>
                        }
                    </div>
                </div>
                
            </section>
          
    
        </>
    )
}