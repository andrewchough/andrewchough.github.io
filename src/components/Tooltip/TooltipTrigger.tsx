import * as React from "react";

import { useMergeRefs } from "@floating-ui/react";

import { useTooltipContext } from "./useTooltipContext";

export interface TooltipTriggerProps extends React.HTMLProps<HTMLElement> {
  asChild?: boolean;
  children: React.ReactNode;
}

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  TooltipTriggerProps
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
  const state = useTooltipContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef]);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": state.open ? "open" : "closed",
        "data-disabled": state.disabled ? "true" : "false",
      })
    );
  }

  return (
    <button
      ref={ref}
      data-state={state.open ? "open" : "closed"}
      data-disabled={state.disabled ? "true" : "false"}
      disabled={state.disabled}
      {...state.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});
