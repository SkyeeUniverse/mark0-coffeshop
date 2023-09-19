import { User, Mail, Phone } from "react-feather";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div>
          <h2>
            Kontak <span>Kami</span>
          </h2>
          <p>
            dignissim convallis aenean et tortor at risus viverra adipiscing at
            in tellus integer feugiat scelerisque.
          </p>
          <div className="row-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127166.48901985776!2d119.32022520658666!3d-5.11131325287224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefdfbef1bb49f%3A0x5284c6f6d12e5dc3!2sNipah%20Mall!5e0!3m2!1sid!2sid!4v1694176678200!5m2!1sid!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
            <form action="">
              <div className="input-group">
                <User className="contact-icon" />
                <input type="text" placeholder="Nama"></input>
              </div>
              <div className="input-group">
                <Mail />
                <input type="text" placeholder="Email"></input>
              </div>
              <div className="input-group">
                <Phone />
                <input type="text" placeholder="Kontak"></input>
              </div>
              <button type="submit" className="btn">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
