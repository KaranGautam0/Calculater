const Button = ({onButtonClick }) => {
  const btnName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="btn-all">
        {btnName.map((btn) => (
          <button onClick={()=>onButtonClick(btn)}>{btn}</button>
        ))}
      </div>
    </>
  );
};
export default Button;
