import * as React from "react";

import {
  FloatingPortal,
  useDelayGroup,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";

import { useTooltipContext } from "./useTooltipContext";

const INSTANT_DURATION = 0;
const TRANSITION_DURATION = 250;

interface TooltipContentProps extends React.HTMLProps<HTMLDivElement> {
  style?: React.CSSProperties;
}

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipContentProps
>(function TooltipContent(props, propRef) {
  const state = useTooltipContext();
  const ref = useMergeRefs([state.refs.setFloating, propRef]);

  const { isInstantPhase, currentId } = useDelayGroup(state.context, {
    id: state.context.floatingId,
  });

  const { isMounted, styles } = useTransitionStyles(state.context, {
    duration: isInstantPhase
      ? {
          open: INSTANT_DURATION,
          close:
            currentId === state.context.floatingId
              ? TRANSITION_DURATION
              : INSTANT_DURATION,
        }
      : TRANSITION_DURATION,
    initial: {
      opacity: 0,
    },
  });

  if (!isMounted) return null;

  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{
          ...state.floatingStyles,
          ...props.style,
          ...styles,
        }}
        {...state.getFloatingProps(props)}
      />
    </FloatingPortal>
  );
});
