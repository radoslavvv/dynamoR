const InvestedValues = () => {
  return (
    <div className="animate-fadeIn flex-col">
      <h1 className="flex justify-start text-2xl font-bold">Invested Value:</h1>

      <div className="mt-3 flex justify-start">
        <div className="stats flex w-96 flex-col bg-base-200 p-5 text-center shadow-xl lg:w-auto lg:flex-row">
          <div className="stat">
            <div className="stat-title">Total Invested Value</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-desc text-center">17 open / 14 closed</div>
          </div>

          <div className="stat ">
            <div className="stat-title">Properties</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-desc text-center">17 open / 14 closed</div>
          </div>

          <div className="stat">
            <div className="stat-title">Crypto</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-desc text-center">17 open / 14 closed</div>
          </div>

          <div className="stat">
            <div className="stat-title">Stocks</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-desc text-center">17 open / 14 closed</div>
          </div>

          <div className="stat">
            <div className="stat-title">Rare Materials</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-desc mt-2 text-center">
              17 open / 14 closed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedValues;
