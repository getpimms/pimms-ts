# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1735990335609",
  data: {
    id: "<id>",
    domain: "fluffy-morbidity.com",
    key: "<key>",
    url: "https://woeful-sustenance.info/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1773089830594",
    expiredUrl: "https://weighty-tuxedo.net/",
    password: "tqANPDo3Q6rwjG7",
    title: "<value>",
    description: "calmly finished pace save",
    image: "https://loremflickr.com/3109/1038?lock=5292626996226994",
    video: "https://loremflickr.com/1092/1484?lock=4142013573455370",
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
    comments:
      "appropriate jubilantly lavish solemnly near submissive whether aha furthermore geez um scenario hippodrome vain tag polyester when",
    shortLink: "https://decent-hyphenation.biz/",
    qrCode: "https://everlasting-knitting.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1731223504930",
    updatedAt: "1742754287106",
    projectId: "<id>",
  },
};
```

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1740880205992",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://runny-vicinity.org",
      country: "Japan",
      city: "West Camylleview",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Firefox",
      os: "BeOS",
      referer: "wide-eyed-management.biz",
      refererUrl: "https://unlucky-halt.name",
      ip: "116.102.63.129",
    },
    link: {
      id: "<id>",
      domain: "gaseous-gazebo.name",
      key: "<key>",
      url: "https://grave-traffic.org",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1744301252296",
      expiredUrl: "https://juvenile-brush.info/",
      password: "gad4AatTdDSxGA4",
      title: "<value>",
      description: "supposing fidget faithfully",
      image: "https://picsum.photos/seed/8YSvVxVP/1641/2493",
      video: "https://loremflickr.com/3873/3679?lock=1574206265628008",
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
        "gadzooks blindly um platypus fund positively stylish barge card joshingly overload nor justly pity during ha lest gloss bide daintily",
      shortLink: "https://ironclad-litter.info/",
      qrCode: "https://skeletal-transparency.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1739476273842",
      updatedAt: "1742713271729",
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
  createdAt: "1738930108315",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1733014342189",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://smoggy-freight.name",
      country: "Guinea",
      city: "West Jerrell",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Firefox",
      os: "MacOS",
      referer: "curly-archaeology.org",
      refererUrl: "https://definitive-nun.com/",
      ip: "ffb6:ceb5:d805:7ca9:7def:8fbe:543e:69ab",
    },
    link: {
      id: "<id>",
      domain: "tepid-chapel.info",
      key: "<key>",
      url: "https://suburban-brochure.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1752358964816",
      expiredUrl: "https://insistent-bungalow.name/",
      password: "8YyF88NGDmdBvjB",
      title: "<value>",
      description: "slowly trek what selfishly reasoning safely ick",
      image: "https://loremflickr.com/3693/1132?lock=5406236898518144",
      video: "https://loremflickr.com/3852/592?lock=7868300403747342",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "indeed stale mockingly important throbbing wrongly extricate serpentine along consequently incidentally cop questioningly blacken around separate stealthily lawmaker per",
      shortLink: "https://uncomfortable-legislature.com/",
      qrCode: "https://well-lit-moment.com/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720297757325",
      updatedAt: "1742718812927",
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
  createdAt: "1711890435553",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1724210460616",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://excited-mortise.net/",
      country: "Czechia",
      city: "Nikolausshire",
      region: "<value>",
      continent: "North America",
      device: "Mobile",
      browser: "Firefox",
      os: "Linux",
      referer: "youthful-celsius.info",
      refererUrl: "https://wavy-viability.net/",
      ip: "65.67.32.134",
    },
    link: {
      id: "<id>",
      domain: "coordinated-eyeliner.name",
      key: "<key>",
      url: "https://alive-horst.name",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1769673719444",
      expiredUrl: "https://willing-doing.com/",
      password: "N9o7ldVcHQrz2bR",
      title: "<value>",
      description: "unless along er now downshift vice",
      image: "https://picsum.photos/seed/B7A0cXkDhW/442/2523",
      video: "https://picsum.videos/seed/odG6o/2914/1319",
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
      comments:
        "tenderly huzzah shanghai ruddy gadzooks tricky realistic toward ascertain yowza vivaciously alongside against",
      shortLink: "https://flickering-comestible.org/",
      qrCode: "https://strange-morbidity.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1727378731144",
      updatedAt: "1742763313557",
      projectId: "<id>",
    },
    sale: {
      amount: 3638.45,
      currency: "Surinam Dollar",
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
  createdAt: "1728741508618",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Vergie78@yahoo.com",
    image: "https://picsum.photos/seed/zXYRmTD/3665/1038",
    country: "Ireland",
    payoutsEnabled: false,
    createdAt: "1712356935399",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "meager-scholarship.net",
        key: "<key>",
        shortLink: "https://frivolous-self-confidence.name",
        url: "https://regal-airbus.com/",
      },
    ],
  },
};
```

