import ListDropdown from "@/app/_components/Common/ListDropdown";
import { serviceType } from "../../../../../../../data/serviceType";
import { statusType } from "../../../../../../../data/statusType";
import { useFilterOptionContext, useFilterSelectionContext } from "@/app/_context/context";

export default function SearchByTagView() {
    const { options } = useFilterOptionContext();
    const { filterSelection } = useFilterSelectionContext();

    return (
        <div className="mt-6">
            <div>
                <ListDropdown id={options} selectedLabel={filterSelection.services.byTags.serviceType} list={serviceType} label="Service type" />
            </div>
            <div className="mt-6">
                <ListDropdown id={options} selectedLabel={filterSelection.services.byTags.statusType} label="Status" list={statusType} />
            </div>
        </div>
    )
}