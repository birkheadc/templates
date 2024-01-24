import * as React from 'react';
import tailwindConfig from '../../../../../tailwind.config';

type ColorCodeProps = {
  color: string
}

export default function ColorCode(props: ColorCodeProps): JSX.Element {

  const colors: any = tailwindConfig.theme?.colors;
  const color: {[key: string]: string} = colors[props.color];

  const text = 
`'${props.color}': {\n` +
['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(n => `  '${n}': '${color[n]}'\n`).join('') +
'}';

  return (
    <div className='rounded-lg bg-slate-900'>
      <div className='w-full p-1 px-3 rounded-t-lg bg-slate-600'><code className='text-sm text-slate-50'>tailwind.config.ts</code></div>
      <div className='p-4 pr-16'>
        <code className='flex flex-col whitespace-pre text-slate-50'>
          <span><span className='text-amber-500'>'secondary'</span><span>: </span><span className='text-yellow-300'>{'{'}</span></span>
          {Object.keys(color).map((key) =>
            <span key={key}><span className='text-amber-500'>{`  '${key}'`}</span><span>: </span><span className='text-sky-400'>{`'${color[key]}'`}</span></span>
          )}
          <span className='text-yellow-300'>{'}'}</span>
        </code>
      </div>
    </div>
  );
}