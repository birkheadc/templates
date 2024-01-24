import * as React from 'react';
import tailwindConfig from '../../../../../tailwind.config';

interface ColorCardProps {
  color: string,
  number: string
}

export default function ColorCard(props: ColorCardProps): JSX.Element {

  const colors: any = tailwindConfig.theme?.colors;
  const color = colors[props.color];

  return (
    <div className={`flex flex-col justify-center items-center rounded-lg w-32 lg:h-48`} style={{ backgroundColor: color[props.number], color: parseInt(props.number) >= 600 ? color[50] : color[950] }}>
      <span className={`font-bold`}>{props.number}</span>
      <span>{ color[props.number].substring(1).toUpperCase()}</span>
    </div>
  );
}