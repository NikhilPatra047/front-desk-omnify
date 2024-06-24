export default function SearchField() {
    return (
        <div className="relative">
            <input id="search-client" name="search-client" alt="search client" type="search" placeholder="Search client" className="py-2 px-8 my-input border-[1px] rounded-button font-medium text-[0.75rem] max-w-[230px] flex items-center outline-[--secondary-color]" />
            {/* <Image className="absolute top-[0.6rem] right-3" src={cancel_icon} alt="cancel" /> */}
        </div>
    )
}