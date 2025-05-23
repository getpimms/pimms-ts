/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksCreate } from "../funcs/linksCreate.js";
import { linksUpsert } from "../funcs/linksUpsert.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Links extends ClientSDK {
  /**
   * Create a new link
   *
   * @remarks
   * Create a new link for the authenticated workspace.
   */
  async create(
    request?: operations.CreateLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateLinkLink> {
    return unwrapAsync(linksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Upsert a link
   *
   * @remarks
   * Upsert a link for the authenticated workspace by its URL. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.
   */
  async upsert(
    request?: operations.UpsertLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.UpsertLinkLink> {
    return unwrapAsync(linksUpsert(
      this,
      request,
      options,
    ));
  }
}
