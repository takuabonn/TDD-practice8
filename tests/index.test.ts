import Split from "../src";

test("ボーリングのピンと列の位置を紐付ける", () => {
  const split = new Split("0101110101");
  const pinPosition = split.getPinPosition();
  expect(pinPosition[1]).toEqual(expect.arrayContaining([7]));
  expect(pinPosition[2]).toEqual(expect.arrayContaining([4]));
  expect(pinPosition[3]).toEqual(expect.arrayContaining([2, 8]));
  expect(pinPosition[4]).toEqual(expect.arrayContaining([1, 5]));
  expect(pinPosition[5]).toEqual(expect.arrayContaining([3, 9]));
  expect(pinPosition[6]).toEqual(expect.arrayContaining([6]));
  expect(pinPosition[7]).toEqual(expect.arrayContaining([10]));
});

describe("split", () => {
  test("1番目のピンが倒れていなかったらNO", () => {
    const split = new Split("1101110101");
    expect(split.splitJude()).toBe("No");
  });
});
