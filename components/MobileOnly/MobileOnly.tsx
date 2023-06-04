import { Mobile } from "./MobileOnly.styled";

export default function MobileOnly({ children }: { children: React.ReactNode }) {
  return <Mobile>{children}</Mobile>;
}
