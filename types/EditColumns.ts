import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"
import { TableData } from "./TableData"

export type EditColumns = {
    id: number,
    title: string,
    isSelected: boolean,
    icon: StaticImageData,
    alt: string,
}

export type FilterRow = {
    [key: string]: string,
}

export type ColumnContext = {
    columns: EditColumns[],
}

export type UpdateColumnContext = {
    setColumns: Dispatch<SetStateAction<EditColumns[]>>,
    updateTableColumns: (columns: EditColumns[]) => void,
    // resetColumn: () => void,
    // checkColumn: (id: number) => void,
}