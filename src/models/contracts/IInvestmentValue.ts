import { IOpenClosedPositions } from "./IOpenClosedPositions";

export interface IInvestmentValue {
  name: string;
  value: number;
  openClosedPositions: IOpenClosedPositions;
}
