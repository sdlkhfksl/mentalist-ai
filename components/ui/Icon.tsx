import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  [key: string]: any;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon {...props} />;
};

export default Icon;
