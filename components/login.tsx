import { useEffect } from "react";
import { useFormState } from "react-dom";
import { loginAction } from "../lib/actions";
import SubmitButton from "./submit-button";
import PasswordField from "./password";
import { useRouter } from "next/navigation";

export default function Login() {
  const [state, formAction] = useFormState(loginAction, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
      router.refresh();
    }
  }, [state, router]);

  return (
    <div className="auth-root">
      <div className="auth-content">
        <h1 className="heading">Sign in to PaidTabs</h1>

        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="username" className="input-label">
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="input w-full"
              required
            />
          </div>

          <PasswordField />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
