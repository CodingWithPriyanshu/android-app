import React from "react";
import assets from '@/public/assets/assets';
import Image from "next/image";

const page = () => {
  return (
    <>
      <Image src={assets.banner1} height={500} width={500} alt="banner" priority />
      <div>this is page</div>
    </>
  );
};

export default page;
