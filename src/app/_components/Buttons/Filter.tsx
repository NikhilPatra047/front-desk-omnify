"use client";

import { useState } from "react";
import { filter } from "../../../../public";
import Image from "next/image";
export default function FilterButton(props: { handleOpen: () => void }) {
    const { handleOpen } = props;

    return (
        <button onClick={handleOpen} type="button" className="text-primary-color bg-[#F1F5F9] flex items-center justify-center gap-[6px] rounded-button p-[0.75em]">
            <Image src={filter} width={15} height={15} alt="Filter" />
            <p className="font-semibold text-[0.75rem] leading-[1.25rem]">Add Filter</p>
        </button>
    )
}