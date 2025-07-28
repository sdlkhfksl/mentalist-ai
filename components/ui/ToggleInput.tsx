import React from 'react';

interface ToggleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ToggleInput = React.forwardRef<HTMLInputElement, ToggleInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input type="text" ref={ref} {...props} />
      </div>
    );
  }
);

ToggleInput.displayName = 'ToggleInput';

export default ToggleInput;
