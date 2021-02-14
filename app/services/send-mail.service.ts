import IMessageTypeMail from "../interfaces/message-type-mail.interface";
import MailService from '@sendgrid/mail';

export default class SendMailService {

  private mailService;

  constructor() {
    this.mailService = MailService;
  }

  public sendMail = async (data: IMessageTypeMail, send_grid_api_key: string): Promise<any> => {
    this.mailService.setApiKey(send_grid_api_key);
    return await this.mailService
      .send(data)
      .then(sucess => {
        return sucess;
      }, err => {
        return err;
      });
  };
}
