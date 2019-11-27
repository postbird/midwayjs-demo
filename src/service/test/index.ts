import { provide, inject } from 'midway';

@provide('testService')
export class TestService {
    @inject('componentService')
    component: any

    @inject('pageService')
    page: any
}