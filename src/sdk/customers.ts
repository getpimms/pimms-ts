/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersDelete } from "../funcs/customersDelete.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Customers extends ClientSDK {
  /**
   * Retrieve a list of customers
   *
   * @remarks
   * Retrieve a list of customers for the authenticated workspace.
   */
  async list(
    request: operations.GetCustomersRequest,
    options?: RequestOptions,
  ): Promise<Array<operations.GetCustomersResponseBody>> {
    return unwrapAsync(customersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a customer
   *
   * @remarks
   * [Deprecated]: Customer creation can only be done via tracking a lead event. Use the /track/lead endpoint instead.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async create(
    request?: operations.CreateCustomerRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateCustomerResponseBody> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a customer
   *
   * @remarks
   * Retrieve a customer by ID for the authenticated workspace.
   */
  async get(
    request: operations.GetCustomerRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCustomerResponseBody> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a customer
   *
   * @remarks
   * Update a customer for the authenticated workspace.
   */
  async update(
    request: operations.UpdateCustomerRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateCustomerResponseBody> {
    return unwrapAsync(customersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a customer
   *
   * @remarks
   * Delete a customer from a workspace.
   */
  async delete(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteCustomerResponseBody> {
    return unwrapAsync(customersDelete(
      this,
      id,
      options,
    ));
  }
}
