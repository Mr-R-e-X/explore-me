'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
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
import { ModalActionEnum, useModal } from '@/contexts/modalContext';

const Contact = () => {
  const {
    state: { contact },
    dispatch,
  } = useModal(); // assuming context provides `contact` and `dispatch`
  const { toast } = useToast();

  const [errors, setErrors] = useState<Array<{ name?: string; email?: string; message?: string }>>(
    [],
  );
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#bb0000', '#ffffff'],
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setLoading(true);

      const result = querySchema.safeParse({ name, email, message });
      if (!result.success) {
        const messages: { name?: string; email?: string; message?: string } = {};
        result.error.errors.forEach((err) => {
          messages[err.path[0] as 'name' | 'email' | 'message'] = err.message;
        });
        setErrors([messages]);
        toast({ title: 'Please fill all the credentials', variant: 'destructive' });
        return;
      }

      await axios.post('/api/submit-query', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setErrors([]);
      launchConfetti();
      toast({ title: 'Thank You! I will contact you as soon as possible!' });
      dispatch({ type: ModalActionEnum.CLOSE_CONTACT });
    } catch (error) {
      toast({ title: 'An error occurred while sending the mail.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={contact}
      onOpenChange={(open) => {
        if (!open) dispatch({ type: ModalActionEnum.CLOSE_CONTACT });
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold">Contact Me</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Feel free to drop your message here. I will get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors?.[0]?.name && <Label className="text-red-500">{errors[0].name}</Label>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors?.[0]?.email && <Label className="text-red-500">{errors[0].email}</Label>}
          </div>

          <div>
            <Textarea
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none"
            />
            {errors?.[0]?.message && <Label className="text-red-500">{errors[0].message}</Label>}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4F4D69] text-white hover:scale-105 transition-all"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Smile className="mr-2" />}
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
