import * as React from 'react';
import { NotificationType } from '../../types/notification/notificationType';
import { AlertCircleIcon, CheckCircle2Icon, CircleEllipsisIcon, XCircleIcon } from 'lucide-react';

type NotificationIconProps = {
  type: NotificationType
}

export default function NotificationIcon(props: NotificationIconProps): JSX.Element {

  const { type } = props;

  return (
    ICON[type]
  );
}

const ICON: { [key: string]: JSX.Element } = {
  basic: <CircleEllipsisIcon width={'4rem'} />,
  success: <CheckCircle2Icon width={'4rem'} />,
  warning: <AlertCircleIcon width={'4rem'} />,
  error: <XCircleIcon width={'4rem'} />,
}