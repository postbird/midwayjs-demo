import { provide, inject } from 'midway';
import { IComponentDTO, IComponentService } from '../interfaces/component';
// import { IHttpService } from '../interfaces/http';

const demoComponent: IComponentDTO = {
    id: '123',
    latestVersion: '1.2.2',
    name: 'test-name'
};

@provide('componentService')
export class ComponentService implements IComponentService {

    @inject('httpService')
    http: any


    async create(): Promise<IComponentDTO> {
        const res = await this.http.get();
        return Promise.resolve(res);
    }

    async getById(id: number | string): Promise<IComponentDTO> {
        return Promise.resolve(demoComponent);
    }

    async update(id: number | string, component: IComponentDTO): Promise<IComponentDTO> {
        return new Promise((resolve, reject) => {
            try {
                // 为了测试 id 和 component 都没有使用
                const latestVersion = demoComponent.latestVersion.split('.');
                latestVersion[latestVersion.length - 1] = String(parseInt(latestVersion[latestVersion.length - 1]) + 1);
                demoComponent.latestVersion = latestVersion.join('.');
                resolve(demoComponent)
            } catch (err) {
                reject(err);
            }
        });
    }
}