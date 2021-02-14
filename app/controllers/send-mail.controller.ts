import { Request, Response } from 'express';
import IMessageTypeMail from '../interfaces/message-type-mail.interface';
import SendMailService from '../services/send-mail.service';

export default class SendMailController {
  private service: SendMailService;

  constructor(){
    this.service = new SendMailService();
  }

  public sendMail = async(req: Request, res: Response): Promise<Response> => {
    const obj = await this.service.sendMail(req.body as IMessageTypeMail, req.params.api_key);
    if(obj.code === 401)
      return res.status(401).send(obj);
    return res.send(obj);
  }
}
