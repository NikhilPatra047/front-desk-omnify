"use client";

import Image from "next/image";
import { arrow_down, select } from "../../../../public";
import { List, ListProps } from "../../../../types/ListProps";
import { useEffect, useState } from "react";
import {  useFilterSelectionContext } from "@/app/_context/context";

export default function ListDropdown(props: ListProps) {
    const { label, list, selectedLabel, id } = props;
    const selectionContext = useFilterSelectionContext();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectLabel, setSelectLabel] = useState<string>(() => {
        return selectedLabel !== null? selectedLabel: list[0].label;
    });

    const [selectOption, setSelectOption] = useState<number>(() => {
        const findName = list.find((item: List) => item.label === selectedLabel);
        if (findName) {
            return findName.id
        } else {
            return 0;
        }
    }); 

    useEffect(() => {
        const findName = list.find((item: List) => item.label === selectedLabel);
        setSelectLabel(selectedLabel !== null? selectedLabel: list[0].label);
        setSelectOption(findName? findName.id: 0);
    }, [selectedLabel, list]);

    const selectedOption = (selectedId: number) => {
        if (id === 2 && selectionContext!.filterSelection.services.byName.length > 0) {
            clearSelection();
        }
        const findLabel = list.find((item: List) => item.id === selectedId);
        if (findLabel) {
            selectionContext?.storeListSelection(id, label, findLabel.label)
            setSelectLabel(findLabel.label);
        }
        setSelectOption(selectedId);
        setIsOpen(!isOpen);
    }

    const clearSelection = () => {
        if (id === 2) {
            selectionContext?.resetServicesByName();
        }
    }

    return (
        <>
            <label htmlFor="orders">
                <p className="text-primary-color text-[0.875rem] font-medium">{ label }</p>
            </label>
            <div onClick={() => setIsOpen(!isOpen)} className={`custom-select shadow-sm mt-2 border-[2px] ${isOpen? "border-[--secondary-color]": "border-[--boundary-color]"}`} id="orders">
                <p className="font-medium text-[0.875rem] text-secondary-color">{ selectLabel }</p>
                <Image className="absolute top-[0.7em] right-2" src={arrow_down} alt="" />
                <div className={`${isOpen? "translate-y-0 opacity-100": "opacity-0 translate-y-[-10px]"} absolute top-12 z-10 left-0 w-full bg-white border-[1px] border-[--secondary-boundary-color] rounded-button transition-all duration-150 ease-in-out`}>
                    <ul className={`${!isOpen && "hidden"}`}>
                        {
                            list.map((item: List) => {
                                return <li onClick={() => {
                                    selectedOption(item.id);
                                }} className="py-2 px-[0.8em] hover:bg-[--table-fillin] cursor-pointer rounded-button flex items-center justify-between" key={item.id}>
                                    <p className="text-primary-color font-medium text-[0.875rem]">{item.label}</p>
                                    { selectOption === item.id && <Image src={select} alt="" /> }
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
