import { ComponentType, ReactElement, ReactNode } from 'react';

declare function phy(component: (string | ComponentType)[]): ReactElement;
declare function phy(
  comopnent: string | ComponentType,
  ...children: ReactNode[]
): ReactElement;
declare function phy(
  comopnent: string | ComponentType,
  props: Readonly<Record<string, any>> | undefined,
  ...children: ReactNode[]
): ReactElement;

declare namespace phy {
  let h: typeof phy;
}

export = phy;
