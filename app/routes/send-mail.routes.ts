import { Router } from "express";
import SendMailController from "../controllers/send-mail.controller";

export default class SendEmailRoutes {
  private controller: SendMailController;

  constructor(){
    this.controller = new SendMailController();
  }

  public init = (): Router => {
    const router: Router = Router();
    router.use('/send-mails', router);
    router.post('/:api_key', this.controller.sendMail);
    return router;
  }
}
