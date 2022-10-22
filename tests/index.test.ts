import Split from "../src";

describe("split", () => {
  test("pin1が倒れていなかったらNo", () => {
    const s = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });

  test("1 番目のピンが倒れていたら次のピンで右方向でSplitじゃなかったらNo", () => {
    const s = [0, 1, 1, 1, 1, 1, 0, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });
  test("1 番目のピンが倒れていたら次のピンで右方向でSplitだったらYes", () => {
    const s = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("Yes");
  });
  // test("1 番目のピンが倒れていたら次のピンで左方向でSplitだったらYes", () => {
  //   const s = [0, 1, 1, 0, 1, 1, 7, 1, 0, 1];
  //   const split = new Split(s);
  //   expect(split.jude()).toBe("Yes");
  // });
});
