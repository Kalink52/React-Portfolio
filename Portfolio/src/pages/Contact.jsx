// TODO
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import {Textarea} from "@material-tailwind/react"
function Contact () {
    return(
        <>
<div className="flex items-center justify-center p-12">
  {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
  <div className="mx-auto w-full max-w-[550px]">
    <form 
    //TODO action="https://formbold.com/s/FORM_ID" method="POST" CHANGE THIS
    >
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>


      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
        >
          What is your email?
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="something@something.com"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

        <div className="mb-5">
        {/* <label
            htmlFor="text"
            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
        >
            Comments
        </label>
        <input
            type="text"
            name="text"
            id="text"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        /> */}
        <label
            htmlFor="text"
            className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
        > Message</label>
        <Textarea className="dark:bg-white"></Textarea>
      </div>


      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
        </>
    )
}

export default Contact