"use client";

import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import Image from "next/image";
import { search } from "../../../../public";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    }

    return (
        <div className="bg-[--table-fillin] custom-select rounded-[6px] flex items-center gap-2">
            <Image height={20} width={20} src={search} alt="Search" />
            <input value={searchInput} onChange={(e) => handleSearch(e)} type="search" name="" id="" className="w-full bg-[--table-fillin] outline-none" />
        </div>
    )
}