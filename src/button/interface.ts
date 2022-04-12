export interface BaseButtonProps {
  /**
   * 设置按钮类型
   */
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'danger';
  /**
   * 设置按钮的图标组件
   */
  icon?: React.ReactNode;
  /**
   * 设置按钮形状
   */
  shape?: 'default' | 'circle' | 'round';
  /**
   * 设置按钮大小
   */
  size?: 'small' | 'middle' | 'large' | undefined;
  /**
   * 设置按钮载入状态
   */
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  /**
   * 设置按钮类名
   */
  className?: string;
  /**
   * 幽灵属性，使按钮背景透明
   */
  ghost?: boolean;
  /**
   * 设置危险按钮
   */
  danger?: boolean;
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
