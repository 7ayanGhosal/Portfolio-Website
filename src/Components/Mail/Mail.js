import React, { Component } from "react";
import classes from "./Mail.css";
class Mail extends Component {
  openModal = () => {
    document.getElementById("mail-modal").style.transform =
      "translate(0, 80vh)";
    document.getElementById("mail-logo").style.transform = "scale(0,0)";
  };
  closeModal = () => {
    document.getElementById("mail-modal").style.transform =
      "translate(0, -80vh)";
    document.getElementById("mail-logo").style.transform = "scale(1,1)";
  };
  render() {
    return (
      <div>
        <div id="mail-logo" onClick={this.openModal} className={classes.Mail}>
          <a className={"far fa-envelope "}></a>
        </div>
        <div id="mail-modal" className={classes.mail_body}>
          <a
            onClick={this.closeModal}
            className={"fa fa-times " + classes.cross}
            aria-hidden="true"
          ></a>
          <h3>
            <p class="fas fa-link" style={{ marginRight: 1 + "em" }}></p>Please
            Get In Touch And I Will Answer All Your Questions.
          </h3>
          <h4>
            <a
              href="self.ayan007@gmail.com"
              target="blank"
              className={classes.mail_body_a + " fas fa-envelope"}
            ></a>
          </h4>

          <h4>
            <a
              href="https://www.linkedin.com/in/ayan-ghosal-b75145139/"
              target="blank"
              className={classes.mail_body_a + " fab fa-linkedin-in"}
            ></a>
          </h4>

          <h4>
            <a
              href="https://github.com/7ayanGhosal"
              target="blank"
              className={classes.mail_body_a + " fab fa-github"}
            ></a>
          </h4>

          <h4>
            <a
              href="https://www.facebook.com/profile.php?id=100008393409281"
              target="blank"
              className={classes.mail_body_a + " fab fa-facebook"}
            ></a>
          </h4>
          <h4>
            <a
              href="https://www.instagram.com/_ayan_ghosal_/"
              target="blank"
              className={classes.mail_body_a + " fab fa-instagram"}
            ></a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Mail;
