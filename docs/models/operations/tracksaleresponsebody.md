# TrackSaleResponseBody

A sale was tracked.

## Example Usage

```typescript
import { TrackSaleResponseBody } from "pimms/models/operations";

let value: TrackSaleResponseBody = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Jalen.Brown@hotmail.com",
    avatar: "https://picsum.photos/seed/rDnVtpW0kP/1773/2675",
    externalId: "<id>",
  },
  sale: {
    amount: 4514.48,
    currency: "Lempira",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
    metadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `eventName`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `customer`                                                                   | [operations.TrackSaleCustomer](../../models/operations/tracksalecustomer.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `sale`                                                                       | [operations.Sale](../../models/operations/sale.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |