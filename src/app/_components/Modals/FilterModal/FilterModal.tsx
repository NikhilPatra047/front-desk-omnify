"use client";

import { useFilterOptionContext } from "@/app/_context/context";
import ApplyButton from "../../Buttons/ApplyButton";
import DefaultButton from "../../Buttons/DefaultButton";
import FilterOptionList from "./FilterOptionList";
import PeopleView from "./FilterViews/PeopleView";
import ScheduledDateView from "./FilterViews/ScheduledDateView";
import ServicesView from "./FilterViews/ServiceView/ServicesView";

export default function FilterModal() {
    const { options } = useFilterOptionContext();
    return (
        <div className="absolute left-0 top-12 w-[612px] border-[1px] border-tertiary-color drop-shadow-xl rounded-[12px] bg-white">
            <div className="flex border-b-[1px] border-b-[--tertiary-color]">
                <div className="bg-[--table-fillin] border-r-[--tertiary-color] border-r-[1px] rounded-tl-[6px] p-2 w-[230px] h-[344px]">
                    <FilterOptionList />
                </div>
                <div className="bg-white rounded-tr-[12px]">
                    {
                        options === 0
                        ? <ScheduledDateView />
                        : options === 1
                          ? <PeopleView />
                          : <ServicesView />
                    }
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 p-4">
                <DefaultButton />
                <ApplyButton />
            </div>
        </div>
    )
}