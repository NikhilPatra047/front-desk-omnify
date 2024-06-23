import { Dispatch, SetStateAction } from "react"
import { TableData } from "./TableData"

export type FilterContext = {
    options: number,
    switchOption: (id: number) => void,
}

export type FilterData = {
    filterPeopleList: (searchInput: string) => (Selected_People | undefined)[],
    filterServiceList: (searchInput: string) => (Selected_Service | undefined)[],
}

export type Selected_People = {
    id: number,
    name: string,
    type: string,
}

export type Selected_Service = {
    id: number,
    serviceName: string, 
    type: string,
    status: string,
}

export type FilterSelection = {
    scheduledData: {
        orders: string | null,
        fromDate: string | null,
        toDate: string | null
    },
    people: { id: number, name: string, type: string }[],
    services: {
        byName: { id: number, serviceName: string, type: string, status: string }[],
        byTags: {
            serviceType: string | null,
            statusType: string | null,
        },
    },
}

export type FilterSelectionContextType = {
    filterSelection: FilterSelection, 
    // setFilterSelection: Dispatch<SetStateAction<FilterSelection>>,
    filterAddPeople: (selectedPeople: Selected_People) => void,
    filterAddService: (selectedService: Selected_Service) => void,
    resetServicesByTag: () => void,
    resetServicesByName: () => void,
    storeListSelection: (id: number, label: string, selection: string) => void, 
    resetAllSelections: () => void,
}

export type SidebarContextType = {
    sidebar: boolean,
    handleSidebar: () => void,
}