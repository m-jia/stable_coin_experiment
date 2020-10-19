import { expect, test } from "@oclif/test";
import constants from "../../../constants";

describe("issuer:mint:propose", () => {
  test
    .stdout()
    .command([
      "issuer:mint:propose",
      "--to",
      "0x7dbEf2b9b71cC6ab18B432764609a66DEF496777",
      "--amount",
      "50",
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
    .it("signs mint proposal transaction", (ctx) => {
      expect(ctx.stdout).to.contains(
        "0xf8ac8222b885020c85580083016db59452952bf952c695edb565becc98b38ace3ec1a1da80b84415d4c5d50000000000000000000000007dbef2b9b71cc6ab18b432764609a66def4967770000000000000000000000000000000000000000000000000000000002faf08029a091d489ac722f2da243cd0bf69b1718864ad6130d3ad3b1c0016488aed02bf9c3a01e5352f5f2ba9f380689dbd67cbf76dc070a47ab8bcbd26f4b0b9f210b6ce907"
      );
    });

  test
    .stdout()
    .command([
      "issuer:mint:propose",
      "--amount",
      "50",
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
    .it(
      "signs mint proposal transaction and defaults recipient to self",
      (ctx) => {
        expect(ctx.stdout).to.contains(
          "0xf8ac8222b885020c85580083016db59452952bf952c695edb565becc98b38ace3ec1a1da80b84415d4c5d5000000000000000000000000cada4be4ac98f2cfa2ea0f80fe0feceee39c0e110000000000000000000000000000000000000000000000000000000002faf08029a08855102b8ffa712b9848d2b7f2ba68a147a33d5d5f03a9b8fe9310be7b94dfbba030cfa22b8fc9ad9862b0010226cf8effe7064d19225171beaef61040e13af784"
        );
      }
    );
});
