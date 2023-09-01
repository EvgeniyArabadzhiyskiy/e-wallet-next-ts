export const getMessageForError = (errorCode: string) => {
  switch (errorCode) {
    case "401":
      return {
        reason: "You are not authorized to access this resource.",
        text: "Please log in or authenticate to proceed."
      }
      
      case "404":
          return {
            reason: "Oops, the page you're looking for doesn't exist.",
            text: "Please check the URL and try again."
          }
          default:
              return {
                reason: `An error occurred ${errorCode}.`,
                text: "Please try again later."
              }
              
            }
        };
        
        // "You are not authorized to access this resource. Please log in or authenticate to proceed.";
        // "Oops, the page you're looking for doesn't exist. Please check the URL and try again.";
        // `An error occurred ${errorCode}. Please try again later.`;