import * as React from "react";

interface RootProps {
  className?: string;
}

const Root: React.SFC<RootProps> = ({ children }) => <div>{children}</div>;

export default Root;
