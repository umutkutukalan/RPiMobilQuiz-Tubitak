// assets/icons/index.ts
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const icons = {
  calendar: (props: any) => React.createElement(Ionicons, { name: "calendar", ...props }),
  search: (props: any) => React.createElement(Ionicons, { name: "search", ...props }),
  // Diğer ikonlar eklenebilir
};
