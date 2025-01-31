export const fetchQuizData = async () => {
    try {
      const response = await fetch("https://thingproxy.freeboard.io/fetch/https://api.jsonserve.com/Uw5CrX  "); 
      const data = await response.json();
      return data;
    
      
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      return null;
    }
  };
  