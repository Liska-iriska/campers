import css from "./@sidebar/Sidebar.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const CampersLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.layoutStyle}>
      <aside className={css.aside}>{sidebar}</aside>
      <div className={css.children}>{children}</div>
    </section>
  );
};

export default CampersLayout;
