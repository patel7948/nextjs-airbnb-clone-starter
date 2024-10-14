import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AirbndServerServiceBase } from "./base/airbndServer.service.base";

@Injectable()
export class AirbndServerService extends AirbndServerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
