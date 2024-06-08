const Loader = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
      <p className="text-xl">Loading Investment Data...</p>
    </div>
  );
};

export default Loader;
