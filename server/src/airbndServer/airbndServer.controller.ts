import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AirbndServerService } from "./airbndServer.service";
import { AirbndServerControllerBase } from "./base/airbndServer.controller.base";

@swagger.ApiTags("airbndServers")
@common.Controller("airbndServers")
export class AirbndServerController extends AirbndServerControllerBase {
  constructor(protected readonly service: AirbndServerService) {
    super(service);
  }
}
