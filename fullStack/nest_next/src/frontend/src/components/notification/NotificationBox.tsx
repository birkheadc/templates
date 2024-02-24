import * as React from 'react';
import { NotificationType } from '../../types/notification/notificationType';
import NotificationIcon from './NotificationIcon';

type NotificationBoxProps = {
  type: NotificationType,
  children?: React.ReactNode
}

export default function NotificationBox(props: NotificationBoxProps): JSX.Element {

  const { type, children } = props;



  return (
    <div className={`${BORDER_COLOR[type]} ${COLOR[type]} ${BG_COLOR[type]} border-2 p-2 px-4 w-full flex justify-center items-center gap-4`}>
      <NotificationIcon type={type} />
      <span className='text-pretty'>{children}</span>
    </div>
  );
}

const BORDER_COLOR = {
  basic: 'border-basic-800',
  success: 'border-success-800',
  warning: 'border-warning-800',
  error: 'border-error-800',
}

const COLOR = {
  basic: 'text-basic-700',
  success: 'text-success-700',
  warning: 'text-warning-700',
  error: 'text-error-700',
}

const BG_COLOR = {
  basic: 'bg-basic-300',
  success: 'bg-success-300',
  warning: 'bg-warning-300',
  error: 'bg-error-300',
}