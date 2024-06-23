export default function ApplyButton({ onClickFunc, styles }: { onClickFunc?: () => void, styles?: string }) {
    return (
        <button onClick={onClickFunc} type="button" className={`bg-[--quaternary-color] text-white py-[0.25em] px-[0.75em] rounded-button ${styles}`}>Apply</button>

    )
}