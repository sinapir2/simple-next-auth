import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-6xl font-bold text-primary mb-4">
            404
          </CardTitle>
          <h1 className="text-2xl font-bold text-foreground">صفحه یافت نشد</h1>
          <p className="text-muted-foreground mt-2">
            صفحه مورد نظر شما یافت نشد
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/">
            <Button variant="persian" className="gap-2">
              <Home className="w-4 h-4" />
              بازگشت به خانه
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
