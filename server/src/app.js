import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as json from 'koa-json';
import { Crawler } from './controllers/crawler';

const app = new Koa;

app.use(bodyparser());
app.use(json());

const crawler = new Crawler();

export { app };