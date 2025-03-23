/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { PimmsCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$embedTokensCreate } from "./tools/embedTokensCreate.js";
import { tool$linksCount } from "./tools/linksCount.js";
import { tool$linksCreate } from "./tools/linksCreate.js";
import { tool$linksCreateMany } from "./tools/linksCreateMany.js";
import { tool$linksDelete } from "./tools/linksDelete.js";
import { tool$linksDeleteMany } from "./tools/linksDeleteMany.js";
import { tool$linksGet } from "./tools/linksGet.js";
import { tool$linksList } from "./tools/linksList.js";
import { tool$linksUpdate } from "./tools/linksUpdate.js";
import { tool$linksUpdateMany } from "./tools/linksUpdateMany.js";
import { tool$linksUpsert } from "./tools/linksUpsert.js";
import { tool$qrCodesGet } from "./tools/qrCodesGet.js";
import { tool$trackLead } from "./tools/trackLead.js";
import { tool$trackSale } from "./tools/trackSale.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  token?: SDKOptions["token"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Pimms",
    version: "0.0.8",
  });

  const client = new PimmsCore({
    token: deps.token,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$linksCreate);
  tool(tool$linksList);
  tool(tool$linksCount);
  tool(tool$linksGet);
  tool(tool$linksUpdate);
  tool(tool$linksDelete);
  tool(tool$linksCreateMany);
  tool(tool$linksUpdateMany);
  tool(tool$linksDeleteMany);
  tool(tool$linksUpsert);
  tool(tool$trackLead);
  tool(tool$trackSale);
  tool(tool$embedTokensCreate);
  tool(tool$qrCodesGet);

  return server;
}
