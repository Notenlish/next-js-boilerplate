import LoginForm from "@/components/auth/login-form";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  return (
    <Suspense fallback={<Loader2 className="h-5 w-5 animate-spin" />}>
      <LoginForm></LoginForm>
    </Suspense>
  );
}
