import { Context, controller, inject, get, provide } from 'midway';
import { IComponentService, IComponentDTO } from '../../interfaces/component';

@provide()
@controller('/component')
export class ComponentController {

    @inject()
    ctx: Context;

    @inject('componentService')
    component: IComponentService

    @inject('httpService')
    http: any

    @inject('testService')
    test: any


    @get('/test/test')
    async testtest() {
        const id: number | string = 123;
        const demoComponent: IComponentDTO = {
            id: '123',
            latestVersion: '1.2.2',
            name: 'test-name'
        };
        const componentInfo = await this.test.component.update(id, demoComponent);
        this.ctx.body = { success: true, message: '', data: componentInfo };
    }

    @get('/http/test') 
    async httptest() {
        this.ctx.body = await this.http.get();
    }



    @get('/create')
    async create(ctx: Context) {
        // const id: number | string = ctx.params.id; 
        const componentInfo = await this.component.create();
        this.ctx.body = { success: true, message: '', data: componentInfo };
    }

    @get('/update/:id')
    async update(ctx: Context) {
        const id: number | string = ctx.params.id;
        const demoComponent: IComponentDTO = {
            id: '123',
            latestVersion: '1.2.2',
            name: 'test-name'
        };
        const componentInfo = await this.component.update(id, demoComponent);
        this.ctx.body = { success: true, message: '', data: componentInfo };
    }

    @get('/:id')
    async index(ctx: Context) {
        const id: number | string = ctx.params.id;
        const componentInfo = await this.component.getById(id);
        this.ctx.body = { success: true, message: '', data: componentInfo };
    }

}
