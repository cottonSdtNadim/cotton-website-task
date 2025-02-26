import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-34 text-black">
      {/* Cotton Logo */}
      <img
        src={cottonGreenLogo}
        alt="Cotton Green Logo"
        className="w-[99px] h-[86px]"
      />

      {/* NavItems Container */}
      <ul className="flex space-x-[55px]">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
