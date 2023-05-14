import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

function useProtectedRoute() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = user === null ? false : true; // your authentication logic here
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, []);
}

export default useProtectedRoute;
