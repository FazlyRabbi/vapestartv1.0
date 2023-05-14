import { createContext, useEffect, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFatching, setIsFatching] = useState(false);

  useEffect(() => {
    checkUserLoggedId();
  }, []);

  const signup = async (userData) => {
    console.log(userData);
    const res = await fetch(`${API_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },

      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        password: userData.password,
      }),
    });

    const data = await res.json();

    if (data.user) {
      setUser(data);
      console.log(data);
      return;
    } else {
      setError(data);
    }
  };

  const singin = async ({ email: identifier, password }) => {
    setIsFatching(true);

    const res = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },

      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (data.user) {
      setUser(data);
      setIsFatching(false);
    } else {
      setIsFatching(false);
      setError(data);
    }
  };

  const signOut = async () => {
    setUser(null);
    setError(null);
    localStorage.removeItem("Token");
    // destroyCookie(null, "token");
    router.push("/");
  };

  const checkUserLoggedId = async () => {
    const token = localStorage.getItem("Token");

    if (!token) return;

    const strapiRes = await fetch(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });

    const user = await strapiRes.json();

    user.jwt = JSON.parse(token);

    if (strapiRes.ok) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        error,
        isFatching,
        user,
        singin,
        setUser,
        setError,
        signOut,
        setOpen,
        open,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
