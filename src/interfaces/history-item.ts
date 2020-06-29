export interface IHistoryItem {
    recordId: number;
    sessionId: string,
    reference: string,
    activeFrom: number,
    activeTo?: number;
    serviceTypeId: number,
    serviceType: string;
    detail?: any;
    lineDetail?: any;
    isQuote: boolean,
    customerReference: string,
    primaryAmount?: number,
    status?: string
    statusDate?: number,
    progressStepCount?: number,
    progressIndex?: number,
    attributes?: any,
}
  