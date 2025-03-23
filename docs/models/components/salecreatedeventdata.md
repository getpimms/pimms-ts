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
    createdAt: "1733755783316",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://red-bob.info",
    country: "Sweden",
    city: "Weissnatboro",
    region: "<value>",
    continent: "Africa",
    device: "Mobile",
    browser: "Chrome",
    os: "WebOS",
    referer: "fantastic-lyre.net",
    refererUrl: "https://major-waist.info",
    ip: "77.190.111.107",
  },
  link: {
    id: "<id>",
    domain: "ajar-excess.org",
    key: "<key>",
    url: "https://similar-airline.com",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1752589871834",
    expiredUrl: "https://unused-going.biz/",
    password: "Wwgr2TcDARbVeEr",
    title: "<value>",
    description: "beneath astride verbally smug",
    image: "https://loremflickr.com/2104/3299?lock=4190054972320693",
    video: "https://picsum.videos/seed/cfOLq0/1975/948",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "jealously overfeed warp now likewise printer even",
    shortLink: "https://digital-sticker.com/",
    qrCode: "https://sticky-breastplate.biz/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1734172050081",
    updatedAt: "1742737060074",
    projectId: "<id>",
  },
  sale: {
    amount: 5630.24,
    currency: "Swiss Franc",
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