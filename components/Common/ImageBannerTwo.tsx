import React from "react";
import Image from "next/image";

const ImageBannerTwo = () => {
  return (
    <section className="my-8 w-full">
      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image
          src="/images/homepage-images-2/banner2desktop.png"
          alt="Desktop Image"
          layout="responsive"
          width={1920}
          height={400}
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden">
        <Image
          src="/images/homepage-images-2/banner2mobile.png"
          alt="Mobile Image"
          layout="responsive"
          width={375}
          height={200}
        />
      </div>
    </section>
  );
};

export default ImageBannerTwo;
