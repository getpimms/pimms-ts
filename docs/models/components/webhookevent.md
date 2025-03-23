# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1716370442550",
  data: {
    id: "<id>",
    domain: "probable-jungle.org",
    key: "<key>",
    url: "https://spherical-electronics.biz/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1763660256440",
    expiredUrl: "https://rapid-league.info/",
    password: "UdHCox7Bnv87bft",
    title: "<value>",
    description: "gratefully wasteful however vicinity firm",
    image: "https://loremflickr.com/1822/1607?lock=4556439315389838",
    video: "https://picsum.videos/seed/kVR3fr6lJ/1242/1492",
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
      "flustered against captain supposing fidget faithfully under usable synergy redact zowie instead gah vision",
    shortLink: "https://bustling-flood.name/",
    qrCode: "https://impassioned-zen.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1733981791900",
    updatedAt: "1742736198447",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1736871977759",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://uniform-rosemary.net",
      country: "Germany",
      city: "North Deanview",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Safari",
      os: "MacOS",
      referer: "celebrated-mountain.net",
      refererUrl: "https://voluminous-whale.info",
      ip: "37.175.168.220",
    },
    link: {
      id: "<id>",
      domain: "busy-king.name",
      key: "<key>",
      url: "https://deafening-stranger.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1757609013299",
      expiredUrl: "https://late-waterspout.info/",
      password: "rGFAdFJo_fTGGgZ",
      title: "<value>",
      description: "lest gloss bide daintily vast scamper over after",
      image: "https://loremflickr.com/715/2451?lock=7943417525452475",
      video: "https://picsum.videos/seed/yVwgSn/2878/3865",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments: "weary exactly tepid gratefully whoa antelope hairy whoa",
      shortLink: "https://dental-gymnast.net/",
      qrCode: "https://lucky-cd.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1713235743728",
      updatedAt: "1742699104822",
      projectId: "<id>",
    },
  },
};
```

### `components.LeadCreatedEvent`

```typescript
const value: components.LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1740635486277",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1718024309506",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://stingy-coal.name",
      country: "Bosnia and Herzegovina",
      city: "Nienowfield",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Chrome",
      os: "Android",
      referer: "second-hello.biz",
      refererUrl: "https://subtle-intellect.org/",
      ip: "98bd:a0fe:f3a3:7ee6:7df3:5dad:4b76:997e",
    },
    link: {
      id: "<id>",
      domain: "shameful-railway.biz",
      key: "<key>",
      url: "https://sparkling-season.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1767077755434",
      expiredUrl: "https://coordinated-subsidy.info",
      password: "OKVPsGHnB5tx1vs",
      title: "<value>",
      description: "lovable aside ah past educated or fedora",
      image: "https://picsum.photos/seed/SJaWv/1266/1930",
      video: "https://picsum.videos/seed/iAVNIy/3999/789",
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
      comments:
        "deer rightfully psst following geez easily mmm fabricate forenenst furthermore absentmindedly an",
      shortLink: "https://waterlogged-duster.biz/",
      qrCode: "https://charming-divine.org",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1731397609377",
      updatedAt: "1742726098002",
      projectId: "<id>",
    },
  },
};
```

### `components.SaleCreatedEvent`

```typescript
const value: components.SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1723780273002",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1735656173302",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://wide-eyed-straw.name/",
      country: "Argentina",
      city: "Veumstad",
      region: "<value>",
      continent: "Asia",
      device: "Desktop",
      browser: "Safari",
      os: "BeOS",
      referer: "calculating-reward.com",
      refererUrl: "https://plump-marketplace.biz",
      ip: "5cfb:b1a9:4973:95b0:dbcc:f2df:fd2c:04f7",
    },
    link: {
      id: "<id>",
      domain: "probable-e-mail.org",
      key: "<key>",
      url: "https://graceful-scratch.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1755139682667",
      expiredUrl: "https://rich-brochure.info/",
      password: "QBd6mohIuYJlxEO",
      title: "<value>",
      description: "mmm onto joshingly whose buttery once worth",
      image: "https://loremflickr.com/475/3753?lock=4127209124610956",
      video: "https://picsum.videos/seed/67m0qF/3029/815",
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
      comments: "so immense tomb total materialise lined",
      shortLink: "https://alarmed-brochure.biz",
      qrCode: "https://cool-final.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1721678407049",
      updatedAt: "1742708787843",
      projectId: "<id>",
    },
    sale: {
      amount: 9468.08,
      currency: "Pa'anga",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

### `components.PartnerCreatedEvent`

```typescript
const value: components.PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1723302364008",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Rickie10@gmail.com",
    image: "https://picsum.photos/seed/WC6SLI3oa/1177/1741",
    country: "Solomon Islands",
    payoutsEnabled: false,
    createdAt: "1733323381922",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "wide-sand.org",
        key: "<key>",
        shortLink: "https://any-advancement.info",
        url: "https://tricky-version.com",
      },
    ],
  },
};
```

