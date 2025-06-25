import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CatagoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );

      setCategoryNews(filterNews);
    
    } else {
      const filterNews = data.filter((news) => news.category_id == id);

      setCategoryNews(filterNews);
    }
  }, [data, id]);
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Total {categoryNews.length} News Fonund
      </h1>
      <div className="grid grid-cols-1 gap-5 ">
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        {
            categoryNews.map((news)=>
            <NewsCard key={news.id}
            news={news}>

            </NewsCard>)
        }
      </Suspense>
      </div>
    </div>
  );
};

export default CatagoryNews;
