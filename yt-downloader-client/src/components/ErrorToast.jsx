const ErrorToast = ({ message }) => {
  return (
    <div className="mt-4 text-red-500 font-semibold text-center">
      {message}
    </div>
  );
};

export default ErrorToast;
