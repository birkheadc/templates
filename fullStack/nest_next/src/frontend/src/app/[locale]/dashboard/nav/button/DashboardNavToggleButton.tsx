import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

interface DashboardNavToggleButtonProps {
  isShown: boolean,
  toggleShown: () => void
}

export default function DashboardNavToggleButton(props: DashboardNavToggleButtonProps): JSX.Element {

  const { isShown, toggleShown } = props;

  return (
    <button className={`delay-300 duration-500 transition-all ${isShown ? 'translate-x-0' : 'translate-x-[250%]'}`} onClick={toggleShown}>
      {isShown ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}