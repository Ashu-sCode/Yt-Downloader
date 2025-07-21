const Loading = () => {
  return (
    <div className="mt-6 text-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-red-500 mx-auto"></div>
      <p className="mt-2 text-gray-600">Fetching video... Please wait</p>
    </div>
  );
};

export default Loading;
