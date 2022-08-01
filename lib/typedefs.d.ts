import { ComponentType, ReactNode } from 'react';

declare function phy(fragments: (string | ComponentType)[]): ReactNode;
declare function phy(
  selectorOrComp: string | ComponentType,
  ...kids: ReactNode[]
): ReactNode;
declare function phy(
  selectorOrComp: string | ComponentType,
  attrs: Readonly<Record<string, any>>,
  ...kids: ReactNode[]
): ReactNode;

declare namespace phy {
  let h: typeof phy;
}

export = phy;
