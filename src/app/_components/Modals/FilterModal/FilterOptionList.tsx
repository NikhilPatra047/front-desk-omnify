"use client";

import Image from "next/image";
import { calendar, double_users, services } from "../../../../../public";
import { useFilterOptionContext } from "@/app/_context/context";

export default function FilterOptionList() {
    const option = useFilterOptionContext();

    return (
        <ul className="filter-options cursor-pointer">
            <li onClick={() => option?.switchOption(0)} className={`${option?.options === 0 && "bg-[--tertiary-color]"}`}>
                <Image height={16} width={16} src={calendar} alt="Scheduled Data" />
                <p>Scheduled Data</p>
            </li>
            <li onClick={() => option?.switchOption(1)} className={`${option?.options === 1 && "bg-[--tertiary-color]"}`}> 
                <Image height={16} width={16} src={double_users} alt="People" />
                <p>People</p>
            </li>
            <li onClick={() => option?.switchOption(2)} className={`${option?.options === 2 && "bg-[--tertiary-color]"}`}>
                <Image height={16} width={16} src={services} alt="Services and Products" />
                <p>Services / Products</p>
            </li>
        </ul>
    )
}