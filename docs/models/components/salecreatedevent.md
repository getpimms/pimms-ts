# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "pimms/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1721466339679",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1742631178986",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://enchanting-spirit.info",
      country: "Virgin Islands, U.S.",
      city: "Topeka",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Chrome",
      os: "Chrome OS",
      referer: "reckless-release.biz",
      refererUrl: "https://jaunty-cross-contamination.name",
      ip: "136.51.230.86",
    },
    link: {
      id: "<id>",
      domain: "pitiful-casement.name",
      key: "<key>",
      url: "https://well-to-do-grass.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1749571645517",
      expiredUrl: "https://straight-developmental.org",
      password: "hLpM60mbRm_15sA",
      title: "<value>",
      description: "kindheartedly infatuated entry mid custom kinase",
      image: "https://loremflickr.com/1725/1184?lock=2789481414052674",
      video: "https://picsum.videos/seed/9ASdeKOfk/2434/3051",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "pleasant pack offset inasmuch drat regarding cappelletti goose derby quickly giving",
      shortLink: "https://naughty-charlatan.org/",
      qrCode: "https://defenseless-punctuation.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1735564343766",
      updatedAt: "1742718863763",
      projectId: "<id>",
    },
    sale: {
      amount: 1326.62,
      currency: "Kwanza",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.SaleCreatedEventEvent](../../models/components/salecreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.SaleCreatedEventData](../../models/components/salecreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |