# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "pimms/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1735987606893",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://medium-scorn.info/",
    country: "Venezuela",
    city: "Shanahanshire",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Safari",
    os: "Blackberry",
    referer: "well-groomed-electronics.biz",
    refererUrl: "https://steep-creator.name",
    ip: "79ca:a097:db13:eacf:a2fd:cce2:135d:d5aa",
  },
  link: {
    id: "<id>",
    domain: "kosher-settler.info",
    key: "<key>",
    url: "https://dazzling-longboat.net",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1748370225361",
    expiredUrl: "https://pink-contrail.net/",
    password: "zMJ_p40v2LJyvKY",
    title: "<value>",
    description: "furthermore phew hm softly mmm um zowie",
    image: "https://picsum.photos/seed/6oy7Oue/3947/1310",
    video: "https://loremflickr.com/2371/3173?lock=6318337026359484",
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
      "victoriously ha lest sate blah beyond blah bitter ah versus alongside ouch whenever since ah especially gladly although syringe but",
    shortLink: "https://hairy-self-confidence.info",
    qrCode: "https://bulky-e-mail.info/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1737010711020",
    updatedAt: "1742718451195",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customer`                                                                           | [components.Customer](../../models/components/customer.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `click`                                                                              | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |