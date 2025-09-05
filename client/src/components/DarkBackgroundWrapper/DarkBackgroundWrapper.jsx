export const DarkBackgroundWrapper = ({ children }) => {
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-20">
      {children}
    </div>
  );
};
