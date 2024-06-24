"use client";

import { PROPS } from "../../../../types/ImageButton";
import Image from "next/image";

export default function ImageButton(props: PROPS) {
  const { icon, alt, handleOpen } = props;

  return (
    <button onClick={handleOpen} type="button" className="h-full flex items-center justify-center">
      <Image src={icon} alt={alt} />
    </button>
  );
}
