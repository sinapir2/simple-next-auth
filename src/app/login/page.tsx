"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { validateIranianMobile, normalizeMobile, fetchUserData, saveUserSession, User } from '@/lib/auth';
import { Loader2, Smartphone } from 'lucide-react';

export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate mobile number
    if (!validateIranianMobile(mobile)) {
      setError('لطفاً شماره موبایل معتبر وارد کنید');
      return;
    }

    setIsLoading(true);

    try {
      // Fetch user data from randomuser.me
      const userData = await fetchUserData();
      
      // Create user object with mobile number
      const user: User = {
        ...userData,
        mobile: normalizeMobile(mobile)
      };

      // Save session
      saveUserSession(user);

      toast({
        title: "ورود موفق",
        description: `خوش آمدید ${user.name}`,
      });

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      setError('خطا در ورود. لطفاً دوباره تلاش کنید');
      toast({
        title: "خطا در ورود",
        description: "لطفاً اتصال اینترنت خود را بررسی کنید",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-persian-gradient rounded-full mb-4 shadow-elegant mx-auto">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl">ورود به سیستم</CardTitle>
            <CardDescription>
              شماره موبایل خود را وارد کنید
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Login Form */}
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium">
                شماره موبایل
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="09123456789"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`text-left ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                disabled={isLoading}
                dir="ltr"
              />
              {error && (
                <p className="text-sm text-destructive text-right">
                  {error}
                </p>
              )}
              <div className="flex flex-wrap gap-1 justify-end">
                <Badge variant="secondary" className="text-xs">09xxxxxxxxx</Badge>
                <Badge variant="secondary" className="text-xs">+989xxxxxxxxx</Badge>
                <Badge variant="secondary" className="text-xs">00989xxxxxxxxx</Badge>
              </div>
            </div>

            <Button
              type="submit"
              variant={isLoading ? "loading" : "persian"}
              size="lg"
              className="w-full"
              disabled={isLoading || !mobile.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  در حال ورود...
                </>
              ) : (
                'ورود'
              )}
            </Button>
          </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card className="mt-6">
          <CardContent className="pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              با ورود، شرایط استفاده و حریم خصوصی را می‌پذیرید
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
