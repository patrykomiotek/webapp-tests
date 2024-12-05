// import { type ReactNode, useState } from "react";
// import type { ReactNode } from "react";

interface Props {
  children: string;
}

export const Text = ({ children }: Props) => <p>{children}</p>;
