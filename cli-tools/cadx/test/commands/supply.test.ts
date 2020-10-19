import { expect, test } from "@oclif/test";

describe("supply", () => {
  test
    .stdout()
    .command(["supply"])
    .it("runs supply", (ctx) => {
      expect(ctx.stdout).to.contain("Total supply");
    });
});
