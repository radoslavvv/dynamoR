import InvestedValuesCard from "./InvestedValuesCard";

import useInvestedValues from "../../hooks/useInvestedValues";
import useOpenClosedPositions from "../../hooks/useOpenClosedPositions";

import { CHART_LABELS } from "../../utils/constants";

const InvestedValues = (): JSX.Element => {
  const {
    propertiesInvestedValue,
    cryptoInvestedValue,
    rareMetalsInvestedValue,
    stocksInvestedValue,
    totalInvestedValue,
    investedValuesAreCalculated,
  } = useInvestedValues();

  const [
    propertiesOpenClosedPositions,
    cryptoOpenClosedPositions,
    rareMetalsOpenClosedPositions,
    stocksOpenClosedPositions,
    totalOpenClosedPositions,
  ] = useOpenClosedPositions();

  if (!investedValuesAreCalculated) {
    return <></>;
  }

  return (
    <div className="animate-fadeIn flex-col">
      <h1 className="flex justify-start text-2xl font-bold">Invested Value:</h1>

      <div className="mt-3 flex animate-fadeIn justify-start">
        <div className="stats flex w-96 flex-col bg-base-200 p-5 text-center shadow-xl lg:w-auto lg:flex-row">
          <InvestedValuesCard
            title={"Total Invested Value"}
            value={totalInvestedValue}
            openClosedPositions={totalOpenClosedPositions}
          />

          <InvestedValuesCard
            title={CHART_LABELS.properties}
            value={propertiesInvestedValue}
            openClosedPositions={propertiesOpenClosedPositions}
          />

          <InvestedValuesCard
            title={CHART_LABELS.stocks}
            value={stocksInvestedValue}
            openClosedPositions={stocksOpenClosedPositions}
          />

          <InvestedValuesCard
            title={CHART_LABELS.crypto}
            value={cryptoInvestedValue}
            openClosedPositions={cryptoOpenClosedPositions}
          />

          <InvestedValuesCard
            title={CHART_LABELS.rareMetals}
            value={rareMetalsInvestedValue}
            openClosedPositions={rareMetalsOpenClosedPositions}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestedValues;
