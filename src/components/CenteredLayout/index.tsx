import { css } from "@emotion/react";

export const CenteredLayout: React.FC = (props) => {
  return (
    <div
      css={css`
        max-width: 1280px;
        margin: 0 auto;
        background-color: red;
      `}
    >
      {props.children}
    </div>
  );
};
