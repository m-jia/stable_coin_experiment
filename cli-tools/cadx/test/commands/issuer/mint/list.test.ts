import { expect, test } from "@oclif/test";

describe("issuer:mint:list", () => {
  test
    .stdout()
    .command(["issuer:mint:list"])
    .it("runs issuer:mint:list", (ctx) => {
      expect(ctx.stdout).to.contain("pending mints");
    });
});
