"use client";

import Image from "next/image";
import { arrow_down, calendar, filter } from "../../../../../../public";
import { scheduledListItem } from "../../../../../../data/scheduledListItem";
import ListDropdown from "@/app/_components/Common/ListDropdown";
import { useFilterOptionContext, useFilterSelectionContext } from "@/app/_context/context";
import { useState } from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns";

export function DatePicker(props: { label: string }) {
    const { label } = props;
    const filterSelectionContext = useFilterSelectionContext();
    const [date, setDate] = useState<Date>();

    const handleDateSelection = (date: Date) => {
        const dateInNumbers = date?.getTime();
        filterSelectionContext?.filterAddDate(dateInNumbers, label);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-[50%]">
                    <label htmlFor={label}>
                        <p className="text-[0.875rem] text-primary-color font-medium">{ label }</p>
                    </label>
                    <Button
                    aria-labelledby={label}
                        id={label}
                        variant={"outline"}
                        className={cn(
                            "w-full border-[2px] border-[--tertiary-color] py-[1em] px-[0.8em] mt-2 justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <Image className="mr-2" height={16} width={16} src={calendar} alt="pick a date" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    onDayClick={(date) => handleDateSelection(date)}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}


export default function ScheduledDateView() {
    const optionContext = useFilterOptionContext();
    const selectionContext= useFilterSelectionContext();

    return (
        <div className="w-[382px] p-4 h-full">
            <div>
                <ListDropdown id={optionContext?.options as number} label="Show orders for" list={scheduledListItem} selectedLabel={selectionContext!.filterSelection.scheduledData.orders as string} />
            </div>
            {
                selectionContext?.filterSelection.scheduledData.orders === "Custom" &&
                (<div className="flex mt-4 items-center justify-between gap-2">
                    <DatePicker label="From" />
                    <DatePicker label="To" />
                </div>
                )
            }
        </div>
    )
}