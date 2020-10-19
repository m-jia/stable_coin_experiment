import { expect, test } from "@oclif/test";

describe("issuer:member:list", () => {
  test
    .stdout()
    .command(["issuer:member:list"])
    .it("runs issuer:member:list", (ctx) => {
      expect(ctx.stdout).to.contain("issuer members");
    });
});
