/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The payment processor via which the sale was made.
 */
export const PaymentProcessor = {
  Stripe: "stripe",
  Shopify: "shopify",
  Paddle: "paddle",
} as const;
/**
 * The payment processor via which the sale was made.
 */
export type PaymentProcessor = ClosedEnum<typeof PaymentProcessor>;

export type TrackSaleRequestBody = {
  /**
   * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
   */
  externalId?: string | undefined;
  /**
   * The amount of the sale. Should be passed in cents.
   */
  amount: number;
  /**
   * The payment processor via which the sale was made.
   */
  paymentProcessor: PaymentProcessor;
  /**
   * The name of the sale event. It can be used to track different types of event for example 'Purchase', 'Upgrade', 'Payment', etc.
   */
  eventName?: string | undefined;
  /**
   * The invoice ID of the sale.
   */
  invoiceId?: string | null | undefined;
  /**
   * The currency of the sale. Accepts ISO 4217 currency codes.
   */
  currency?: string | undefined;
  /**
   * Additional metadata to be stored with the sale event.
   */
  metadata?: { [k: string]: any } | null | undefined;
};

export type TrackSaleCustomer = {
  id: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  externalId: string | null;
};

export type Sale = {
  amount: number;
  currency: string;
  paymentProcessor: string;
  invoiceId: string | null;
  metadata: { [k: string]: any } | null;
};

/**
 * A sale was tracked.
 */
export type TrackSaleResponseBody = {
  eventName: string;
  customer: TrackSaleCustomer | null;
  sale: Sale | null;
};

/** @internal */
export const PaymentProcessor$inboundSchema: z.ZodNativeEnum<
  typeof PaymentProcessor
> = z.nativeEnum(PaymentProcessor);

/** @internal */
export const PaymentProcessor$outboundSchema: z.ZodNativeEnum<
  typeof PaymentProcessor
> = PaymentProcessor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentProcessor$ {
  /** @deprecated use `PaymentProcessor$inboundSchema` instead. */
  export const inboundSchema = PaymentProcessor$inboundSchema;
  /** @deprecated use `PaymentProcessor$outboundSchema` instead. */
  export const outboundSchema = PaymentProcessor$outboundSchema;
}

/** @internal */
export const TrackSaleRequestBody$inboundSchema: z.ZodType<
  TrackSaleRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  externalId: z.string().default(""),
  amount: z.number().int(),
  paymentProcessor: PaymentProcessor$inboundSchema,
  eventName: z.string().default("Purchase"),
  invoiceId: z.nullable(z.string()).default(null),
  currency: z.string().default("usd"),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type TrackSaleRequestBody$Outbound = {
  externalId: string;
  amount: number;
  paymentProcessor: string;
  eventName: string;
  invoiceId: string | null;
  currency: string;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const TrackSaleRequestBody$outboundSchema: z.ZodType<
  TrackSaleRequestBody$Outbound,
  z.ZodTypeDef,
  TrackSaleRequestBody
> = z.object({
  externalId: z.string().default(""),
  amount: z.number().int(),
  paymentProcessor: PaymentProcessor$outboundSchema,
  eventName: z.string().default("Purchase"),
  invoiceId: z.nullable(z.string()).default(null),
  currency: z.string().default("usd"),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleRequestBody$ {
  /** @deprecated use `TrackSaleRequestBody$inboundSchema` instead. */
  export const inboundSchema = TrackSaleRequestBody$inboundSchema;
  /** @deprecated use `TrackSaleRequestBody$outboundSchema` instead. */
  export const outboundSchema = TrackSaleRequestBody$outboundSchema;
  /** @deprecated use `TrackSaleRequestBody$Outbound` instead. */
  export type Outbound = TrackSaleRequestBody$Outbound;
}

export function trackSaleRequestBodyToJSON(
  trackSaleRequestBody: TrackSaleRequestBody,
): string {
  return JSON.stringify(
    TrackSaleRequestBody$outboundSchema.parse(trackSaleRequestBody),
  );
}

export function trackSaleRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackSaleRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackSaleRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackSaleRequestBody' from JSON`,
  );
}

/** @internal */
export const TrackSaleCustomer$inboundSchema: z.ZodType<
  TrackSaleCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/** @internal */
export type TrackSaleCustomer$Outbound = {
  id: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  externalId: string | null;
};

/** @internal */
export const TrackSaleCustomer$outboundSchema: z.ZodType<
  TrackSaleCustomer$Outbound,
  z.ZodTypeDef,
  TrackSaleCustomer
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleCustomer$ {
  /** @deprecated use `TrackSaleCustomer$inboundSchema` instead. */
  export const inboundSchema = TrackSaleCustomer$inboundSchema;
  /** @deprecated use `TrackSaleCustomer$outboundSchema` instead. */
  export const outboundSchema = TrackSaleCustomer$outboundSchema;
  /** @deprecated use `TrackSaleCustomer$Outbound` instead. */
  export type Outbound = TrackSaleCustomer$Outbound;
}

export function trackSaleCustomerToJSON(
  trackSaleCustomer: TrackSaleCustomer,
): string {
  return JSON.stringify(
    TrackSaleCustomer$outboundSchema.parse(trackSaleCustomer),
  );
}

export function trackSaleCustomerFromJSON(
  jsonString: string,
): SafeParseResult<TrackSaleCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackSaleCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackSaleCustomer' from JSON`,
  );
}

/** @internal */
export const Sale$inboundSchema: z.ZodType<Sale, z.ZodTypeDef, unknown> = z
  .object({
    amount: z.number(),
    currency: z.string(),
    paymentProcessor: z.string(),
    invoiceId: z.nullable(z.string()),
    metadata: z.nullable(z.record(z.any())),
  });

/** @internal */
export type Sale$Outbound = {
  amount: number;
  currency: string;
  paymentProcessor: string;
  invoiceId: string | null;
  metadata: { [k: string]: any } | null;
};

/** @internal */
export const Sale$outboundSchema: z.ZodType<Sale$Outbound, z.ZodTypeDef, Sale> =
  z.object({
    amount: z.number(),
    currency: z.string(),
    paymentProcessor: z.string(),
    invoiceId: z.nullable(z.string()),
    metadata: z.nullable(z.record(z.any())),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sale$ {
  /** @deprecated use `Sale$inboundSchema` instead. */
  export const inboundSchema = Sale$inboundSchema;
  /** @deprecated use `Sale$outboundSchema` instead. */
  export const outboundSchema = Sale$outboundSchema;
  /** @deprecated use `Sale$Outbound` instead. */
  export type Outbound = Sale$Outbound;
}

export function saleToJSON(sale: Sale): string {
  return JSON.stringify(Sale$outboundSchema.parse(sale));
}

export function saleFromJSON(
  jsonString: string,
): SafeParseResult<Sale, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Sale$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Sale' from JSON`,
  );
}

/** @internal */
export const TrackSaleResponseBody$inboundSchema: z.ZodType<
  TrackSaleResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  eventName: z.string(),
  customer: z.nullable(z.lazy(() => TrackSaleCustomer$inboundSchema)),
  sale: z.nullable(z.lazy(() => Sale$inboundSchema)),
});

/** @internal */
export type TrackSaleResponseBody$Outbound = {
  eventName: string;
  customer: TrackSaleCustomer$Outbound | null;
  sale: Sale$Outbound | null;
};

/** @internal */
export const TrackSaleResponseBody$outboundSchema: z.ZodType<
  TrackSaleResponseBody$Outbound,
  z.ZodTypeDef,
  TrackSaleResponseBody
> = z.object({
  eventName: z.string(),
  customer: z.nullable(z.lazy(() => TrackSaleCustomer$outboundSchema)),
  sale: z.nullable(z.lazy(() => Sale$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleResponseBody$ {
  /** @deprecated use `TrackSaleResponseBody$inboundSchema` instead. */
  export const inboundSchema = TrackSaleResponseBody$inboundSchema;
  /** @deprecated use `TrackSaleResponseBody$outboundSchema` instead. */
  export const outboundSchema = TrackSaleResponseBody$outboundSchema;
  /** @deprecated use `TrackSaleResponseBody$Outbound` instead. */
  export type Outbound = TrackSaleResponseBody$Outbound;
}

export function trackSaleResponseBodyToJSON(
  trackSaleResponseBody: TrackSaleResponseBody,
): string {
  return JSON.stringify(
    TrackSaleResponseBody$outboundSchema.parse(trackSaleResponseBody),
  );
}

export function trackSaleResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackSaleResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackSaleResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackSaleResponseBody' from JSON`,
  );
}
