"use client";
import React from "react";
import Image from "next/image";

const ImageBannerTwo = () => {
  return (
    <section className="marquee-container my-8 w-full overflow-hidden">
      {/* Desktop Image */}
      <div className="marquee-content hidden md:flex">
        {/* Duplicate the image to ensure continuous scrolling */}
        <div className="flex">
          <Image
            src="/images/homepage-images-two/bannerTwodesktop.png"
            alt="Desktop Image"
            layout="responsive"
            width={1920}
            height={400}
          />
          <Image
            src="/images/homepage-images-two/bannerTwodesktop.png"
            alt="Desktop Image"
            layout="responsive"
            width={1920}
            height={400}
          />
          <Image
            src="/images/homepage-images-two/bannerTwodesktop.png"
            alt="Desktop Image"
            layout="responsive"
            width={1920}
            height={400}
          />
          <Image
            src="/images/homepage-images-two/bannerTwodesktop.png"
            alt="Desktop Image"
            layout="responsive"
            width={1920}
            height={400}
          />
        </div>

        {/* Inline CSS */}
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }

          .marquee-content {
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
      {/* Mobile Image */}
      <div className="marquee-content block md:hidden">
        {/* Duplicate the image to ensure continuous scrolling */}
        <div className="flex">
          <Image
            src="/images/homepage-images-two/bannerTwo.svg"
            alt="Mobile Image"
            layout="responsive"
            width={375}
            height={200}
          />
          <Image
            src="/images/homepage-images-two/bannerTwo.svg"
            alt="Mobile Image"
            layout="responsive"
            width={375}
            height={200}
          />
          <Image
            src="/images/homepage-images-two/bannerTwo.svg"
            alt="Mobile Image"
            layout="responsive"
            width={375}
            height={200}
          />
          <Image
            src="/images/homepage-images-two/bannerTwo.svg"
            alt="Mobile Image"
            layout="responsive"
            width={375}
            height={200}
          />
        </div>
        {/* Inline CSS */}
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }

          .marquee-content {
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ImageBannerTwo;
