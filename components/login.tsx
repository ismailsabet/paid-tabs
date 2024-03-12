import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [pending, setPending] = useState(false);
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUserameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);

    // Just to show the button loading feature
    await new Promise((resolve) => setTimeout(resolve, 500));

    const nameError = !username.trim() ? "Invalid username or email." : "";
    const passError = !password.trim() ? "Invalid password." : "";

    setUserameError(nameError);
    setPasswordError(passError);

    setPending(false);

    if (nameError || passError) {
      setPending(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    router.refresh();
  };

  return (
    <div className="auth-root">
      <div className="auth-content">
        <h1 className="heading">Sign in to PaidTabs</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="input-label">
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="input w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <div className="error">{usernameError}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                id="password"
                className="input w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="input-icon"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeIcon size={14} /> : <EyeOffIcon size={14} />}
              </button>
            </div>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>

          <button type="submit" className="btn dark lg w-full text-sm">
            <span>{pending ? "Signing in..." : "Sign In"}</span>
            {pending && <span className="spinner" />}
          </button>
        </form>
      </div>
    </div>
  );
}
