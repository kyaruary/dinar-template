import { Service } from "../deps.ts";

@Service()
export class CatService {
  get() {
    return ["cat"];
  }
}
