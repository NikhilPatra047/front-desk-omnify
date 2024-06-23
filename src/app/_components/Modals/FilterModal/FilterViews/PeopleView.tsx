import Image from "next/image";
import { search } from "../../../../../../public";
import TypeTag from "@/app/_components/Tag/TypeTag";
import { ChangeEvent, useState } from "react";
import { useFilterDataContext, useFilterSelectionContext } from "@/app/_context/context";
import { TableData } from "../../../../../../types/TableData";
import { Selected_People } from "../../../../../../types/Filter";

const People = (props: { person: Selected_People }) => {
    const { person } = props;
    const { filterAddPeople, filterSelection } = useFilterSelectionContext();

    const handleSelection = (id: number, name: string, type: string) => {
        const addPerson = {
            id,
            name,
            type
        };
        filterAddPeople(addPerson);
    };

    const isChecked = (id: number) => {
        const findPerson = filterSelection.people.find((person: Selected_People) => person.id === id);
        return findPerson ? true : false;
    };

    return (
        <div className="flex items-center gap-2">
            <input onClick={() => handleSelection(person.id, person.name, person.type)} checked={isChecked(person.id)} type="checkbox" id={`check-${person.id}`} />
            <label htmlFor={`check-${person.id}`} className="flex items-center gap-2">
                <p className="font-normal text-[0.875rem] text-primary-color">{person.name}</p>
                <TypeTag type={person.type} />
            </label>
        </div>
    )
}

export default function PeopleView() {
    const { filterPeopleList } = useFilterDataContext();
    const { filterSelection } = useFilterSelectionContext();
    const [searchInput, setSearchInput] = useState<string>("");
    const [people, setPeople] = useState<Selected_People[]>([]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        if (event.target.value.length === 0) {
            setPeople([]);
        } else {
            const searchInputLowerCase = event.target.value.toLowerCase();
            const result = filterPeopleList(searchInputLowerCase);
            setPeople(result);
        }
    }

    return (
        <div className="h-full w-[382px] p-4">
            <div className="bg-[--table-fillin] custom-select rounded-[6px] flex items-center gap-2">
                <Image height={20} width={20} src={search} alt="Search" />
                <input value={searchInput} onChange={(e) => handleSearch(e)} type="search" name="" id="" className="w-full bg-[--table-fillin] outline-none" />
            </div>
            <div className="mt-4">
                <ul className="space-y-2 mt-2">
                    {
                        filterSelection.people.map((person: Selected_People) => {
                            return <People key={person.id} person={person} />
                        })
                    }
                </ul>
            </div>
            <div className="mt-4">
                {
                    searchInput.length > 0
                        ? people.length > 0
                            ? <p className="text-[#0F172A] font-normal text-[0.8rem]">Showing {people.length} results match &apos;{searchInput}&apos;</p>
                            : <p className="text-[#0F172A] font-normal text-[0.8rem]">No results match &apos;{searchInput}&apos;</p>
                        : <></>
                }
                <ul className="space-y-2 mt-2">
                    {
                        people.map((person: Selected_People) => {
                            return <li key={person.id}>
                                <People person={person} />
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}