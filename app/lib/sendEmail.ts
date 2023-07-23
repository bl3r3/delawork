import axios from "axios";

const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) => {
  return axios({
    method: "post",
    url: "/api/testApi",
    data: {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;
