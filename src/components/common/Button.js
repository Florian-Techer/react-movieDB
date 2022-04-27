export const CustomButton = ({ onClick, content }) => {
  return (
    <button className="btn" onClick={onClick}>
      {content}
    </button>
  );
};

export default CustomButton
