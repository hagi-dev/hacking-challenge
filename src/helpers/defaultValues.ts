import { TYPE_DOCUMENT } from "../types/constants";
import { Client } from "../types/models/client";

export const userDefaultValues: Client = {
    id: 0,
    name: "",
    lastName: "",
    email: "",
    phone: "",
    plate: "",
    typeDocument: TYPE_DOCUMENT.DNI,
    document: "",
}