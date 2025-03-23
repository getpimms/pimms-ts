# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "pimms/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1726844869409",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1742444756165",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://frizzy-step-mother.name/",
      country: "Somalia",
      city: "Rowemouth",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Firefox",
      os: "MacOS",
      referer: "straight-velocity.info",
      refererUrl: "https://bossy-phrase.org/",
      ip: "124.25.8.170",
    },
    link: {
      id: "<id>",
      domain: "trim-fit.org",
      key: "<key>",
      url: "https://everlasting-tennis.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1761947467540",
      expiredUrl: "https://comfortable-awareness.org/",
      password: "qBmCMnKTHb7cPjV",
      title: "<value>",
      description: "glossy substantial supposing",
      image: "https://loremflickr.com/1232/1718?lock=632067308175284",
      video: "https://picsum.videos/seed/XoHDXU/2003/3854",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments: "daily fess huzzah impressive times inborn",
      shortLink: "https://nervous-illusion.biz/",
      qrCode: "https://icy-antelope.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1724618853015",
      updatedAt: "1742755556776",
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