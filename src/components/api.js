export const fetchQuizData = async () => {
    try {
      const response = await fetch("https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX"); 
      const data = await response.json();
      return data;
    
      
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      return null;
    }
  };
  
