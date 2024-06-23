import ListDropdown from "@/app/_components/Common/ListDropdown";
import { serviceType } from "../../../../../../../data/serviceType";
import { statusType } from "../../../../../../../data/statusType";
import { useFilterOptionContext, useFilterSelectionContext } from "@/app/_context/context";
import { List } from "../../../../../../../types/ListProps";

export default function SearchByTagView() {
    const optionContext = useFilterOptionContext();
    const selectionContext = useFilterSelectionContext();

    return (
        <div className="mt-6">
            <div>
                <ListDropdown id={optionContext?.options as number} selectedLabel={selectionContext?.filterSelection.services.byTags.serviceType as string} list={serviceType} label="Service type" />
            </div>
            <div className="mt-6">
                <ListDropdown id={optionContext?.options as number} selectedLabel={selectionContext?.filterSelection.services.byTags.statusType as string} label="Status" list={statusType} />
            </div>
        </div>
    )
}