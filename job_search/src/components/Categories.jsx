import { useEffect } from "react";

const Categories = () => {


 ; const fetchCategory = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?category=writing&limit=10"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Categorues", data);
      }
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, [])

  return <h1>This is categories</h1>;
};
export default Categories;
