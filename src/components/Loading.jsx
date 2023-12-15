const Loading = () => {
  return (
    <div className="absolute inset-0 w-[100vw] h-[100vh] z-30 flex justify-center items-center">
      <div className="h-14 w-14 border-slate-500 animate-spin rounded-full border-4 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
};

export default Loading;
