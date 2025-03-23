# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "pimms/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1728305433710",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://live-vista.com",
    country: "Norfolk Island",
    city: "Decatur",
    region: "<value>",
    continent: "Antarctica",
    device: "Mobile",
    browser: "Firefox",
    os: "Symbian",
    referer: "overcooked-traditionalism.com",
    refererUrl: "https://right-heartbeat.org/",
    ip: "182.144.30.183",
  },
  link: {
    id: "<id>",
    domain: "sarcastic-captain.name",
    key: "<key>",
    url: "https://lavish-hexagon.com/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1747749168155",
    expiredUrl: "https://digital-sticker.com/",
    password: "Jm6fV1llDAc7jwT",
    title: "<value>",
    description:
      "unlike before coin after kindheartedly whereas obvious matter",
    image: "https://picsum.photos/seed/Gg6Pc/76/3855",
    video: "https://picsum.videos/seed/0dH9zdrR/419/228",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "anenst hungrily mothball yowza after captain er jiggle beyond political inasmuch deduction cop ack creak",
    shortLink: "https://flawless-chairperson.org",
    qrCode: "https://unimportant-executor.net",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1740926647550",
    updatedAt: "1742713497912",
    projectId: "<id>",
  },
  sale: {
    amount: 9041.31,
    currency: "Guyana Dollar",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.SaleCreatedEventCustomer](../../models/components/salecreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.SaleCreatedEventClick](../../models/components/salecreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.SaleCreatedEventLink](../../models/components/salecreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sale`                                                                                     | [components.Sale](../../models/components/sale.md)                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |