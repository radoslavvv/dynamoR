import React from "react";

import InvestmentTableCard from "./InvestmentTableCard";

import { AssetType } from "../../models/enums/AssetType";

import { getInvestmentTabTableData } from "../../utils/assets-helper";

import useInvestmentsManagement from "../../hooks/useInvestmentsManagement";

const InvestmentsManagement = (): JSX.Element => {
  const {
    stocksInvestmentTableData,
    propertiesInvestmentTableData,
    rareMetalsInvestmentTableData,
    cryptoInvestmentTableData,
    investmentTableDataIsCalculated,
  } = useInvestmentsManagement();

  const [selectedTab, setSelectedTab] = React.useState<AssetType>(
    AssetType.Property,
  );

  const tableData = getInvestmentTabTableData(
    selectedTab,
    propertiesInvestmentTableData,
    cryptoInvestmentTableData,
    stocksInvestmentTableData,
    rareMetalsInvestmentTableData,
  );

  if (!investmentTableDataIsCalculated) {
    return <></>;
  }

  return (
    <div className="mb-5 w-full flex-1 animate-slideUp">
      <h1 className="mb-3 flex justify-start text-2xl font-bold">
        Investments Management:
      </h1>
      <div className="rounded-3xl bg-base-300 p-5 shadow-xl">
        <div role="tablist" className="tabs tabs-bordered mb-5">
          <a
            role="tab"
            className={`tab ${selectedTab === AssetType.Property ? "tab-active" : ""}`}
            onClick={() => setSelectedTab(AssetType.Property)}
          >
            Properties
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === AssetType.Stock ? "tab-active" : ""}`}
            onClick={() => setSelectedTab(AssetType.Stock)}
          >
            Stocks
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === AssetType.Crypto ? "tab-active" : ""}`}
            onClick={() => setSelectedTab(AssetType.Crypto)}
          >
            Crypto
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === AssetType.RareMetal ? "tab-active" : ""}`}
            onClick={() => setSelectedTab(AssetType.RareMetal)}
          >
            Rare Metals
          </a>
        </div>

        <div className="flex flex-col gap-5">
          {tableData.map((c) => (
            <InvestmentTableCard key={c.name} data={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentsManagement;
