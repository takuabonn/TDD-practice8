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
  jude() {
    if (this.s[0]) {
      return "No";
    }
    for (let pinIndex = 0; pinIndex < this.s.length; pinIndex++) {
      if (pinIndex === 0 || !this.s[pinIndex]) {
        continue;
      }

      let rightDirectionFlag = false;
      let leftDirectionFlag = false;
      let rightTwoDirectionFlag = false;
      let leftTwoDirectionFlag = false;
      const pin_number = pinIndex + 1;
      const { right, left } = pinPositionalRelationship[pin_number];

      if (right.length) {
        let number_of_lyingDownPin = 0;
        const nextRightLanePins = right[0];
        for (
          let nextLanePinIndex = 0;
          nextLanePinIndex < nextRightLanePins.length;
          nextLanePinIndex++
        ) {
          if (!this.s[nextRightLanePins[nextLanePinIndex] - 1]) {
            number_of_lyingDownPin = number_of_lyingDownPin + 1;
          }
        }
        if (number_of_lyingDownPin === nextRightLanePins.length) {
          rightDirectionFlag = true;
        }

        if (rightDirectionFlag && right[1]) {
          const otherThanRightBesideLanePins = right[1];
          for (
            let otherThanRightBesideLanePinIndex = 0;
            otherThanRightBesideLanePinIndex <
            otherThanRightBesideLanePins.length;
            otherThanRightBesideLanePinIndex++
          ) {
            const pinIndex =
              otherThanRightBesideLanePins[otherThanRightBesideLanePinIndex] -
              1;
            if (this.s[pinIndex]) {
              rightTwoDirectionFlag = true;
            }
          }
        }
      }

      if (left.length) {
        let number_of_lyingDownPin = 0;
        const nextLeftLanePins = left[0];
        for (
          let nextLanePinIndex = 0;
          nextLanePinIndex < nextLeftLanePins.length;
          nextLanePinIndex++
        ) {
          if (!this.s[nextLeftLanePins[nextLanePinIndex] - 1]) {
            // return "No";
            number_of_lyingDownPin = number_of_lyingDownPin + 1;
          }
        }
        if (number_of_lyingDownPin === nextLeftLanePins.length) {
          leftDirectionFlag = true;
        }

        if (leftDirectionFlag && left[1]) {
          const otherThanLeftBesideLanePins = left[1];
          for (
            let otherThanLeftBesideLanePinIndex = 0;
            otherThanLeftBesideLanePinIndex <
            otherThanLeftBesideLanePins.length;
            otherThanLeftBesideLanePinIndex++
          ) {
            const pinIndex =
              otherThanLeftBesideLanePins[otherThanLeftBesideLanePinIndex] - 1;
            if (this.s[pinIndex]) {
              leftTwoDirectionFlag = true;
            }
          }
        }
      }

      const rightF = rightDirectionFlag && rightTwoDirectionFlag;
      const leftF = leftDirectionFlag && leftTwoDirectionFlag;
      if (rightF || leftF) {
        return "Yes";
      }
    }
    return "No";
  }
}

export default Split;
