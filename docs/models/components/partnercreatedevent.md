# PartnerCreatedEvent

Triggered when a partner is created.

## Example Usage

```typescript
import { PartnerCreatedEvent } from "pimms/models/components";

let value: PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1739065286705",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Dannie.Schulist@gmail.com",
    image: "https://loremflickr.com/1594/2496?lock=6968431494563285",
    country: "Sri Lanka",
    payoutsEnabled: false,
    createdAt: "1738473166230",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "pleasant-hyphenation.com",
        key: "<key>",
        shortLink: "https://best-humor.org/",
        url: "https://regal-coordination.biz",
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