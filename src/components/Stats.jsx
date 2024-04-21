import CountUp from "react-countup";

export default function Stats(){
    return(
        <>
            <section className="xui-py-3 xui-container">
                <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                    <div>
                        <h3 className="xui-font-sz-300 xui-font-9">+<CountUp start={0} end={150} duration={2} /></h3>
                        <p className="xui-font-sz-80 xui-opacity-6 xui-mt-half">Farm Produce </p>
                    </div>
                    <div>
                        <h3 className="xui-font-sz-300 xui-font-9">+<CountUp start={0} end={100} duration={2} /></h3>
                        <p className="xui-font-sz-80 xui-opacity-6 xui-mt-half">Farming Workforce</p>
                    </div>
                    <div>
                        <h3 className="xui-font-sz-300 xui-font-9">+<CountUp start={0} end={10} duration={2} /></h3>
                        <p className="xui-font-sz-80 xui-opacity-6 xui-mt-half">Acres In Progress</p>
                    </div>
                    <div>
                        <h3 className="xui-font-sz-300 xui-font-9">+<CountUp start={0} end={5} duration={2} /></h3>
                        <p className="xui-font-sz-80 xui-opacity-6 xui-mt-half">Years Of Experience</p>
                    </div>
                </div>
                
            </section>
          
    
        </>
    )
}