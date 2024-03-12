import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

interface DashboardNavToggleButtonProps {
  isShown: boolean,
  toggleShown: () => void
}

export default function DashboardNavToggleButton(props: DashboardNavToggleButtonProps): JSX.Element {

  const { isShown, toggleShown } = props;

  return (
    <button onClick={toggleShown}>
      {isShown ? <ChevronLeft width={'2rem'} /> : <ChevronRight width={'2rem'} />}
    </button>
  );
}