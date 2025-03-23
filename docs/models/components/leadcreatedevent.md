# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "pimms/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1741864945681",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1728310692450",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://infamous-polarisation.biz/",
      country: "Paraguay",
      city: "Aldenfort",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Firefox",
      os: "Android",
      referer: "uncomfortable-edge.org",
      refererUrl: "https://glossy-silk.net",
      ip: "161.199.217.209",
    },
    link: {
      id: "<id>",
      domain: "dazzling-solvency.com",
      key: "<key>",
      url: "https://portly-cappelletti.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1752477761099",
      expiredUrl: "https://gigantic-begonia.name/",
      password: "EcwmvOb5Z3aWp9V",
      title: "<value>",
      description: "versus yowza inconsequential zowie around whoever",
      image: "https://picsum.photos/seed/YNhMGo4d/1972/3376",
      video: "https://picsum.videos/seed/tzBYagHeS/3189/994",
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
        "besmirch consequently outside enormously obvious past energetically",
      shortLink: "https://taut-tarragon.info",
      qrCode: "https://strong-extension.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1716719620263",
      updatedAt: "1742720526978",
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