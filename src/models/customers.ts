import { dbQuery , dbQueryFirst} from "../configDB";

export type Customer = {
    id: number;
    customer_code: string;
}


const getProduct = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM customer WHERE id = ?`, [id]);
    return retorno as Customer | undefined;
}

const insertCustomer = async (customer: Customer) =>{
    await dbQuery(`INSERT INTO customer (customer_code) VALUES (?)`, [customer.customer_code])
    let retorno = await dbQuery("SELECT seq AS id FROM sqlite_sequence WHERE name = 'customer'");   
    return getProduct(retorno[0].id)
}