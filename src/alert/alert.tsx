import React, { memo } from 'react';
import type { FC } from 'react';

import type { AlertProps, KindMap } from './interface';
import './style/index.less';

const prefixCls = 'custom-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

export default memo<typeof Alert>(Alert);
