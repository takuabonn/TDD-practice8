interface PinPositionalRelationship {
  [pin: number]: {
    right: number[][];
    left: number[][];
  };
}
const pinPositionalRelationship: PinPositionalRelationship = {
  2: {
    right: [[5], [3, 9, 6, 10]],
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
  private lyingDownNextLanePin(nextLanePins: number[]) {
    let number_of_lyingDownPin = 0;
    for (
      let nextLanePinIndex = 0;
      nextLanePinIndex < nextLanePins.length;
      nextLanePinIndex++
    ) {
      if (!this.s[nextLanePins[nextLanePinIndex] - 1]) {
        number_of_lyingDownPin = number_of_lyingDownPin + 1;
      }
    }
    return number_of_lyingDownPin === nextLanePins.length;
  }

  private existsOtherThanBesideLanePin(otherThanBesideLanePin: number[]) {
    for (
      let otherThanRightBesideLanePinIndex = 0;
      otherThanRightBesideLanePinIndex < otherThanBesideLanePin.length;
      otherThanRightBesideLanePinIndex++
    ) {
      const pinIndex =
        otherThanBesideLanePin[otherThanRightBesideLanePinIndex] - 1;
      if (this.s[pinIndex]) {
        return true;
      }
    }
    return false;
  }

  jude() {
    if (this.s[0]) {
      return "No";
    }
    for (let pinIndex = 0; pinIndex < this.s.length; pinIndex++) {
      if (pinIndex === 0 || !this.s[pinIndex]) {
        continue;
      }

      let nothingRightNextLanePin = false;
      let nothingLeftNextLanePin = false;
      let thereIsPinRightNextLaneOnwards = false;
      let thereIsPinLeftNextLaneOnwards = false;
      const pin_number = pinIndex + 1;
      const { right, left } = pinPositionalRelationship[pin_number];

      if (right.length) {
        nothingRightNextLanePin = this.lyingDownNextLanePin(right[0]);

        if (nothingRightNextLanePin && right[1]) {
          thereIsPinRightNextLaneOnwards = this.existsOtherThanBesideLanePin(
            right[1]
          );
        }
      }

      if (left.length) {
        nothingLeftNextLanePin = this.lyingDownNextLanePin(left[0]);

        if (nothingLeftNextLanePin && left[1]) {
          thereIsPinLeftNextLaneOnwards = this.existsOtherThanBesideLanePin(
            left[1]
          );
        }
      }

      const rightF = nothingRightNextLanePin && thereIsPinRightNextLaneOnwards;
      const leftF = nothingLeftNextLanePin && thereIsPinLeftNextLaneOnwards;

      if (rightF || leftF) {
        return "Yes";
      }
    }
    return "No";
  }
}

export default Split;
