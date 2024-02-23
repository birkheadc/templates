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
  basic: <CircleEllipsisIcon />,
  success: <CheckCircle2Icon />,
  warning: <AlertCircleIcon />,
  error: <XCircleIcon />,
}