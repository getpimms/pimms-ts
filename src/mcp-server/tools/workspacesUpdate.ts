/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { workspacesUpdate } from "../../funcs/workspacesUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  idOrSlug: z.string(),
  requestBody: operations.UpdateWorkspaceRequestBody$inboundSchema.optional(),
};

export const tool$workspacesUpdate: ToolDefinition<typeof args> = {
  name: "workspaces-update",
  description: `Update a workspace

Update a workspace by ID or slug.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspacesUpdate(
      client,
      args.idOrSlug,
      args.requestBody,
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
