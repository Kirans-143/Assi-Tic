const Box = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="board_box">
      {value}
    </button>
  );
};

export default Box;
