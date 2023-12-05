import { Request, Response } from 'express';


export const receiveWebHookData = async (req: Request, res: Response) => {
    console.log(req.params);
    console.log(req.body);

    res.send(200);
}
