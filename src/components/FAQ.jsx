/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQ = () => {
    const faqData = [
        {
          question: 'How do I prepare my soil for planting?',
          answer: 'To prepare soil for farming, begin by clearing debris and tilling the land. Incorporate organic matter like compost or manure to improve soil structure and nutrient content. Adjust pH levels if needed and balance nutrients with fertilizers. Consider mulching to retain moisture and suppress weeds. Utilize cover crops and conservation tillage methods to maintain soil health. Regular monitoring ensures optimal conditions for plant growth.'
        },
        {
          question: 'What are the benefits of using cover crops?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'How can I control weeds effectively without harming my crops?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'What are the key factors for successful crop rotation?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'How do I manage irrigation effectively to conserve water?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        }
    ];

    return (
        <>
        <section className="xui-py-3 xui-container xui-overflow-y-hidden xui-bg-white xui-max-w-950 xui-w-fluid-100 xui-mx-auto">
            <p className="xui-font-sz-90 amd-text-green-light xui-text-center">FAQs</p>
            <h3 className=" xui-font-sz-250 xui-mt-1 xui-text-center">Frequently Asked Questions</h3>
            <Accordionitem data={faqData}/>
        </section>
        </>
    )
};

export default FAQ;