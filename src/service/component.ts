import { provide } from 'midway';
import { IComponentDTO, IComponentService } from '../interfaces/component';

const demoComponent: IComponentDTO = {
    id: '123',
    latestVersion: '1.2.2',
    name: 'test-name'
};

@provide('componentService')
export class ComponentService implements IComponentService {

    async create(component: IComponentDTO): Promise<IComponentDTO> {
        return Promise.resolve(component);
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
                console.log(demoComponent);
                resolve(demoComponent)
            } catch (err) {
                reject(err);
            }

        });
    }
}