import Express from 'express';
import Routes from './routes';

export default class App {
  public server;
  private routes: Routes;

  constructor() {
    this.server = Express();
    this.routes = new Routes();

    this.middleware();
    this.router();
  }

  private middleware = () => {
    this.server.use(Express.json());
  }

  private router = () => {

    this.server.use(this.routes.init());
  }

};
