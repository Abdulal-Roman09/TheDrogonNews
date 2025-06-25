import React, { Suspense, useEffect, useState } from "react";
import Navber from "../Layouts/Navber";
import RightAside from "../Pages/Aside/RightAside";
import { useLoaderData, useParams } from "react-router";
import SingleNews from "./SingleNews";

const ReadMore = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
 

  useEffect(() => {
    if (data && id) {
      // Ensure data and id are defined
      const newsDetails = data.find((singleNews) => singleNews.id == id);
      setNews(newsDetails || {}); // Handle case where no matching news is found
    }
  }, [data, id]);

  return (
    <div className="container mx-auto">
      <Navber />
      <section className="grid grid-cols-12 gap-6">
        <main className="col-span-9">
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            {news && news.title ? ( // Check if news has valid data
              <article>
                <div>
                  <img
                    src={news.image_url || "default-image.jpg"}
                    alt={news.title}
                    className="w-full h-auto mb-4"
                  />
                  <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
                  <p className="mb-4">
                    {news.details || "No content available."}
                  </p>
                  <button
                    onClick={() => window.history.back()}
                    className="btn btn-secondary"
                  >
                    Back to Category
                  </button>
                </div>
              </article>
            ) : (
              <p>No news found.</p>
            )}
          </Suspense>
        </main>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </section>
    </div>
  );
};

export default ReadMore;
