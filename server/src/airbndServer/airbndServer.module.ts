import { Module } from "@nestjs/common";
import { AirbndServerModuleBase } from "./base/airbndServer.module.base";
import { AirbndServerService } from "./airbndServer.service";
import { AirbndServerController } from "./airbndServer.controller";
import { AirbndServerResolver } from "./airbndServer.resolver";

@Module({
  imports: [AirbndServerModuleBase],
  controllers: [AirbndServerController],
  providers: [AirbndServerService, AirbndServerResolver],
  exports: [AirbndServerService],
})
export class AirbndServerModule {}
