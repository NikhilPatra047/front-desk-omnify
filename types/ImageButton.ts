import { StaticImageData } from "next/image"

export type PROPS = {
    icon: StaticImageData,
    alt: string,
    handleOpen?: () => void,
}