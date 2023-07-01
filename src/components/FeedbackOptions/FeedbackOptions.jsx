import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

// Renderowanie bloku przycisków na podstawie tablicy options
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((name, index) => {
      return (
        <button
          type="button"
          onClick={onLeaveFeedback}
          name={name}
          key={index}
          className={css.button}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
