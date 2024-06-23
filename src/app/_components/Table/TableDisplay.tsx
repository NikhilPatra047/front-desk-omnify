"use client";

import Image from "next/image";
import { useMemo } from "react";
import { TableData } from "../../../../types/TableData";
import StatusTag from "../Tag/StatusTag";
import { EditColumns, FilterRow } from "../../../../types/EditColumns";
import { tableData } from "../../../../data/tableData";
import { useEditColumnContext, useFilterSelectionContext } from "@/app/_context/context";

export default function TableDisplay() {
    const EditColumn = useEditColumnContext(); 

    const filterSelected = useMemo(() => EditColumn?.columns.filter((data: EditColumns) => data.isSelected).map((data: EditColumns) => data.title.toLowerCase()), [EditColumn?.columns]);
    
    const filteredRows = useMemo(() => tableData.map((data: TableData) => {
        const filteredRow: FilterRow = {};
        for (const key in data) {
            if (filterSelected?.includes(key)) {
                const newKey = key as string | number;
                filteredRow[key] = data[newKey];
            }
        }
        return filteredRow;
    }), [filterSelected]);

    return (
        <div className="border-[1px] border-[--tertiary-color] rounded-button mt-6"> 
            <table className="w-full table-display">
                <thead className="capitalize rounded-t-button block bg-[--table-fillin] border-b-[1px] border-b-tertiary-color">
                    <tr className="flex justify-between w-full py-[0.5em] px-[1em] rounded-tl-[10px] rounded-tr-[10px]">
                        <th>
                            <input className="checkbox" type="checkbox" checked={false} />
                        </th>
                        {
                            EditColumn?.columns.map((column: EditColumns) => {
                                if (column.isSelected) {
                                    return (
                                        <th key={column.id}>
                                            <Image height={15} width={15} src={column.icon} alt={column.alt} />
                                            <p>{column.title}</p>
                                        </th>
                                    )
                                }
                            })
                        }
                    </tr>
                </thead>
                <tbody className="block rounded-b-button h-[60vh]  overflow-y-scroll">
                    {
                        filteredRows.map((data: FilterRow) => {
                            return (
                                <tr key={data.id} className="flex py-[0.5em] px-[1em]">
                                    <td><input className="checkbox" type="checkbox" /></td>
                                    {data["created on"] && <td><p>{data["created on"]}</p></td>}
                                    {data.payer && <td><p>{data.payer}</p></td>}
                                    {data.status && <StatusTag status={data.status} />}
                                    {data.email && <td><p>{data.email}</p></td>}
                                    {data["payer phone"] && <td><p>{data["payer phone"]}</p></td>}
                                    {data.services && <td><p>{data.services}</p></td>}
                                    {data.scheduled && <td><p>{data.scheduled}</p></td>}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}