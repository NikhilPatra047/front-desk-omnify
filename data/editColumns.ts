import { calendar, circle_dot, hash, user } from "../public";
import { EditColumns } from "../types/EditColumns";

export const editColumns: EditColumns[] = [
    {
        id: 0,
        title: "Created On",
        isSelected: true,
        icon: calendar,
        alt: "",
    },
    {
        id: 1, 
        title: "Payer",
        isSelected: true,
        icon: user,
        alt: "",
    },
    {
        id: 2,
        title: "Status",
        isSelected: true,
        icon: circle_dot,
        alt: "",
    },
    {
        id: 3,
        title: "Email",
        isSelected: true,
        icon: hash,
        alt: "",
    },
    {
        id: 4,
        title: "Payer Phone",
        isSelected: true,
        icon: calendar,
        alt: "",
    },
    {
        id: 5,
        title: "Services",
        isSelected: true,
        icon: hash,
        alt: "",
    },
    {
        id: 6,
        title: "Scheduled",
        isSelected: true,
        icon: calendar,
        alt: "",
    },
];