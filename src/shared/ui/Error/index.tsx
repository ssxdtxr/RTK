export const Error = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center h-screen text-red-500">
      {text}
    </div>
  );
};
