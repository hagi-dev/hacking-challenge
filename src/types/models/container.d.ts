import { SelectOption } from "./common";

export interface PageProps {
    children: ReactNode;
    isHeader?: boolean;
};

export interface ContextListProps {
    options: SelectOption[];
    onclick: (id: number | string) => void;
    value: number | string;
}