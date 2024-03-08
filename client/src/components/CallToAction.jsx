import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Bright Exam's?</h2>
        <p className="text-gray-500 my-2">
          You can contact me and let's help you grow academically
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://chat.whatsapp.com/L4AqNZKwd0q3WTvHYfvNCJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Vibe
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://img.freepik.com/free-psd/education-concept-with-supplies_23-2149935204.jpg?w=996&t=st=1709906370~exp=1709906970~hmac=adbcfc1cc8e1976bb5af957a667071229f651284887f0c99df3fcc86af454790"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
