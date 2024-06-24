'use client';

import { createContext, useState, useContext, ReactNode, useCallback } from "react";
import { ColumnContext, EditColumns, UpdateColumnContext } from "../../../types/EditColumns";
import { editColumns } from "../../../data/editColumns";
import { FilterContext, FilterData, FilterSelection, FilterSelectionContextType, Selected_People, Selected_Service, SidebarContextType } from "../../../types/Filter";
import { tableData } from "../../../data/tableData";
import { TableData } from "../../../types/TableData";
import { FilterRow } from "../../../types/EditColumns";

const EditColumnContext = createContext<ColumnContext | null>(null);
const UpdateEditColumnContext = createContext<UpdateColumnContext | null>(null);
const FilterOptionContext = createContext<FilterContext | null>(null);
const FilterDataContext = createContext<FilterData | null>(null);
const FilterSelectionContext = createContext<FilterSelectionContextType | null>(null);
const SidebarContext = createContext<SidebarContextType | null>(null);

export default function ContextProvider({ children }: { children: ReactNode }) {
    const [sidebar, setSidebar] = useState<boolean>(false);

    const handleSidebar = useCallback(() => {
        setSidebar(!sidebar);
    }, [sidebar])

    const [filterSelection, setFilterSelection] = useState<FilterSelection>({
        scheduledData: {
            orders: null,
            fromDate: null,
            toDate: null
        },
        people: [],
        services: {
            byName: [],
            byTags: {
                serviceType: null,
                statusType: null,
            },
        },
    });

    const [columns, setColumns] = useState<EditColumns[]>(editColumns);
    const [options, setOptions] = useState<number>(0);

    const switchOption = useCallback((id: number) => {
        setOptions(id);
    }, []);

    const resetAllSelections = () => {
        setFilterSelection({
            scheduledData: {
                orders: null,
                fromDate: null,
                toDate: null
            },
            people: [],
            services: {
                byName: [],
                byTags: {
                    serviceType: null,
                    statusType: null,
                },
            },
        });
    }

    const filterAddDate = (date: number, label: string) => {
        if (label === "From") {
            setFilterSelection((prevState: FilterSelection) => {
                return {
                    ...prevState, 
                    scheduledData: {
                        ...prevState.scheduledData,
                        fromDate: date,
                    }
                }
            });
        } else {
            setFilterSelection((prevState: FilterSelection) => {
                return {
                    ...prevState, 
                    scheduledData: {
                        ...prevState.scheduledData,
                        toDate: date,
                    }
                }
            });
        }
    }

    const resetDateSelection = () => {
        setFilterSelection((prevState: FilterSelection) => {
            return {
                ...prevState, 
                scheduledData: {
                    ...prevState.scheduledData,
                    fromDate: null,
                    toDate: null,
                }
            }
        });
    }

    const resetServicesByName = () => {
        setFilterSelection((prevState: FilterSelection) => {
            return {
                ...prevState, 
                services: {
                    ...prevState.services,
                    byName: []
                }
            }
        });
    }

    const resetServicesByTag = () => {
        setFilterSelection((prevState: FilterSelection) => {
            return {
                ...prevState, 
                services: {
                    ...prevState.services,
                    byTags: {
                        serviceType: null,
                        statusType: null,
                    }
                }
            }
        });
    }

    const storeListSelection = (id: number, label: string, selection: string) => {
        switch(id) {
            case 2:
                if (label === "Service type") {
                    setFilterSelection((prevState: FilterSelection) => {
                        return {
                            ...prevState, 
                            services: {
                                ...prevState.services,
                                byTags: {
                                    ...prevState.services.byTags,
                                    serviceType: selection,
                                }
                            }
                        }
                    });
                } else {
                    setFilterSelection((prevState: FilterSelection) => {
                        return {
                            ...prevState, 
                            services: {
                                ...prevState.services,
                                byTags: {
                                    ...prevState.services.byTags,
                                    statusType: selection,
                                }
                            }
                        }
                    });
                } 
                break;
            case 0:
                setFilterSelection((prevState: FilterSelection) => {
                    return {
                        ...prevState, 
                        scheduledData: {
                            ...prevState.scheduledData,
                            orders: selection
                        }
                    }
                });
            default:
                break;
        }
    }

    const filterAddPeople = (selectedPerson: Selected_People) => {
        const findPerson = filterSelection.people.find((person: Selected_People) => person.id === selectedPerson.id);
        if (findPerson) {
            setFilterSelection((prevState: FilterSelection) => {
                const newStateOfPeople = prevState.people.filter((person: Selected_People) => person.id !== selectedPerson.id);
                return {
                    ...prevState,
                    people: newStateOfPeople
                }
            }); 
        } else {
            setFilterSelection((prevState: FilterSelection) => {
                return {
                    ...prevState,
                    people: [...prevState.people, selectedPerson]
                }
            });
        }
    };

    const filterAddService = (selectedService: Selected_Service) => {
        const findService = filterSelection.services.byName.find((service: Selected_Service) => service.id === selectedService.id);
        if (findService) {
            setFilterSelection((prevState: FilterSelection) => {
                const newStateOfService = prevState.services.byName.filter((service: Selected_Service) => service.id !== selectedService.id);
                return {
                    ...prevState,
                    services: {
                        ...prevState.services,
                        byName: newStateOfService
                    }
                }
            }); 
        } else {
            setFilterSelection((prevState: FilterSelection) => {
                return {
                    ...prevState,
                    services: {
                        ...prevState.services,
                        byName: [...prevState.services.byName, selectedService]
                    }
                }
            });
        }
    }

    const updateTableColumns = useCallback((columns: EditColumns[]) => {
        setColumns(columns);
    }, []);

    const filterPeopleList = (searchInput: string) => {
        const filteredList: (Selected_People | undefined)[] = tableData.map((item: TableData) => {
            const nameToLower = item.payer.toLowerCase();
            if (nameToLower.startsWith(searchInput)) {
                return {
                    id: item.id,
                    name: item.payer,
                    type: item.userType,
                };
            }
        }).filter((person: Selected_People | undefined) => person !== undefined);

        return filteredList;
    }

    const filterServiceList = (searchInput: string) => {
        const filteredList: (Selected_Service | undefined)[] = tableData.map((item: TableData) => {
            const nameToLower = item.services.toLowerCase();
            if (nameToLower.startsWith(searchInput)) {
                return {
                    id: item.id,
                    serviceName: item.services,
                    type: item.type,
                    status: item.statusType,
                };
            }
        }).filter((service: Selected_Service | undefined) => service !== undefined);

        return filteredList;
    }

    return (
        <SidebarContext.Provider value={{ sidebar, handleSidebar }}>
            <FilterOptionContext.Provider value={{ options, switchOption }}>
                <FilterDataContext.Provider value={{ filterPeopleList, filterServiceList }}>
                    <FilterSelectionContext.Provider value={{ filterSelection, filterAddPeople, filterAddService, resetServicesByTag, resetServicesByName, storeListSelection, resetAllSelections, resetDateSelection, filterAddDate  }}>
                        <EditColumnContext.Provider value={{ columns }}>
                            <UpdateEditColumnContext.Provider value={{ setColumns, updateTableColumns }}>
                                {children}
                            </UpdateEditColumnContext.Provider>
                        </EditColumnContext.Provider>
                    </FilterSelectionContext.Provider>
                </FilterDataContext.Provider>
            </FilterOptionContext.Provider>
        </SidebarContext.Provider>
    )
}

export function useFilterOptionContext() {
    return useContext<FilterContext | null>(FilterOptionContext);
}

export function useEditColumnContext() {
    return useContext<ColumnContext | null>(EditColumnContext);
}

export function useUpdateEditColumnContext() {
    return useContext<UpdateColumnContext | null>(UpdateEditColumnContext);
}

export function useFilterDataContext() {
    return useContext<FilterData | null>(FilterDataContext);
}

export function useFilterSelectionContext() {
    return useContext<FilterSelectionContextType | null>(FilterSelectionContext);
}

export function useSidebarContext() {
    return useContext<SidebarContextType | null>(SidebarContext);
}