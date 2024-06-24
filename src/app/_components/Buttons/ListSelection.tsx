import { PROPS } from "../../../../types/ListSelection";

export default function ListSelection(props: PROPS) {
    const { tag, count, styles } = props;
    return ( 
        <button className={`border-[#E2E8F0] border-[1px] py-[0.625em] px-[0.75em] rounded-button bg-white ${styles}`}>
            <p className="text-primary-color text-left font-semibold text-[0.75rem] leading-[1.25rem]">{ tag } <span className="font-medium text-secondary-color text-[0.625rem] leading-[1rem]">{ count }</span></p>
        </button>
    )
}