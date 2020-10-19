import { expect, test } from "@oclif/test";
import constants from "../constants";

describe("transfer", () => {
  test
    .stdout()
    .command([
      "transfer",
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
    .it("signs transfer transaction", (ctx) => {
      expect(ctx.stdout).to.contains(
        "0xf8ab8222b885020c85580082e1da94c1b73b51601253084136d258bd5b7dd00104cfa880b844a9059cbb0000000000000000000000007dbef2b9b71cc6ab18b432764609a66def4967770000000000000000000000000000000000000000000000000000000002faf0802aa09a49867db15a4e78d93c47b90c283c1d4a4b74817c0abfe1a46bf10dc0a9fe93a06fff8fba889be4b7f1723a6b55d088da41642ab1081388bfbefcfc2fd3070810"
      );
    });
});
