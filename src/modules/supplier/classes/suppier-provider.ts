import { Utils } from "../../../utilities";
import { SupplierWeighting } from "../enums";
import { ISupplier, ISupplierPreference } from "../interfaces";

export class SupplierProviderService  {
    private static instance: SupplierProviderService;
  
    private constructor() { }
  
    static getInstance(): SupplierProviderService {
      if (!SupplierProviderService.instance) {
        SupplierProviderService.instance = new SupplierProviderService();
      }
  
      return SupplierProviderService.instance;
    }
  
    public prepare(suppliers: Array<ISupplier>, supplierPreference: ISupplierPreference): void {
        const prefs = supplierPreference ?? this.defaultSupplierPreference();
        this.sortBySupplierPreference(suppliers, prefs.supplierWeighting);
        if (prefs.defaultInvites) {
            const c: number = (suppliers.length > prefs.defaultInvites) ? prefs.defaultInvites : suppliers.length;
            for (let i=0;i<c;i++) {
                suppliers[i].invite = true;
            }
        }
    }
  
    public defaultSupplierPreference(): ISupplierPreference {
        return {
            supplierWeighting: SupplierWeighting.quoteToCostRatio,
            defaultInvites: 3,
            maxInvites: 5,
            minInvites: 1,
        }
    }
  
    public sortBySupplierPreference(suppliers: Array<ISupplier>, supplierWeighting: SupplierWeighting): void {
        switch (supplierWeighting) {
            case SupplierWeighting.avgQuoteResponse:
                suppliers.sort(this._sortByAvgQuoteResponse);
                break;
            case SupplierWeighting.quoteToCostRatio:
                suppliers.sort(this._sortByQuoteToCostRatio);
                break;
            default:
                suppliers.sort(this._sortByRating);
                break;
        }
    }
  
    public nominalAvgQuoteResponse(value?: any): number {
      return Utils.hasMinimumValue(value, 2) ? value : 90;
    }
  
    public nominalQuoteToCostRatio(value?: any): number {
      return Utils.hasMinimumValue(value, 5) ? value : 105;
    }
  
    public nominalRating(value?: any): number {
      return Utils.hasMinimumValue(value, 2) ? value : 75;
    }
  
    private _sortByAvgQuoteResponse(supplier1: ISupplier, supplier2: ISupplier): number {
      const value1: number = SupplierProviderService.getInstance().nominalAvgQuoteResponse(supplier1.avgQuoteResponse);
      const value2: number = SupplierProviderService.getInstance().nominalAvgQuoteResponse(supplier2.avgQuoteResponse);
      if (value1 == value2) {
        return 0;
      } else if (value1 > value2) {
        return 1;
      }
      return -1;
    }
  
    private _sortByQuoteToCostRatio(supplier1: ISupplier, supplier2: ISupplier): number {
      const value1: number = SupplierProviderService.getInstance().nominalQuoteToCostRatio(supplier1.quoteToCostRatio);
      const value2: number = SupplierProviderService.getInstance().nominalQuoteToCostRatio(supplier2.quoteToCostRatio);
      if (value1 == value2) {
        return 0;
      } else if (value1 > value2) {
        return 1;
      }
      return -1;
    }
  
    private _sortByRating(supplier1: ISupplier, supplier2: ISupplier): number {
      const value1: number = SupplierProviderService.getInstance().nominalRating(supplier1.rating);
      const value2: number = SupplierProviderService.getInstance().nominalRating(supplier2.rating);
      if (value1 == value2) {
        return 0;
      } else if (value1 < value2) {
        return 1;
      }
      return -1;
    }
}
  