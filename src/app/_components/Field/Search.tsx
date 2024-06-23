"use client";

import { useFilterDataContext } from "@/app/_context/context";
import { ChangeEvent, useState } from "react";

export default function SearchField() {
    return (
        <input id="search-client" name="search-client" alt="search client" type="search" placeholder="Search client" className="py-2 px-6 my-input border-[1px] rounded-button font-medium text-[0.75rem] w-[230px] flex items-center" />
    )
}