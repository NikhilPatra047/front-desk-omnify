import { green_dot, black_dot, blue_dot } from "../../../../public";
import Image from "next/image";

export default function StatusTag({ status }: { status: string }) {
    const [bgColor, textColor, logo] = status === "active"? ["#F0FDF9", "#15803D", green_dot]: status === "lead"? ["#EFF6FF", "#3B82F6", blue_dot]: ["#F1F5F9", "#334155", black_dot];

    return (
        <td>
            <div style={{ backgroundColor: bgColor }} className="flex gap-2 items-center w-fit rounded-[16px] py-[0.125em] px-[0.5em]">
                <Image src={logo} alt="" />
                <p style={{ color: textColor }} className="capitalize">{ status }</p>
            </div>
        </td>
    )
}