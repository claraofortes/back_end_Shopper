import { Request, Response } from "express";
import { badRequest, internalServerError, sucessRequest } from "../utils/responseRequest";
import { Customer, customerModel } from '../models/customers';

const insertCustomer = (req: Request, res: Response) => {
    {
    let customer = req.body;
        if (!customer)
            return badRequest(res, "Cliente inválido", "INVALID_CUSTOMER", 400);

        if (!customer.customer_code)
            return badRequest(res, "Não foi inserido um code de cliente válido", "INVALID_CUSTOMER_CODE", 404);
        
    }
    let customer = req.body as Customer;
    
    let customerNew = customerModel.insertCustomer(customer)
    //return customerModel.insertCustomer(customer)
        /*.then(customer => {
            console.log(customer);
            //res.json(customer);
        })
        .catch(err => internalServerError(res, err));*/
    res.json(customerNew);
}

export const customerController = {
    insertCustomer
} 