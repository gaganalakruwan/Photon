import React from 'react';
import DynamicIcons, {
  IconProps,
  IconType,
} from 'react-native-dynamic-vector-icons';

export type IconBaseProps = {
  type: keyof typeof IconType;
  icon: IconProps['name'];
  color?: IconProps['color'];
  size?: IconProps['size'];
} & Omit<IconProps, 'type' | 'name' | 'color' | 'size'>;

const CustomIcon = ({
  type,
  icon,
  color = 'black', // Default color
  size = 24, // Default size
  ...props
}: IconBaseProps) => {
  return (
    <DynamicIcons
      type={IconType[type]}
      name={icon}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default CustomIcon;
