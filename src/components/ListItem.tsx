interface IProps {
  isHighlighted?: boolean;
  color?: string;
}

const ListItem: React.FC<IProps> = ({ isHighlighted, color }) => {
    console.log("color:", color);
    
  return <>{isHighlighted && <h2 style={{ color }}>ListItem</h2>}</>;
};

export default ListItem;
