import "./styles.css";
export const Button = (props) => {
  return (
    <button className="bt" {...props}>
      {props.children}
    </button>
  );
};
