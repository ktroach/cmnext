export const getFrontendBaseUrl = () => {
    // If App url is defined (Production), return it
    let appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (appUrl) {
      return appUrl;
    }
  
    // If this is the vercel deployment, return the preview url
    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl) {
      return `https://${vercelUrl}`;
    }
  
    return `http://localhost:3000`;
  }
  
  export const getBackendBaseUrl = () => {
    // If this is browser environment, return empty string
    // because we want to use relative path for browser
    if (typeof window !== "undefined") return "";
  
    // else return frontend url as we are using nextjs api routes
    return getFrontendBaseUrl();
  };
  
  export const getTRPCUrl = () => {
    return getBackendBaseUrl() + "/api/trpc";
  }

  export function absoluteUrl(path: string) {
    return `${getFrontendBaseUrl()}${path}`
  }
  
