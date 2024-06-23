"use client";

import Image from "next/image";
import { arrow_down, calendar, filter } from "../../../../../../public";
import { scheduledListItem } from "../../../../../../data/scheduledListItem";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import ListDropdown from "@/app/_components/Common/ListDropdown";
import { useFilterOptionContext, useFilterSelectionContext } from "@/app/_context/context";
import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const DatePicker = () => {
    const [date, setDate] = useState<Date>();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <Image src={calendar} alt="pick a date" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
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
    const { options } = useFilterOptionContext();
    const { filterSelection } = useFilterSelectionContext();


    return (
        <div className="w-[382px] p-4 h-full">
            <div>
                <ListDropdown id={options} label="Show orders for" list={scheduledListItem} selectedLabel={filterSelection.scheduledData.orders} />
            </div>
            {
                filterSelection.scheduledData.orders === "Custom" &&
                (<div>
                    <DatePicker />
                </div>)
            }
        </div>
    )
}