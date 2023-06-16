import React from "react";
import { cloneElement } from "react";

interface IProps {
  children: React.ReactNode;
  isHighlighted: boolean;
}

const List: React.FC<IProps> = ({ children, isHighlighted }) => {
    
  return (
    <div className="List">
      {React.Children.map(children, (child) =>
        cloneElement(child as React.ReactElement<any>, {
          isHighlighted: isHighlighted,
          color: "red",
        })
      )}
    </div>
  );
};

export default List;
