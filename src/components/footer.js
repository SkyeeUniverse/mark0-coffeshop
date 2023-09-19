import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sosmed-f">
        <div className="ficon">
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Facebook />
          </a>
        </div>
      </div>
      <links className="links">
        <a href="#home">Home</a>
        <a href="#menu2">About Us</a>
        <a href="#about">Menu</a>
        <a href="#contact">Contact</a>
      </links>
      <div className="credits">
        <p>
          Create By <a href="">Fajrin</a>. | &copy; 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
