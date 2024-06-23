import { calendar, circle_dot, hash, user } from "../public";
import { EditColumns } from "../types/EditColumns";

export const editColumns: EditColumns[] = [
    {
        id: 0,
        title: "Created On",
        isSelected: true,
        icon: calendar,
        alt: "Created On",
    },
    {
        id: 1, 
        title: "Payer",
        isSelected: true,
        icon: user,
        alt: "Payer",
    },
    {
        id: 2,
        title: "Status",
        isSelected: true,
        icon: circle_dot,
        alt: "Status",
    },
    {
        id: 3,
        title: "Email",
        isSelected: true,
        icon: hash,
        alt: "Email",
    },
    {
        id: 4,
        title: "Payer Phone",
        isSelected: true,
        icon: calendar,
        alt: "Payer Phone",
    },
    {
        id: 5,
        title: "Services",
        isSelected: true,
        icon: hash,
        alt: "Services",
    },
    {
        id: 6,
        title: "Scheduled",
        isSelected: true,
        icon: calendar,
        alt: "Scheduled",
    },
];