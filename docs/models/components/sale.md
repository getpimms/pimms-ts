# Sale

## Example Usage

```typescript
import { Sale } from "pimms/models/components";

let value: Sale = {
  amount: 1997.04,
  currency: "Rupiah",
  paymentProcessor: "<value>",
  invoiceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_check_mark: | N/A                |
| `paymentProcessor` | *string*           | :heavy_check_mark: | N/A                |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |