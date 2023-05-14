import React from "react";
import axios from "axios";

export const sendMailToken = async (email, subject, token) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/api/email/sendmail`,
      {
        // Request body data goes here
        email,
        subject,
        token,
      }
    );
    console.log(response.data); // Handle the response data
  } catch (error) {
    //  throw new Error()
    console.error(error); // Handle any errors
  }
};
