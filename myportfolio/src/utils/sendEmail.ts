import axios from "axios";

interface DataEmail {
  name?: string;
  email?: string;
  message?: string;
}

const staticForms = axios.create({
  baseURL: "https://api.staticforms.xyz",
});

const accessKey = "26150270-da1f-47c9-81c5-4aa9395ec7d4";
const subject = "Contato via Portfolio forms";

export const sendEmail = async (Data: DataEmail) => {
  await staticForms
    .post("/submit", { ...Data, accessKey, subject })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
