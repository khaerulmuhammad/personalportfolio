import { Button } from "@material-ui/core";
import { Email, LocationCity, WhatsApp } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  return (
    <form className="formInput">
      <h1>Contact Me 🚀</h1>

      <h2>
        "I am available on almost every social media. You can message me, I will
        reply within 24 hours "
      </h2>

      <label> Name :</label>
      <input placeholder="Name" />

      <label> Email :</label>
      <input placeholder="Email" />

      <label> Message :</label>
      <textarea placeholder="Message"></textarea>

      <Button type="submit">Submit</Button>

      <h3>
        <LocationCity /> Jembayat - Margasari . Tegal, Central Java - Indonesia
        - 52463
      </h3>

      <h3>
        <Email /> khaerulmuhammad1994@gmail.com
      </h3>

      <h4>
        <WhatsApp /> {"Telephone / WhatsApp"} +62 8953-6541-8682
      </h4>
    </form>
  );
}

export default SearchPage;
