# AnalyticsCities

## Example Usage

```typescript
import { AnalyticsCities } from "pimms/models/components";

let value: AnalyticsCities = {
  country: "GB",
  city: "New Melyssafort",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `country`                                                                              | [components.AnalyticsCitiesCountry](../../models/components/analyticscitiescountry.md) | :heavy_check_mark:                                                                     | The 2-letter country code of the city                                                  |
| `region`                                                                               | [components.AnalyticsCitiesRegion](../../models/components/analyticscitiesregion.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `city`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the city                                                                   |
| `clicks`                                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of clicks from this city                                                    |
| `leads`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of leads from this city                                                     |
| `sales`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of sales from this city                                                     |
| `saleAmount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total amount of sales from this city, in cents                                     |