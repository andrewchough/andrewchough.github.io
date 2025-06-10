import * as React from "react";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  Placement,
} from "@floating-ui/react";

export type TooltipContextType = ReturnType<typeof useTooltip> | null;

export interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  offset?: number;
  disabled?: boolean;
}

export function useTooltip({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  offset: offsetValue = 8,
  disabled = false,
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const floating = useFloating({
    placement,
    open: !disabled && open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(offsetValue), flip(), shift()],
  });

  const interactions = useInteractions([
    useHover(floating.context, {
      move: false,
      enabled: !disabled && controlledOpen == null,
      delay: {
        open: 200, // Delay before showing tooltip
        close: 0, // Delay before hiding tooltip
      },
    }),
    useFocus(floating.context, {
      enabled: !disabled && controlledOpen == null,
    }),
    useDismiss(floating.context),
    useRole(floating.context, { role: "tooltip" }),
  ]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      disabled,
      ...interactions,
      ...floating,
    }),
    [open, setOpen, disabled, interactions, floating]
  );
}
