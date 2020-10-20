export declare enum LinkedEntityType {
    acknowledge = 0,
    quote = 1,
    order = 2,
    job = 3,
    pod = 4
}
export interface IActionStatus {
    action: string;
    description?: string;
    actioned: boolean;
    order?: number;
    onSelect?: any;
    isSelected: boolean;
    service?: string;
    customer?: string;
    reference?: string;
    priority?: string;
    actionRequiredByTime?: number;
    linkedEntityType: LinkedEntityType;
}
