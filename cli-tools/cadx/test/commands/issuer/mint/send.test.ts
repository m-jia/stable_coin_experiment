import { expect, test } from "@oclif/test";
import constants from "../../../constants";

describe("issuer:mint:send", () => {
  test
    .stdout()
    .command([
      "issuer:mint:send",
      "--index",
      "8",
      "--sigmethod",
      "privkey",
      "--privkey",
      constants.privkey,
      "--nonce",
      "8888",
      "--gaspricegwei",
      "8.8",
      "--nobroadcast",
    ])
    .exit(0)
    .it("signs mint send transaction", (ctx) => {
      expect(ctx.stdout).to.contains(
        "0xf88b8222b885020c855800830104899452952bf952c695edb565becc98b38ace3ec1a1da80a48e33623b00000000000000000000000000000000000000000000000000000000000000082aa04a3b774c8fc5ad711be44d9edde9755fb37b335781d8c21fddeddb3c348f85fea052cd6b64be63833435adeaf0825045ade6f16d3d9f9d2896a379c08df2a0f2a0"
      );
    });
});
