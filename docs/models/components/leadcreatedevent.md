# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "pimms/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1729000785873",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1712006622450",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://peaceful-overheard.org/",
      country: "Falkland Islands (Malvinas)",
      city: "Killeen",
      region: "<value>",
      continent: "Europe",
      device: "Mobile",
      browser: "Safari",
      os: "WebOS",
      referer: "prime-self-confidence.org",
      refererUrl: "https://good-natured-vista.com",
      ip: "a5b1:cc37:d797:a834:1ac1:e9d7:f8bb:f2b2",
    },
    link: {
      id: "<id>",
      domain: "amused-representation.org",
      key: "<key>",
      url: "https://bleak-bar.biz",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1754670109951",
      expiredUrl: "https://tender-instance.org/",
      password: "tPTKlEv3yYPhHuG",
      title: "<value>",
      description: "wash whereas drag pull bookend orderly provided excepting",
      image: "https://loremflickr.com/1997/1791?lock=5876556730622040",
      video: "https://picsum.videos/seed/10Ax06Ps79/1030/179",
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
        "sometimes upright although contradict stingy orient in-joke curry swear aw",
      shortLink: "https://pointless-recommendation.net",
      qrCode: "https://weekly-halt.biz/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1740198113711",
      updatedAt: "1742639885684",
      projectId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LeadCreatedEventEvent](../../models/components/leadcreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LeadCreatedEventData](../../models/components/leadcreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |