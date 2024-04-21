import Product1 from "../assets/images/product1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.png";
import Product4 from "../assets/images/product4.png";
export default function Products(){
    return(
        <>
            <section id="products" className="xui-py-3 xui-container">
                <h1 className="xui-lg-font-sz-300 xui-font-9 xui-lg-w-fluid-60 xui-w-fluid-100 xui-font-w-500 xui-font-sz-300 bold-font"><span className="amd-text-grey">Rooted In</span> Sustainable Farming, Shaping <span className="amd-text-grey">The Future Of</span> Food Production.</h1>
                <div className="xui-d-grid xui-lg-grid-col-5 xui-grid-col-1 xui-mt-3 xui-grid-gap-1">
                    <div className="">
                        <p className="xui-font-sz-100 xui-font-w-medium">Our Sustainable Products</p>
                    </div>
                    <div>
                        <img className="xui-h-300" src={Product1} alt="" />
                        <p className="xui-font-sz-90 xui-mt-1">Technology Irrigation</p>
                    </div>
                    <div>
                        <img className="xui-h-300" src={Product2} alt="" />
                        <p className="xui-font-sz-90 xui-mt-1">Organic Grains</p>
                    </div>
                    <div>
                        <img className="xui-h-300" src={Product3} alt="" />
                        <p className="xui-font-sz-90 xui-mt-1">Livestock Produce</p>
                    </div>
                    <div>
                        <img className="xui-h-300" src={Product4} alt="" />
                        <p className="xui-font-sz-90 xui-mt-1">Organic Vegetables</p>
                    </div>
                </div>
                
            </section>
          
    
        </>
    )
}