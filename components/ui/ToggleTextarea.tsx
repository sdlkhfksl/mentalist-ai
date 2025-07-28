import React from 'react';

interface ToggleTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const ToggleTextarea = React.forwardRef<HTMLTextAreaElement, ToggleTextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <textarea ref={ref} {...props} />
      </div>

    );
  }
);

ToggleTextarea.displayName = 'ToggleTextarea';

export default ToggleTextarea;
