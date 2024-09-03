import { dbQuery } from "../configDB";

export type Customer = {
    id: number;
    customer_code: string;
}

/*const getCustomer = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM customer WHERE id = ?`, [id]);
    return retorno as Customer | undefined;
}*/

const insertCustomer = (customer: Customer ) =>{
    dbQuery(`INSERT INTO customer (customer_code) VALUE (?)`, [customer.customer_code])
    //let retorno = await dbQuery("SELECT seq AS id FROM sqlite_sequence WHERE name = 'customer'");   
    //return getCustomer(retorno[0].id)
    return customer
}

export const customerModel = {
    insertCustomer
} 