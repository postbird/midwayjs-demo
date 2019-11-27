import { provide } from 'midway';

@provide('pageService')
export class PageService {
    async getById(id: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve({ pageId: id, name: 'name' })
        });
    }
}