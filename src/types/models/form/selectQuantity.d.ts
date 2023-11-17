export interface SelectQuantityProps {
    value: number;
    onClick: (value: number) => void;
    maxQuantity: number;
    minQuantity: number;
    variantQuantity?: number;
};