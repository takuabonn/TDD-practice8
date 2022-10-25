import Split from "../src";

describe("split", () => {
  test("pin1が倒れていなかったらNo", () => {
    const s = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });

  test("1 番目のピンが倒れていたら次のピンで右方向でSplitじゃなかったらNo", () => {
    const s = [0, 1, 1, 1, 1, 1, 0, 1, 1, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });
  test("1 番目のピンが倒れていたら次のピンで右方向でSplitだったらYes", () => {
    const s = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("Yes");
  });
  test("1 番目のピンが倒れていたら次のピンで左方向でSplitだったらYes", () => {
    const s = [0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("Yes");
  });
  test("最後のピンで split じゃなかったら No", () => {
    const s = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });

  test("7ピンと10ピンでsplitならYes", () => {
    const s = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("Yes");
  });
  test("split No", () => {
    const s = [0, 0, 1, 1, 1, 0, 1, 1, 0, 0];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });
  test("split2 No", () => {
    const s = [0, 1, 0, 0, 1, 1, 0, 0, 1, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });
  test("split3 No", () => {
    const s = [0, 1, 1, 1, 1, 1, 1, 1, 0, 1];
    const split = new Split(s);
    expect(split.jude()).toBe("No");
  });
});
