import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function PasswordField() {
  const [visible, setVisible] = useState(false);

  return (
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
          required
        />
        <button
          type="button"
          className="input-icon"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <EyeIcon size={14} /> : <EyeOffIcon size={14} />}
        </button>
      </div>
    </div>
  );
}
