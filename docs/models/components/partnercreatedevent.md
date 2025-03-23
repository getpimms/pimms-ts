# PartnerCreatedEvent

Triggered when a partner is created.

## Example Usage

```typescript
import { PartnerCreatedEvent } from "pimms/models/components";

let value: PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1714829631175",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Lucious_Dietrich-Durgan@yahoo.com",
    image: "https://picsum.photos/seed/fvVGEygYrj/3365/839",
    country: "Reunion",
    payoutsEnabled: false,
    createdAt: "1730394332834",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "frozen-cutlet.com",
        key: "<key>",
        shortLink: "https://measly-deployment.com",
        url: "https://short-term-coordination.biz/",
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `event`                                                                                    | [components.PartnerCreatedEventEvent](../../models/components/partnercreatedeventevent.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.PartnerCreatedEventData](../../models/components/partnercreatedeventdata.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |