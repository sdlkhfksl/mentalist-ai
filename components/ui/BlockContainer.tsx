import React from 'react';

interface BlockContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any specific props for BlockContainer if needed
}

const BlockContainer = React.forwardRef<HTMLDivElement, BlockContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);

BlockContainer.displayName = 'BlockContainer';

export default BlockContainer;
