# SaleCreatedEventDiscount

## Example Usage

```typescript
import { SaleCreatedEventDiscount } from "pimms/models/components";

let value: SaleCreatedEventDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 7890.15,
  type: "flat",
  duration: 3995.2,
  interval: "month",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponTestId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `amount`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.SaleCreatedEventType](../../models/components/salecreatedeventtype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `duration`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `interval`                                                                                 | [components.SaleCreatedEventInterval](../../models/components/salecreatedeventinterval.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |