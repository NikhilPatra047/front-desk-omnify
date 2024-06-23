export default function TypeTag(props: { type: string }) {
    const { type } = props;

    return (
        <div className="rounded-[4px] w-fit bg-[--table-fillin] py-[0.2em] px-[.5em] text-[#475467] font-medium text-[0.8rem]">
            <p>{ type }</p>
        </div>
    )
}