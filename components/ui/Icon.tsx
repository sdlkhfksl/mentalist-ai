import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon {...props} />;
};

export default Icon;