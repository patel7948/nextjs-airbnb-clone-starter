import * as graphql from "@nestjs/graphql";
import { AirbndServerResolverBase } from "./base/airbndServer.resolver.base";
import { AirbndServer } from "./base/AirbndServer";
import { AirbndServerService } from "./airbndServer.service";

@graphql.Resolver(() => AirbndServer)
export class AirbndServerResolver extends AirbndServerResolverBase {
  constructor(protected readonly service: AirbndServerService) {
    super(service);
  }
}
