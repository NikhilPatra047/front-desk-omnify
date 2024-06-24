"use client";

import { useState } from "react";
import FilterButton from "../_components/Buttons/Filter";
import ImageButton from "../_components/Buttons/ImageButton";
import ListSelection from "../_components/Buttons/ListSelection";
import SearchField from "../_components/Field/Search";
import { regenerate, open, download } from "../../../public";
import Table from "../_components/Table/TableDisplay";
import EditColumnModal from "../_components/Modals/EditColumnModal";
import FilterModal from "../_components/Modals/FilterModal/FilterModal";

function AddFilter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <FilterButton handleOpen={handleOpen} />
      {isOpen && <FilterModal />}
    </div>
  )
}

function EditColumn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <ImageButton handleOpen={handleOpen} icon={open} alt={"open"} />
      { isOpen && <EditColumnModal /> }
    </div>
  )
}

export default function Home() {
  return (
    <main className="w-full h-fit max-w-[1500px] my-2 rounded-[6px] bg-white drop-shadow-xl">
      <div className="p-4">
        <h1 className="font-semibold text-[1.25rem] text-primary-color">Waitlist</h1>
        <div className="flex justify-between items-center my-4">
          <ListSelection tag={"All Waitlists"} count={"100"} styles="border-[1px] border-[--secondary-color]" />
          <ListSelection tag={"Newly Added"} count={"50"} />
          <ListSelection tag={"Leads"} count={"20"} />
        </div>
        <div className="flex gap-2 justify-between">
          <AddFilter />
          <div className="flex justify-between gap-4">
            <SearchField />
            <ImageButton icon={regenerate} alt={"regenerate"} />
            <EditColumn />
            <ImageButton icon={download} alt={"download"} />
          </div>
        </div>
        <Table />
      </div>
    </main>
  );
}