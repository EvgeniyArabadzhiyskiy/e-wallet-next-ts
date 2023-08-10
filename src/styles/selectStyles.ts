import { StylesConfig } from "react-select";
import { OptionType } from "../types/optionType";

export const selectStyles: StylesConfig<OptionType> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    borderBottom: "1px solid #bdbdbd",
    cursor: "pointer",
    marginRight: "auto",
    marginLeft: "auto",

    "&:hover": {
      borderBottom: "1px solid blue",
    },

    "@media (min-width: 768px)": {
      width: "100%",
    },
  }),
  option: (baseStyles, { isFocused, isSelected }) => ({
    ...baseStyles,
    fontSize: "18px",
    fontWeight: "500",
    color: isSelected ? "#FF6596" : "#111a83",
    padding: "14px 20px",
    cursor: "pointer",
    background: isSelected ? "#FFF" : "",
    borderBottom: isSelected ? "1px solid #bdbdbd" : "",

    ":hover": {
      color: "#FF6596",
    },
    transition: "color 250ms linear",
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: "none",
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: "#bdbdbd",
    fontSize: "18px",
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  }),

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#121112",
  }),
};
