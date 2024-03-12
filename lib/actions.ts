"use server";

type ReturnType = {
  errors?: string[];
  user?: { username: string; password: string };
};

export const loginAction = async (
  _: any,
  formData: FormData
): Promise<ReturnType> => {
  const errors = [];

  // Just to show the button loading feature
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!formData.get("username")) {
    errors.push("username");
  }

  if (!formData.get("password")) {
    errors.push("password");
  }

  if (errors.length) {
    return {
      errors,
    };
  }

  const user = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  return { user };
};
