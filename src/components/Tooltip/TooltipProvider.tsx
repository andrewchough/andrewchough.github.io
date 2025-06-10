import * as React from "react";

import { useTooltip, TooltipOptions } from "../../lib/hooks/useTooltip";

import { TooltipContext } from "./useTooltipContext";

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode;
}

export default function TooltipProvider({
  children,
  ...options
}: TooltipProps) {
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}
