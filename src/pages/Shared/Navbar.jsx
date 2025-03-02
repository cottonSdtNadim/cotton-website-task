import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>Home</li>
      <li>About Cotton</li>
      <li>Work</li>
      <li>Sustainability</li>
      <li>Order</li>
      <li>Contact</li>
    </>
  );

  return (
    <div className="flex justify-between items-center px-[110px] py-[50px] text-black">
      {/* Cotton Logo */}
      <img
        src={cottonGreenLogo}
        alt="Cotton Green Logo"
        className="w-[99px] h-[86px]"
      />

      {/* NavItems Container */}
      <ul className="flex gap-[55px] font-semibold text-base">{navItems}</ul>
    </div>
  );
};

export default Navbar;
