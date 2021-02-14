import { Router } from 'express';
import SendEmailRoutes from './routes/send-mail.routes';

export default class Routes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public init = (): Router => {
    this.router.use(new SendEmailRoutes().init());
    return this.router;
  };

}
