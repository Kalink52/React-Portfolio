// TODO
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";
import { useState } from "react";
 
export default function SimpleRegistrationForm() {
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [firstNameValid, setFirstNameValid] = useState(false)
  // const [termsAccepted, setTermsAccepted] = useState(false)

  function handleClick() {
    if (termsAccepted === false){
      setTermsAccepted(true)
    }
    if(termsAccepted === true) {
      setTermsAccepted(false)
    }
  }

  return (
     <Card className="items-center" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contact Me
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your information and message
      </Typography>
      
      <form className=" block mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            placeholder="First and Last Name"
            label="First and Last Name"
            className="invalid:text-red-800"
            pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
            onInvalid={(valid) => {console.log(valid) }}
          />
          <Input
            size="lg"
            placeholder="name@mail.com"
            label="Email"
            className="invalid:text-red-800"
            pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
          />
          <Textarea required label="Message" />
        </div>
        <Checkbox
          defaultChecked={false}
          onClick={handleClick}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                onClick={() => alert('todo')}
                href="#"
                className="font-medium text-blue-700 transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth disabled={!termsAccepted}>
          Send Email
        </Button>
      </form>
    </Card>
  );
}