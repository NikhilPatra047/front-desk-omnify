"use client";

import { useCallback, useState } from "react";
import SearchByNameView from "./SearchByName";
import SearchByTagView from "./SearchByTag";
import { useFilterSelectionContext } from "@/app/_context/context";

export default function ServicesView() {
    const [selectOption, setSelectOption] = useState<number>(0);

    const isChecked = useCallback((id: number) => {
        return selectOption === id;
    }, [selectOption]);

    return (
        <div className="w-[382px] h-full p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 relative">
                    <input checked={isChecked(0)} onClick={() => setSelectOption(0)} type="radio" name="" id="search-name" />
                    <label htmlFor="search-name">
                        <span className="inline-block text-primary-color font-normal text-[0.875rem]">Search by name</span>
                    </label>
                </div>
                <div className="flex items-center gap-2 relative">
                    <input checked={isChecked(1)} onClick={() => setSelectOption(1)} type="radio" name="" id="search-tags" />
                    <label htmlFor="search-tags">
                        <span className="inline-block text-primary-color font-normal text-[0.875rem]">Search by tags</span>
                    </label>
                </div>
            </div>
            {
                selectOption === 0
                ? <SearchByNameView />
                : <SearchByTagView />
            }
        </div>
    )
}