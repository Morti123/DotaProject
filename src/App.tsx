import { useEffect, useState } from "react";
import { getHeroStatsAPI } from "./api";
import "./App.css";
import { I_HeroStats } from "./types";
import { HeroPreviewComponent } from "./components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
      
const queryClient = new QueryClient()

function App() {
  const [heroStats, setHeroStats] = useState<I_HeroStats[]>([]);



  useEffect(() => {
    const getData = async () =>{
      const data = await getHeroStatsAPI();
      setHeroStats(data)
    }
    getData()
  },[])
  useEffect(() => {
    console.log(heroStats);
  }, [heroStats]);
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <header>
        <p>hello header</p>
      </header>
      <div className="heroPreviewsDiv">
        {
          heroStats.map(item => {
            return  <HeroPreviewComponent hero={item}/>
          })
        }
      </div>
      <footer>hello footer</footer>
      </QueryClientProvider>
    </>
  );
}

export default App;
