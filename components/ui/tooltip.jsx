"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipContext = React.createContext();

const TooltipProvider = ({ children }) => {
  const [openTooltip, setOpenTooltip] = React.useState(null);

  return (
    <TooltipContext.Provider value={{ openTooltip, setOpenTooltip }}>
      <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>
    </TooltipContext.Provider>
  );
};

const Tooltip = ({ children, id, ...props }) => {
  const { openTooltip, setOpenTooltip } = React.useContext(TooltipContext);
  const open = openTooltip === id;

  const handleToggle = () => {
    setOpenTooltip(open ? null : id);
  };

  return (
    <TooltipPrimitive.Root open={open} onOpenChange={setOpenTooltip} {...props}>
      {React.Children.map(children, (child) => {
        if (child.type === TooltipTrigger) {
          return React.cloneElement(child, {
            onClick: handleToggle,
          });
        }
        return child;
      })}
    </TooltipPrimitive.Root>
  );
};

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
