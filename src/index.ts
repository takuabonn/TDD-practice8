interface PinPositionalRelationship {
  [pin: number]: {
    right: number[][];
    left: number[][];
  };
}
const pinPositionalRelationship: PinPositionalRelationship = {
  2: {
    right: [
      [1, 5],
      [3, 9, 6, 10],
    ],
    left: [[4], [7]],
  },
  3: {
    right: [[6], [10]],
    left: [[5], [2, 8, 4, 7]],
  },
  4: {
    right: [
      [2, 8],
      [5, 3, 9, 6, 10],
    ],
    left: [[7]],
  },
  5: {
    right: [
      [3, 9],
      [6, 10],
    ],
    left: [
      [2, 8],
      [4, 7],
    ],
  },
  6: {
    right: [[10]],
    left: [
      [3, 9],
      [5, 2, 4, 8, 7],
    ],
  },
  7: {
    right: [[4], [2, 8, 5, 3, 9, 6, 10]],
    left: [],
  },
  8: {
    right: [[5], [3, 9, 6, 10]],
    left: [[4], [7]],
  },
  9: {
    right: [[6], [10]],
    left: [[5], [2, 8, 4, 7]],
  },
  10: {
    right: [],
    left: [[6], [3, 9, 5, 2, 8, 4, 7]],
  },
};
class Split {
  private s: number[];
  constructor(s: number[]) {
    this.s = s;
  }
  jude() {
    if (this.s[0]) {
      return "No";
    }
    for (let pinIndex = 0; pinIndex < this.s.length; pinIndex++) {
      if (pinIndex === 0) {
        continue;
      }
      const pin_number = pinIndex + 1;
      const { right, left } = pinPositionalRelationship[pin_number];
      for (let i = 0; i < right.length; i++) {
        const nextLanePins = right[0];
        for (
          let nextLanePinIndex = 0;
          nextLanePinIndex < nextLanePins.length;
          nextLanePinIndex++
        ) {
          const pinIndex = nextLanePins[nextLanePinIndex] - 1;
          if (this.s[pinIndex]) {
            return "No";
          }
        }
        const otherThanRightBesideLanePins = right[1];
        for (
          let otherThanRightBesideLanePinIndex = 0;
          otherThanRightBesideLanePinIndex <
          otherThanRightBesideLanePins.length;
          otherThanRightBesideLanePinIndex++
        ) {
          const pinIndex =
            otherThanRightBesideLanePins[otherThanRightBesideLanePinIndex] - 1;
          if (this.s[pinIndex]) {
            return "Yes";
          }
        }
      }
    }
  }
}

export default Split;
