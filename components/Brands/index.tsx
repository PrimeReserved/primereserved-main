import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="dark:bg-customDarkBg my-12 bg-gray-100 py-12">
      <div className="container mx-auto flex items-center justify-center gap-12">
        {/* Brand 1 */}
        <Image
          src="/images/brands/authorenergy.png"
          alt="Brand 1"
          width={100}
          height={40}
        />
        {/* Brand 2 */}
        <Image
          src="/images/brands/noxylprime.png"
          alt="Brand 2"
          width={100}
          height={40}
        />
        {/* Brand 3 */}
        <Image
          src="/images/brands/dignity.jpeg"
          alt="Brand 3"
          width={100}
          height={40}
        />
      </div>
    </section>
  );
};

export default Brands;
