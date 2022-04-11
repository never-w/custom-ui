import React, { FC } from 'react';
import { Alert } from 'custom-ui';

interface IProps {}

const Demo1: FC<IProps> = () => {
  return <Alert kind="warning">这是一条警告提示</Alert>;
};

export default Demo1;
