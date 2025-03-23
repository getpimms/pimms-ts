# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "pimms/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1736287841396",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1715691147488",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://stale-futon.biz/",
      country: "Estonia",
      city: "West Maurine",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Safari",
      os: "Symbian",
      referer: "pleasant-bug.name",
      refererUrl: "https://gifted-solvency.net",
      ip: "3fd5:fa6d:62ce:d38d:3145:be00:cd2d:5782",
    },
    link: {
      id: "<id>",
      domain: "whole-volleyball.info",
      key: "<key>",
      url: "https://which-skyline.net/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1757331209262",
      expiredUrl: "https://sparkling-legging.name/",
      password: "VdD074PRao3f_6c",
      title: "<value>",
      description: "insert immediately mechanically zowie",
      image: "https://picsum.photos/seed/c8uMMYno/1180/1236",
      video: "https://picsum.videos/seed/tV17n55zd/8/3319",
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
        "jiggle beyond political inasmuch deduction cop ack creak exaggerate yet unsung contradict dampen vice thunderbolt astride gleefully controvert unless",
      shortLink: "https://regular-duster.info",
      qrCode: "https://informal-pendant.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1732154297799",
      updatedAt: "1742726485483",
      projectId: "<id>",
    },
    sale: {
      amount: 4163.67,
      currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
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