import { dbQuery , dbQueryFirst} from "../configDB";

export type Customer = {
    id: number;
    customer_code: string;
}