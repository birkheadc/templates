import * as React from 'react';
import { NotificationType } from '../../types/notification/notificationType';
import NotificationIcon from './NotificationIcon';
import utils from '../../utils';

type NotificationBoxProps = {
  className?: string,
  type: NotificationType,
  children?: React.ReactNode
}

export default function NotificationBox(props: NotificationBoxProps): JSX.Element {

  const { className, type, children } = props;

  

  return (
    <div className={utils.mergeClass('border-2 p-2 px-4 flex justify-center items-center gap-4 w-80', BORDER_COLOR[type], COLOR[type], BG_COLOR[type], className)}>
      <div className='w-fit'>
        <NotificationIcon type={type} />
      </div>
      <span className='text-pretty flex-grow'>{children}</span>
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