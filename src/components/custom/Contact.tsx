"use client";
import { useToast } from "@/hooks/use-toast";
import { querySchema } from "@/schema/queryFormSchema";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Loader2, Smile } from "lucide-react";
import { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import confetti from "canvas-confetti";

const Contact = () => {
  const { toast } = useToast();

  const [errors, setErrors] = useState<
    Array<{ name?: string; email?: string; message?: string }>
  >([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  // const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const launchConfettie = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ["#bb0000", "#ffffff"],
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = querySchema.safeParse({
        name,
        email,
        message,
      });

      if (!result.success) {
        const messages: { name?: string; email?: string; message?: string } =
          {};
        result.error.errors.forEach((err) => {
          messages[err.path[0] as "name" | "email" | "message"] = err.message;
        });
        setErrors([messages]);
        toast({
          title: "Please fill all the credentials",
          variant: "destructive",
        });
        return;
      }
      await axios.post("/api/submit-query", {
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
      launchConfettie();
      toast({
        title: "Thank You! I will contact you as soon as possible!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "An error occurred while sending the mail.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:px-12 md:px-8 px-2 py-4" id={"contactSection"}>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider text-[#3f3f56] text-center mt-8 lg:mt-17 mb-1">
          CONTACT
        </h1>
        <div className="h-[8px] w-[52px] mx-auto bg-[#4F4D69] rounded-xl"></div>
        <p className="text-center text-base font-semibold tracking-wider text-[#5c5c7e] my-4">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="w-[90vw] lg:w-4/6 flex justify-center flex-col mx-auto p-10 rounded-xl bg-gray-100"
        >
          <div className="mb-6">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-font-semibold py-6 mt-4  bg-slate-200 placeholder:font-bold "
            />
            {errors && errors[0]?.name && (
              <Label className="text-red-400 pl-2"> {errors[0].name} </Label>
            )}
          </div>

          <div className="mb-6">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm font-semibold py-6  bg-slate-200 placeholder:font-bold"
            />
            {errors && errors[0]?.email && (
              <Label className="text-red-400 pl-2"> {errors[0].email} </Label>
            )}
          </div>
          <div className="mb-6">
            <Textarea
              placeholder="Type your message here."
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-sm font-semibold py-6  bg-slate-200 placeholder:font-bold resize-none"
            />
            {errors && errors[0]?.message && (
              <Label className="text-red-400 pl-2"> {errors[0].message} </Label>
            )}
          </div>
          <div className="mx-auto">
            <Button
              variant="outline"
              type="submit"
              disabled={loading}
              className="text-lg my-5 ml-3 bg-[#4F4D69] text-white relative font-bold w-max top-1 h-max px-8 py-3 tracking-widest shadow-md hover:shadow-lg hover:scale-105 hover:top-0 transition-all duration-100 ease-linear"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Smile />}
              <span>SUBMIT</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
