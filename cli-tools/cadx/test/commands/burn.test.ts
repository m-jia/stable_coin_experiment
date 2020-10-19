import { expect, test } from "@oclif/test";
import constants from "../constants";

describe("burn", () => {
  test
    .stdout()
    .command([
      "burn",
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
    .it("signs burn transaction", (ctx) => {
      expect(ctx.stdout).to.contains(
        "0xf88a8222b885020c85580082a26594c1b73b51601253084136d258bd5b7dd00104cfa880a442966c680000000000000000000000000000000000000000000000000000000002faf0802aa0aa12cc2bae74d4f05382753db2d5f7836da8c3358387220da5091cec01dccabaa02aab3135f9b0246b8b1113381235b06d9509d31fa08f37fff4442b982be0fd1f"
      );
    });
});
