import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "تم التسجيل بنجاح! 🎉",
        description: "شكراً لك على الانضمام إلى مجتمعنا",
      });
      setEmail("");
      setName("");
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-right bg-white/80 backdrop-blur-sm border-primary/20"
          required
        />
        <Input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-right bg-white/80 backdrop-blur-sm border-primary/20"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-accent transition-colors duration-300 transform hover:scale-105"
        disabled={loading}
      >
        {loading ? "جاري التسجيل..." : "اشترك الآن"}
      </Button>
    </form>
  );
};