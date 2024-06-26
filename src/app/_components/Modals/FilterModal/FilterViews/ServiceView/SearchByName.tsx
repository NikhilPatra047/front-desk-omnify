import TypeTag from "@/app/_components/Tag/TypeTag";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { search, cancel_icon } from "../../../../../../../public";
import { TableData } from "../../../../../../../types/TableData";
import { useFilterDataContext, useFilterSelectionContext } from "@/app/_context/context";
import { Selected_Service } from "../../../../../../../types/Filter";

const Services = (props: { service: Selected_Service }) => {
    const { service } = props;
    const selectionContext = useFilterSelectionContext();

    const handleSelection = (id: number, name: string, type: string, status: string) => {
        if (selectionContext?.filterSelection.services.byTags.serviceType !== null || selectionContext?.filterSelection.services.byTags.statusType !== null) {
            selectionContext?.resetServicesByTag();
        }
        const addService = {
            id,
            serviceName: name,
            type,
            status
        };
        selectionContext?.filterAddService(addService);
    };

    const isChecked = (id: number) => {
        const findService = selectionContext?.filterSelection.services.byName.find((service: Selected_Service) => service.id === id);
        return findService ? true : false;
    };
    
    return (
        <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
                <input onClick={() => handleSelection(service.id, service.serviceName, service.type, service.status)} checked={isChecked(service.id)} type="checkbox" id={`check-${service.id}`} />
                <label htmlFor={`check-${service.id}`} className="flex items-center gap-2">
                    <p className="font-normal text-[0.875rem] text-primary-color">{ service.serviceName }</p>
                </label>
            </div>
            <div className="flex items-center gap-2">
                <TypeTag type={service.type} />
                <TypeTag type={service.status} />
            </div>
        </div>
    )
}

export default function SearchByNameView() {
    const dataContext = useFilterDataContext();
    const selectionContext = useFilterSelectionContext();
    const [searchInput, setSearchInput] = useState<string>("");
    const [services, setServices] = useState<Selected_Service[]>([]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        if (event.target.value.length === 0) {
            setServices([]);
        } else {
            const searchInputToLower = event.target.value.toLowerCase();
            let result = dataContext?.filterServiceList(searchInputToLower) as Selected_Service[];
            result = result.slice(0, 10);
            setServices(result);
        }
    }

    const clearSearch = () => {
        setServices([]);
        setSearchInput("");
    }

    return (
        <div className="mt-6">
            <div className="bg-[--table-fillin] border-[2px] border-[--boundary-color] custom-select rounded-[6px] flex items-center gap-2">
                <Image height={20} width={20} src={search} alt="Search" />
                <input value={searchInput} onChange={(e) => handleSearch(e)} type="search" className="w-full bg-[--table-fillin] outline-none" />
                <button onClick={clearSearch} className={`${searchInput.length === 0 && "hidden"} w-fit absolute top-[.9rem] right-3`} type="button"><Image src={cancel_icon} alt="cancel" /></button>
            </div>
            <div className="mt-4">
                <ul className="space-y-2 mt-2">
                    {
                        selectionContext?.filterSelection.services.byName.map((service: Selected_Service) => {
                            return <Services key={service.id} service={service} />
                        })
                    }
                </ul>
            </div>
            <div className="mt-4">
                { 
                    searchInput.length > 0
                    ? services.length > 0
                      ? <p className="text-[#0F172A] font-normal text-[0.8rem]">Showing { services.length } results match &apos;{searchInput}&apos;</p>
                      : <p className="text-[#0F172A] font-normal text-[0.8rem]">No results match &apos;{ searchInput }&apos;</p> 
                    : <></>
                }
                <ul>
                    {
                        services.map((service: Selected_Service) => {
                            return <li key={service.id}><Services service={service} /></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}