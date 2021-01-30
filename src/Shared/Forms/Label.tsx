import React, { FC, memo } from 'react';

export const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export type LabelProps = {
  label: string;
  className?: string;
  camelCase?: boolean;
  upperCase?: boolean;
  required?: boolean;
};
export const labelClassName = 'block text-sm font-medium leading-5 text-gray-500';

const Label: FC<LabelProps> = (props: LabelProps) => {
  const { label, className, camelCase, upperCase, required } = props;
  let labelToDisplay;

  if (upperCase) {
    labelToDisplay = label?.toUpperCase();
  } else if (camelCase) {
    labelToDisplay = capitalize(label);
  } else {
    labelToDisplay = label;
  }
  return (
    <p className={className ? className : labelClassName}>
      {labelToDisplay}
      {required && '*'}
    </p>
  );
};

const WrappedLabel = memo(Label);
export { WrappedLabel as Label };
