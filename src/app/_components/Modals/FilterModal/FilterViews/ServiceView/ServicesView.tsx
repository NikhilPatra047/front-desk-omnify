"use client";

import { useCallback, useState } from "react";
import SearchByNameView from "./SearchByName";
import SearchByTagView from "./SearchByTag";

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
                        <p>Search by name</p>
                    </label>
                </div>
                <div className="flex items-center gap-2 relative">
                    <input checked={isChecked(1)} onClick={() => setSelectOption(1)} type="radio" name="" id="search-tags" />
                    <label htmlFor="search-tags">
                        <p>Search by tags</p>
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