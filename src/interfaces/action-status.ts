export enum LinkedEntityType {
    acknowledge,
    quote,
    order,
    job,
    pod,
}

export interface IActionStatus {
    action: string,
    description?: string,
    actioned: boolean,
    order?: number,
    onSelect?: any,
    isSelected: boolean,
    service?: string,
    customer?: string,
    reference?: string,
    priority?: string,
    actionRequiredByTime?: number,
    linkedEntityType: LinkedEntityType,
}