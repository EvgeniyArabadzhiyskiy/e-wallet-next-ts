import stl from "./Container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={stl.container}>{children}</div>;
}
