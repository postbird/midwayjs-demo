import { provide } from "midway";
import { IHttpService } from '../interfaces/http';

@provide('httpService')
export class HttpService implements IHttpService {
    // 模拟 HTTP GET 
    async get() {
        return Promise.resolve({
            res: true,
            message: 'message'
        });
    }
}