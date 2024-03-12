import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn dark lg w-full text-sm">
      <span>{pending ? "Signing in..." : "Sign In"}</span>

      {pending && <span className="spinner" />}
    </button>
  );
}
