'use client';

import { useState } from "react";
import { editColumns } from "../../../../data/editColumns";
import { EditColumns } from "../../../../types/EditColumns";
import DefaultButton from "../Buttons/DefaultButton";
import ApplyButton from "../Buttons/ApplyButton";
import { useUpdateEditColumnContext } from "@/app/_context/context";

const List = () => {
    const { updateTableColumns } = useUpdateEditColumnContext();
    const [columnsData, setColumnsData] = useState<EditColumns[]>(editColumns);

    const showCheckBox = (id: number) => {
        const findItem = columnsData.find((item: EditColumns) => {
            if (item.id === id) {
                return item;
            }
        });
        if (findItem !== undefined) {
            findItem.isSelected = !findItem.isSelected;
        }

        setColumnsData((prevState: EditColumns[]) => {
            return [...prevState]
        });
    }

    const reset = () => {
        setColumnsData((prevState: EditColumns[]) => {
            const resetData = prevState.map((item: EditColumns) => {
                return {
                    ...item,
                    isSelected: true
                }
            });

            return [...resetData]
        });
    }

    return (
        <>
            <ul className="my-4 space-y-4 h-[300px] overflow-y-scroll">
                {
                    columnsData.map((column: EditColumns) => {
                        return <li key={column.id} className="flex items-center justify-between cursor-pointer">
                            <input id={`column-${column.id}`} type="checkbox" checked={column.isSelected} onClick={() => showCheckBox(column.id)} className="cursor-pointer" />
                            <label htmlFor={`column-${column.id}`} className="border-[1px] cursor-pointer border-tertiary-color rounded-[6px] py-[0.375em] px-[0.75em] w-[90%]">
                                <p className="text-primary-color font-medium text-[0.875rem]">{column.title}</p>
                            </label>
                        </li>
                    })
                }
            </ul>
            <div className="flex items-center justify-between">
                <DefaultButton onClickFunc={() => reset()}/>
                <ApplyButton styles="w-[45%]" onClickFunc={() => updateTableColumns(columnsData)} />
            </div>
        </>
    )
}

export default function EditColumnModal() {
    return (
        <div className="rounded-[12px] bg-white border-[1px] border-tertiay-color p-4 w-[320px] absolute right-[-50px] drop-shadow-xl">
            <div>
                <h2 className="text-[1rem] font-medium text-black">Edit Columns</h2>
                <p className="font-normal text-[0.875rem] text-primary-color mt-4">Select the columns to rearrange</p>
            </div>
            <List />
        </div>
    )
}