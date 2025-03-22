/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventsList } from "../../funcs/eventsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListEventsRequest$inboundSchema,
};

export const tool$eventsList: ToolDefinition<typeof args> = {
  name: "events-list",
  description: `Retrieve a list of events

Retrieve a paginated list of events for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await eventsList(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
