import { BigInt } from "@graphprotocol/graph-ts";
import { InvestorValuationHistory } from "../codegen/schema";
import { investorEntity } from "./investorEntity";

export function investorValuationHistoryEntity(
  owner: string,
  createdAt: BigInt
): InvestorValuationHistory {
  let id = owner + "/" + createdAt.toString();
  let investorValuationHistory = InvestorValuationHistory.load(id);

  if (!investorValuationHistory) {
    investorValuationHistory = new InvestorValuationHistory(id);
    investorValuationHistory.gav = BigInt.fromI32(0);
    investorValuationHistory.nav = BigInt.fromI32(0);
    investorValuationHistory.owner = investorEntity(owner, createdAt).id;
    investorValuationHistory.timestamp = createdAt;
    investorValuationHistory.save();
  }

  return investorValuationHistory as InvestorValuationHistory;
}
