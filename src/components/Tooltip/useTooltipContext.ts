import * as React from "react";

import type { TooltipContextType } from "../../lib/hooks/useTooltip";

export const TooltipContext = React.createContext<TooltipContextType>(null);

export function useTooltipContext() {
  const context = React.useContext(TooltipContext);

  if (!context) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
}
