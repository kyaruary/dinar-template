import { Controller, Get } from "../deps.ts";
import { CatService } from "../services/CatService.ts";

@Controller()
export class CatController {
  constructor(private cs: CatService) {}
  @Get("cat")
  getCat() {
    return this.cs.get();
  }
}
