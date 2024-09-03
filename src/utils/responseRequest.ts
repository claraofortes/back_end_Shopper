import { Response } from "express";

export const badRequest = (res: Response, err_descricao: string, err_code: string, status_number: number) => {
    res.status(status_number).json({
        error_code: err_code,
        error_descricao: err_descricao
    });
};

export const sucessRequest = (res: Response, resposta: any) => {
    res.status(200).json(resposta);
};

export const internalServerError = (res: Response, err: Error) => {
    res.status(500).json({
        error_code:'INTERNAL_SERVER_ERROR',
        error_descricao: err.message
    });
}
