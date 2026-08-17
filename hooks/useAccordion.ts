"use client";

import { useState } from "react";

export function useAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isOpen = (id: string) => openId === id;

  return { isOpen, toggle };
}
