import { SingleLink } from "./singleLink";

export const NavLinks = () => {
  return (
    <div className="lg:flex gap-16 hidden">
      <SingleLink title="Home" goTo={"/"} />
      <SingleLink title="About us" goTo={"/"} />
      <SingleLink title="Blogs" goTo={"/"} />
      <SingleLink title="Our services" goTo={"/"} />
      <SingleLink title="Our offers" goTo={"/"} />
    </div>
  );
};
