import './mylabel.css'

export interface MyLabelProps {
  /**
   * The message on the label
   */
  label?: string;
  /**
   * The size of label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * message allCaps flag
   */
  allCaps?: boolean;
  /**
   * Color of the text label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Background color of the label
   */
  backgroundColor?: string;
  /**
   * Border Radius for the label
   */
  borderRadius?: string;
}

export const MyLabel = ({
                          label   = 'Default Label',
                          size    = 'normal',
                          allCaps = false,
                          color   = 'text-primary',
                          backgroundColor,
                          borderRadius = "1px"
                        }: MyLabelProps) => {
  return (
    <span className={`${ size } ${ color }`} style={{ backgroundColor, borderRadius }}>
       { allCaps ? label?.toUpperCase() : label }
    </span>
  );
};
