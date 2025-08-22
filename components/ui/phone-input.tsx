"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultCountry?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ defaultCountry: _defaultCountry, ...props }, ref) => {
    void _defaultCountry;
    return <Input ref={ref} type="tel" {...props} />;
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput }; 