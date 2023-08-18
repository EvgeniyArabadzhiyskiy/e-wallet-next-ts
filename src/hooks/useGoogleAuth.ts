import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


export const useGoogleAuth = () => {
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const accessToken = searchParams.get('accessToken');
      console.log("useEffect  accessToken:", accessToken);
      if (!accessToken) return;
  
    }, [ searchParams]);
  };