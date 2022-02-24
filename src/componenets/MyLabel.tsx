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
}

export const MyLabel = ({
                          label   = 'Default Label',
                          size    = 'normal',
                          allCaps = false,
                          color   = 'text-primary',
                          backgroundColor
                        }: MyLabelProps) => {
  return (
    <span className={`${ size } ${ color }`} style={{ backgroundColor }}>
       { allCaps ? label?.toUpperCase() : label }
    </span>
  );
};
