import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { HoverImageCard } from "../../components/hover-image-card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const DesktopHome = (): JSX.Element => {
  const [showScrollTop, setShowScrollTop] = useState(false);
const [selectedSize, setSelectedSize] = useState<string | null>(null);
const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Size options data
  const sizeOptions = ["XS", "S", "M", "L", "XL"];

  // Footer navigation links data
  const footerLinks = [
    ["Home", "About", "Buy"],
    ["Our Customers"],
    ["Contacts"],
  ];

  // Accordion items data
  const accordionItems = [
    { id: "size-fit", title: "Size & Fit" },
    { id: "delivery-returns", title: "Delivery & Returns" },
    { id: "how-made", title: "How This Was Made" },
  ];

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
       <div id="top"></div>
      <div className="bg-[#070707] overflow-hidden w-[1440px] relative">
        {/* Fixed Navigation Bar */}
       <header className="fixed w-full top-0 left-0 z-50">
  <div className="h-[85px] bg-[#00000096] backdrop-blur-[18.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.5px)_brightness(100%)]">
    <div className="w-full px-[60px] flex items-center justify-between h-[85px] max-w-[1440px] mx-auto">
      {/* Logo */}
     <a
  href="#top"
  className="w-[49px] h-[45px] rounded-[5px] bg-[url(/frame-8.png)] bg-cover bg-center block"
/>

      {/* Navigation */}
      <nav className="flex items-center gap-16">
        <Link to="/aboutus">
  <div className="cursor-pointer [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px]">
    About Us
  </div>
</Link>

        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px]">
          Waitlist
        </div>
       <div
  onClick={() => navigate("/checkout")}
  className="cursor-pointer [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.39px]"
>
  Cart
</div>


       <Button
  onClick={() => navigate("/checkout")}
  className="bg-white hover:bg-red-500 transition-colors duration-300 text-black hover:text-white rounded-[8.71px] px-[38.69px] py-[14.51px] [font-family:'Helvetica_Neue-Medium',Helvetica] text-[19.3px] tracking-[-0.39px] h-auto"
>
  Buy
</Button>

      </nav>
    </div>
  </div>
</header>

        {/* Brand Name Section */}
        <div className="relative w-[385px] h-[129px] mt-[200px] ml-11">
          <div className="absolute top-0 left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[107.1px] tracking-[-1.07px] leading-[normal]">
            Eclypse
          </div>
          <div className="absolute w-[27px] h-[26px] top-7 left-[356px] bg-[url(/group.png)] bg-[100%_100%]" />
        </div>

        {/* Year Indicator */}
        <div className="absolute w-[53px] h-[18px] top-[309px] left-[1339px] flex items-center">
          <div className="absolute w-[11px] h-[11px] top-1 left-0 bg-[url(/group-1.png)] bg-[100%_100%]" />
          <div className="absolute left-[19px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px]">
            2025
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-white hover:bg-red-500 transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}

        {/* Hero Image */}
        <div className="relative w-[1339px] h-[530px] mt-[30px] mx-auto rounded-[5px] overflow-hidden bg-[url(/3753692-uhd-3840-2160-25fps-1.png)] bg-cover bg-center">
          <div className="absolute bottom-[32px] right-[170px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[34.6px] tracking-[-0.69px]">
            A silhouette worth remembering
          </div>
        </div>

        {/* Brand Philosophy */}
        <div className="w-[800px] mt-[183px] ml-[50px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </div>

        {/* Learn More Link */}
        <div className="w-[312px] h-[41px] mt-[71px] ml-[50px] relative">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px]">
            Learn more about Eclypse
          </div>
          <Separator className="w-[301px] mt-2 bg-white/50" />
          <img
            className="absolute w-[39px] h-[39px] top-0 right-0"
            alt="Arrow right"
            src="/arrow-right.svg"
          />
        </div>

        {/* Image Gallery */}
        <div className="mt-[119px] mx-[50px] grid grid-cols-3 gap-[35px]">
          <div className="w-full h-[489px] rounded-[5px] bg-[url(..//frame-3.png)] bg-cover bg-center col-span-2" />
          <div className="w-full h-[489px] rounded-[5px] bg-[url(..//frame-18-2.png)] bg-cover bg-center" />
        </div>

        {/* Second Image Gallery */}
       <div className="mt-[28px] mx-[50px] grid grid-cols-3 gap-[35px]">
  <HoverImageCard
    imageSrc="/frame-18.png"
    text="Tailored for timelessness"
  />
  <HoverImageCard
    imageSrc="/frame-18-1.png"
    text="Designed with precision"
  />
  <HoverImageCard
    imageSrc="/frame-8.png"
    text="Eclypse"
  />
</div>



        {/* Product Title */}
        <div className="w-[800px] mt-[183px] ml-[43px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Silhouette No. 1 – Vermilion
        </div>

        {/* Product Showcase */}
        <Card className="w-full mt-[60px] bg-[#f6f6f6] rounded-none border-none">
          <CardContent className="p-0 flex">
            {/* Product Image */}
            <img
              className="w-[703px] h-[912px] object-cover"
              alt="Vermilion garment"
              src="/rectangle-2.png"
            />

            {/* Product Details */}
            <div className="flex-1 p-[53px]">
              {/* Product Description */}
              <p className="w-[539px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-normal">
                A tailored composition in motion. Cut from structured wool with
                a sculpted shoulder and softened hem, this piece captures
                presence without force. Worn here in the stillness of a city in
                motion.
              </p>

              {/* Product Images */}
              <div className="flex gap-[25px] mt-[85px]">
                <div className="w-52 h-[199px] bg-[url(..//frame-12.png)] bg-cover bg-center" />
                <div className="w-52 h-[199px] bg-[url(..//frame-11.png)] bg-cover bg-center" />
                <div className="w-52 h-[199px] bg-[url(..//frame-13.png)] bg-cover bg-center" />
              </div>

              <Separator className="mt-[49px] bg-black/20" />

              {/* Price */}
             <div className="mt-[54px] flex items-baseline gap-4">
  <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px]">
    ₹ 7,999
  </div>
  <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px]">
    MRP incl. of all taxes
  </div>
</div>

              {/* Size Selection */}
              <div className="mt-[82px] flex items-center">
                <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px]">
                  Please select a size
                </div>
                <a
                  href="#"
                  className="ml-[28px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline"
                >
                  Size chart
                </a>
              </div>

              {/* Size Options */}
              <div className="flex gap-[32px] mt-[25px]">
  {sizeOptions.map((size, index) => (
    <Button
      key={index}
      onClick={() => setSelectedSize(size)}
      variant="outline"
      className={`w-[82px] h-[49px] rounded border-none
        [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]
        ${selectedSize === size
          ? "bg-black text-white"
          : "bg-[#d9d9d9] text-[#767676]"}
      `}
    >
      {size}
    </Button>
  ))}
</div>


              <Separator className="mt-[53px] bg-black/20" />

              {/* Action Buttons */}
              <div className="flex gap-8 mt-[86px]">
               <Button
    onClick={() => navigate("/checkout")}
    variant="outline"
    className="w-1/3 h-[66px] rounded-[8.71px] border-2 border-solid border-[#c2c2c2] bg-white [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px] hover:bg-white hover:text-[#0d0d0d] hover:border-black transition-colors duration-300"
  >
    Add to Cart
  </Button>

  {/* Buy Button */}
  <Button
    onClick={() => navigate("/checkout")}
    className="w-2/3 h-[66px] rounded-[8.71px] bg-black hover:bg-red-500 transition-colors duration-300 [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]"
  >
    Buy
  </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accordion Sections */}
        <div className="mt-[179px] mx-[50px]">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-t border-white/20 py-5"
              >
                <AccordionTrigger className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {/* Content would go here */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Separator className="mt-[40px] mx-[50px] w-[1342px] bg-white/20" />

      {/* Customer Testimonial */}
<div className="mt-[154px] mx-[50px] relative">
  <div className="[font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px]">
    OUR CUSTOMERS
  </div>

  <div className="relative mt-[92px] flex justify-between items-start">
    {/* Text Section */}
    <div className="relative w-[750px]">
      <div className="flex">
        <div className="text-white text-[118.8px] leading-none mr-6 mt-[-30px] [font-family:'Coolvetica-Regular',Helvetica]">
          &ldquo;
        </div>
        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-[44px] leading-tight">
          Understated, but unforgettable. It<br />feels like it was made for me
        </div>
      </div>

      <div className="mt-[40px] ml-[10px]">
        <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-xl">
          Random Woman
        </div>
        <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#666] text-base mt-1">
          NY, USA
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex flex-col items-center gap-6">
      <img
        className="w-[126px] h-[126px] rounded-full object-cover"
        alt="Testimonial avatar"
        src="/ellipse-3.png"
      />
      <img
        className="w-[69px] h-[69px] rounded-full object-cover"
        alt="Testimonial decoration"
        src="/ellipse-4.png"
      />
      <img
        className="w-[69px] h-[69px] rounded-full object-cover"
        alt="Testimonial decoration"
        src="/ellipse-5.png"
      />
    </div>
  </div>
</div>


        <Separator className="mt-[100px] mx-[50px] w-[1342px] bg-white/20" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 mt-[72px] mx-[50px] bg-[#090808]">
          <div className="flex flex-col items-start gap-[67px]">
            {/* Brand Logo */}
            <div className="flex items-start gap-2">
              <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8">
                Eclypse
              </div>
              <img
                className="w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
                alt="Vector"
                src="/vector-2.svg"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {footerLinks.map((linkGroup, groupIndex) => (
                <div key={groupIndex} className="flex items-start gap-4">
                  {linkGroup.map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm leading-[19.6px]">
                        {link}
                      </div>
                      {linkIndex < linkGroup.length - 1 && (
                        <div className="opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px]">
                          /
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start justify-end gap-8 flex-1 self-stretch">
            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px]">
                CONTACT
              </div>
              <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px]">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px]">
                EMAIL
              </div>
              <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px]">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Copyright */}
          <div className="flex items-end justify-end flex-1">
            <div className="opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] leading-[13px]">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal">
                ©
              </span>
              <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};