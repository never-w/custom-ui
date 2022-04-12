import { HTMLAttributes } from 'react';

export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 警告提示的类型
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
