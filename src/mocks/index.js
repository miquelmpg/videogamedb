import { setupWorker } from "msw/browser";
import * as AuthHandlers from './auth';

const worker = setupWorker(...Object.values(AuthHandlers));

export default worker;
