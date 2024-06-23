export default function DefaultButton({ onClickFunc, styles }: { onClickFunc?: () => void, styles?: string }) {
    return (
        <button onClick={onClickFunc} type="button" className={`text-[--quaternary-color] border-[1px] border-tertiary-color py-[0.25em] px-[0.75em] rounded-button ${styles}`}>Reset to Default</button>
    )
}