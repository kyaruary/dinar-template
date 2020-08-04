import { Dinar, DinarStatic } from "./deps.ts";

const app = await Dinar.createApplication();

app.useStatic(new DinarStatic());

app.run();
