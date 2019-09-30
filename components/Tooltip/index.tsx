import Tippy from "@tippy.js/react";

interface Props {
  content: string;
  style?: any;
  children: any;
}

const Tip = (props: Props) => {
  const { style = {}, content, ...rest } = props;

  return (
    <Tippy
      placement="top"
      touch={false}
      arrow={true}
      arrowType={"round"}
      hideOnClick={false}
      content={
        <span style={{ fontSize: "14px", fontWeight: "600", ...style }}>
          {content}
        </span>
      }
      // https://github.com/FezVrasta/popper.js/issues/535
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: "window"
          }
        }
      }}
      {...rest}
    />
  );
};

export default Tip;
