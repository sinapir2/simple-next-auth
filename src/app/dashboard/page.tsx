"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { getUserSession, clearUserSession, User } from '@/lib/auth';
import { LogOut, User as UserIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const session = getUserSession();
    if (!session) {
      router.push('/login');
      return;
    }
    setUser(session);
  }, [router]);

  const handleLogout = () => {
    clearUserSession();
    toast({
      title: "خروج موفق",
      description: "با موفقیت از سیستم خارج شدید",
    });
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-subtle-gradient flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Header */}
      <Card className="rounded-none border-x-0 border-t-0">
        <CardContent className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-persian-gradient rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl">داشبورد</CardTitle>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Welcome Card */}
        <Card className="mb-6">
          <CardContent className="pt-8">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="w-20 h-20 shadow-elegant">
              <AvatarImage src={user.picture} alt={user.name} />
              <AvatarFallback className="bg-persian-gradient text-white text-xl">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                خوش آمدید، {user.name}
              </h2>
              <p className="text-muted-foreground">
                به داشبورد شخصی خود خوش آمدید
              </p>
            </div>
          </div>

          <Separator className="my-6" />
          
          {/* User Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  نام کامل
                </Label>
                <p className="text-foreground font-medium">{user.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  شماره موبایل
                </Label>
                <Badge variant="outline" className="font-mono" dir="ltr">
                  {user.mobile}
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  ایمیل
                </Label>
                <Badge variant="outline" className="font-mono" dir="ltr">
                  {user.email}
                </Badge>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  وضعیت حساب
                </Label>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-green-500 text-white">
                    فعال
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
