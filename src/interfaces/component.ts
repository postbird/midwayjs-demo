/**
 * 模块实例
 */
export interface IComponentDTO { 
    id: number | string,
    latestVersion: string,
    name: string,
}

export interface IComponentService {
    /**
     * 创建模块
     * @param component 
     */
    create(component: IComponentDTO): Promise<IComponentDTO>

    getById(id: number | string): Promise<IComponentDTO>

    update(id: number | string, component: IComponentDTO): Promise<IComponentDTO>
}