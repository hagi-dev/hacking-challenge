import { FREQUENCY, TYPE_DOCUMENT } from "../constants";

export interface Client {
    id: number;
    name: string;
    lastName: string;
    typeDocument: TYPE_DOCUMENT;
    document: string;
    email: string;
    phone: string;
    plate: string;
}

export interface Acquisition {
    id: number;
    clientId: number;
    AditionalProducts: Product[];
    frequency: FREQUENCY;
    totalAmount: number;
}

export interface Product {
    id: number;
    skuIds: number[];
}