'use client';
import { useToast } from '@/hooks/use-toast';
import { querySchema } from '@/schema/queryFormSchema';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Loader2, Smile } from 'lucide-react';
import { SyntheticEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import confetti from 'canvas-confetti';

const Contact = () => {
  const { toast } = useToast();

  const [errors, setErrors] = useState<Array<{ name?: string; email?: string; message?: string }>>(
    [],
  );
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const launchConfettie = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#bb0000', '#ffffff'], // Soft colors for confetti
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
        const messages: { name?: string; email?: string; message?: string } = {};
        result.error.errors.forEach((err) => {
          messages[err.path[0] as 'name' | 'email' | 'message'] = err.message;
        });
        setErrors([messages]);
        toast({
          title: 'Please fill all the credentials',
          variant: 'destructive',
        });
        return;
      }

      await axios.post('/api/submit-query', {
        name,
        email,
        message,
      });

      setName('');
      setEmail('');
      setMessage('');
      setErrors([]); // Clear errors after successful submission
      launchConfettie();
      toast({
        title: 'Thank You! I will contact you as soon as possible!',
        variant: 'default',
      });
    } catch (error) {
      toast({
        title: 'An error occurred while sending the mail.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full lg:px-12 md:px-8 px-2 py-4 h-full flex items-center justify-center "
      id="contactSection"
    >
      <div className="w-full">
        <div className="text-center text-[#3f3f56] mb-10">
          <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider">CONTACT</h1>
          <div className="h-1 w-16 mx-auto bg-[#4F4D69] rounded-xl my-3"></div>
          <p className="text-lg font-semibold leading-relaxed text-[#5c5c7e]">
            Feel free to contact me by submitting the form below. I will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="w-full lg:w-4/6 bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <div className="mb-6">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-3 px-5 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F4D69] transition-all"
              />
              {errors && errors[0]?.name && (
                <Label className="text-red-500 pl-2">{errors[0].name}</Label>
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
                className="w-full py-3 px-5 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F4D69] transition-all"
              />
              {errors && errors[0]?.email && (
                <Label className="text-red-500 pl-2">{errors[0].email}</Label>
              )}
            </div>

            <div className="mb-6">
              <Textarea
                placeholder="Type your message here."
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full py-3 px-5 text-lg border-2 border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#4F4D69] transition-all"
              />
              {errors && errors[0]?.message && (
                <Label className="text-red-500 pl-2">{errors[0].message}</Label>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                type="submit"
                disabled={loading}
                className="flex items-center bg-[#4F4D69] text-white font-bold py-3 px-8 rounded-md shadow-lg hover:scale-110 transition-all duration-300"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Smile className="mr-2" />}
                <span>SUBMIT</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
