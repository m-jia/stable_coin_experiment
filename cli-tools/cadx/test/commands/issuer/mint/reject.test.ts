import { expect, test } from "@oclif/test";
import constants from "../../../constants";

describe("issuer:mint:reject", () => {
  test
    .stdout()
    .command([
      "issuer:mint:reject",
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
    .it("signs mint rejection transaction", (ctx) => {
      expect(ctx.stdout).to.contains(
        "0xf88a8222b885020c855800829ef59452952bf952c695edb565becc98b38ace3ec1a1da80a4cc56821d00000000000000000000000000000000000000000000000000000000000000082aa0ca9043e6c4993d91a415f980bcc361cd4e3d02c49fdbca35c3a688add87ad42fa05db4537f98bc80e7158468c9dbf51fb09d379c7a892a37f5cfcad9eabb073327"
      );
    });
});
