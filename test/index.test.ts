import { add } from "@/hoge";

describe("calc_utils.ts", () => {
  test("add", async () => {
    expect(add(1, 2)).toEqual(3);
  });
});
