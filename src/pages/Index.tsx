import { NewsletterForm } from "@/components/NewsletterForm";
import { FeatureCard } from "@/components/FeatureCard";
import { Video, Gift, Bell, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 py-16 text-right">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <img
            src="/lovable-uploads/ab8293e9-ed69-4fcc-b816-96d1726dea63.png"
            alt="صفر على اليمين"
            className="w-72 mx-auto animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            انضم إلى نشرتنا الإخبارية الحصرية
          </h1>
          <p className="text-xl text-gray-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            كن أول من يكتشف أحدث الاستراتيجيات والأدوات والرؤى حول كسب المال عبر الإنترنت
          </p>
        </div>

        <div className="max-w-md mx-auto mt-12 animate-fade-up backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-xl" style={{ animationDelay: "0.4s" }}>
          <NewsletterForm />
        </div>

        <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-gray-600">
            انضم إلى مجتمعنا المتنامي اليوم
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={Video}
            title="تحديثات حصرية"
            description="كن أول من يعرف عن الفيديوهات والمحتوى الجديد"
          />
          <FeatureCard
            icon={Gift}
            title="عروض وخصومات"
            description="خصومات حصرية على أفضل الأدوات والموارد"
          />
          <FeatureCard
            icon={Trophy}
            title="مسابقات حصرية"
            description="فرص للفوز بجوائز قيمة للمشتركين في مجتمعنا"
          />
          <FeatureCard
            icon={Bell}
            title="نصائح إضافية"
            description="نصائح واستراتيجيات حصرية غير مشاركة على اليوتيوب"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;