import PropTypes from "prop-types";
import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description, onClick, isSelected }) {
  return (
    <Card
      className={`rounded-lg shadow-lg shadow-gray-500/10 border-4 border-white hover:border-black transition-all duration-300 ${isSelected ? "bg-black text-white border-black" : ""}`}
      onClick={onClick}
    >
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography
          variant="h5"
          className="mb-2 transition-colors duration-300"
          color={isSelected ? "white" : "blue-gray"}
        >
          {title}
        </Typography>
        <Typography
          className={`font-normal transition-colors duration-300 ${isSelected ? "text-white" : "text-blue-gray-600"}`}
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray", "gray", "brown", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal",
    "cyan", "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired, // Prop para manejar el click
  isSelected: PropTypes.bool, // Nueva prop para saber si la tarjeta está seleccionada
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
