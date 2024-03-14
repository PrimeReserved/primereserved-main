import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="my-12 w-full bg-gray-100 py-12 dark:bg-customDarkBg">
      <div className="container mx-auto flex items-center justify-center gap-12 xs:px-8 md:px-0">
        {/* Brand 1 */}
        <Image
          src="/images/brands/authorenergy.png"
          alt="Brand 1"
          width={100}
          height={40}
          style={{ padding: "0 4px" }}
        />
        {/* Brand 2 */}
        <Image
          src="/images/brands/noxylprime.png"
          alt="Brand 2"
          width={100}
          height={40}
          style={{ padding: "0 4px" }}
        />
        {/* Brand 3 */}
        <Image
          src="/images/brands/dignity.jpeg"
          alt="Brand 3"
          width={100}
          height={40}
          style={{ padding: "0 4px" }}
        />
      </div>
    </section>
  );
};

export default Brands;
