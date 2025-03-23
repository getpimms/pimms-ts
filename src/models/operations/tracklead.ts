/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TrackLeadRequestBody = {
  /**
   * The ID of the click in PIMMS. You can read this value from `pimms_id` cookie.
   */
  clickId: string;
  /**
   * The name of the event to track.
   */
  eventName: string;
  /**
   * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  customerId?: string | null | undefined;
  /**
   * Name of the customer in the client's app.
   */
  customerName?: string | null | undefined;
  /**
   * Email of the customer in the client's app.
   */
  customerEmail?: string | null | undefined;
  /**
   * Avatar of the customer in the client's app.
   */
  customerAvatar?: string | null | undefined;
  /**
   * Additional metadata to be stored with the lead event
   */
  metadata?: { [k: string]: any } | null | undefined;
};

export type Click = {
  id: string;
};

export type Customer = {
  name: string | null;
  email: string | null;
  avatar: string | null;
  externalId: string | null;
};

/**
 * A lead was tracked.
 */
export type TrackLeadResponseBody = {
  click: Click;
  customer: Customer;
};

/** @internal */
export const TrackLeadRequestBody$inboundSchema: z.ZodType<
  TrackLeadRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  clickId: z.string(),
  eventName: z.string(),
  customerId: z.nullable(z.string()).default(null),
  customerName: z.nullable(z.string()).default(null),
  customerEmail: z.nullable(z.string()).default(null),
  customerAvatar: z.nullable(z.string()).default(null),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type TrackLeadRequestBody$Outbound = {
  clickId: string;
  eventName: string;
  customerId: string | null;
  customerName: string | null;
  customerEmail: string | null;
  customerAvatar: string | null;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const TrackLeadRequestBody$outboundSchema: z.ZodType<
  TrackLeadRequestBody$Outbound,
  z.ZodTypeDef,
  TrackLeadRequestBody
> = z.object({
  clickId: z.string(),
  eventName: z.string(),
  customerId: z.nullable(z.string()).default(null),
  customerName: z.nullable(z.string()).default(null),
  customerEmail: z.nullable(z.string()).default(null),
  customerAvatar: z.nullable(z.string()).default(null),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadRequestBody$ {
  /** @deprecated use `TrackLeadRequestBody$inboundSchema` instead. */
  export const inboundSchema = TrackLeadRequestBody$inboundSchema;
  /** @deprecated use `TrackLeadRequestBody$outboundSchema` instead. */
  export const outboundSchema = TrackLeadRequestBody$outboundSchema;
  /** @deprecated use `TrackLeadRequestBody$Outbound` instead. */
  export type Outbound = TrackLeadRequestBody$Outbound;
}

export function trackLeadRequestBodyToJSON(
  trackLeadRequestBody: TrackLeadRequestBody,
): string {
  return JSON.stringify(
    TrackLeadRequestBody$outboundSchema.parse(trackLeadRequestBody),
  );
}

export function trackLeadRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackLeadRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackLeadRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackLeadRequestBody' from JSON`,
  );
}

/** @internal */
export const Click$inboundSchema: z.ZodType<Click, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type Click$Outbound = {
  id: string;
};

/** @internal */
export const Click$outboundSchema: z.ZodType<
  Click$Outbound,
  z.ZodTypeDef,
  Click
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Click$ {
  /** @deprecated use `Click$inboundSchema` instead. */
  export const inboundSchema = Click$inboundSchema;
  /** @deprecated use `Click$outboundSchema` instead. */
  export const outboundSchema = Click$outboundSchema;
  /** @deprecated use `Click$Outbound` instead. */
  export type Outbound = Click$Outbound;
}

export function clickToJSON(click: Click): string {
  return JSON.stringify(Click$outboundSchema.parse(click));
}

export function clickFromJSON(
  jsonString: string,
): SafeParseResult<Click, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Click$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Click' from JSON`,
  );
}

/** @internal */
export const Customer$inboundSchema: z.ZodType<
  Customer,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/** @internal */
export type Customer$Outbound = {
  name: string | null;
  email: string | null;
  avatar: string | null;
  externalId: string | null;
};

/** @internal */
export const Customer$outboundSchema: z.ZodType<
  Customer$Outbound,
  z.ZodTypeDef,
  Customer
> = z.object({
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Customer$ {
  /** @deprecated use `Customer$inboundSchema` instead. */
  export const inboundSchema = Customer$inboundSchema;
  /** @deprecated use `Customer$outboundSchema` instead. */
  export const outboundSchema = Customer$outboundSchema;
  /** @deprecated use `Customer$Outbound` instead. */
  export type Outbound = Customer$Outbound;
}

export function customerToJSON(customer: Customer): string {
  return JSON.stringify(Customer$outboundSchema.parse(customer));
}

export function customerFromJSON(
  jsonString: string,
): SafeParseResult<Customer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Customer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Customer' from JSON`,
  );
}

/** @internal */
export const TrackLeadResponseBody$inboundSchema: z.ZodType<
  TrackLeadResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  click: z.lazy(() => Click$inboundSchema),
  customer: z.lazy(() => Customer$inboundSchema),
});

/** @internal */
export type TrackLeadResponseBody$Outbound = {
  click: Click$Outbound;
  customer: Customer$Outbound;
};

/** @internal */
export const TrackLeadResponseBody$outboundSchema: z.ZodType<
  TrackLeadResponseBody$Outbound,
  z.ZodTypeDef,
  TrackLeadResponseBody
> = z.object({
  click: z.lazy(() => Click$outboundSchema),
  customer: z.lazy(() => Customer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadResponseBody$ {
  /** @deprecated use `TrackLeadResponseBody$inboundSchema` instead. */
  export const inboundSchema = TrackLeadResponseBody$inboundSchema;
  /** @deprecated use `TrackLeadResponseBody$outboundSchema` instead. */
  export const outboundSchema = TrackLeadResponseBody$outboundSchema;
  /** @deprecated use `TrackLeadResponseBody$Outbound` instead. */
  export type Outbound = TrackLeadResponseBody$Outbound;
}

export function trackLeadResponseBodyToJSON(
  trackLeadResponseBody: TrackLeadResponseBody,
): string {
  return JSON.stringify(
    TrackLeadResponseBody$outboundSchema.parse(trackLeadResponseBody),
  );
}

export function trackLeadResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackLeadResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackLeadResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackLeadResponseBody' from JSON`,
  );
}
