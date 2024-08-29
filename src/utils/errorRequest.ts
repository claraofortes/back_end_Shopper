import { Response } from "express";

export const badRequest = (res: Response, err_descricao: string, err_code: string, status_number: number) => {
    res.status(status_number).json({
        error_code: err_code,
        error_descricao: err_descricao
    });
};


export const sucessRequest = (res: Response, resposta: JSON) => {
    res.status(200).json(resposta);
};

