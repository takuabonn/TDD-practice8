interface PinPosition {
  [key: number]: number[];
}
class Split {
  private pinsCondition: string;
  private pinPosition: PinPosition = {
    1: [7],
    2: [4],
    3: [2, 8],
    4: [1, 5],
    5: [3, 9],
    6: [6],
    7: [10],
  };

  constructor(pinsCondition: string) {
    this.pinsCondition = pinsCondition;
  }

  getPinPosition = () => {
    return this.pinPosition;
  };

  splitJude = () => {
    return "No";
  };
}

export default Split;
