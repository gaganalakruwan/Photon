import DynamicIcons, {
  IconProps,
  IconType,
} from 'react-native-dynamic-vector-icons';

export type IconBaseProps = {
  type: keyof typeof IconType;
  icon: IconProps['name'];
} & Omit<IconProps, 'type' | 'name'>;

const CustomIcon = ({type, icon, ...props}: IconBaseProps) => {
  return <DynamicIcons type={IconType[type]} name={icon} {...props} />;
};

export default CustomIcon;
