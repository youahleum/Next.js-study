import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  console.log("results", results);
  const router = useRouter();
  // const onClick = (id, title) => {
  //   router.push(`/movies/${title}/${id}`);
  // };

  // const onClick = (id, title, overview, poster_path) => {
  //   // console.log({ movie });
  //   router.push({
  //     pathname: `/movies/${title}/${id}`,
  //     query: {
  //       id,
  //       title,
  //       overview,
  //       poster_path,
  //     },
  //   });
  // };

  const onClick = (movie) => {
    console.log("{ movie }", { movie });
    router.push(
      {
        pathname: `/movies/${movie.title}/${movie.id}`,
        query: {
          // movie,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
        },
      },
      `/movies/${movie.title}/${movie.id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        // <div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title, movie.overview, movie.poster_path)}>
        <div className="movie" key={movie.id} onClick={() => onClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 안에서 어떤 코드를 쓰던 server에서 돌아가게 된다.
//  client가 아닌 server쪽에서만 작동하는것 -> 이걸 이용해 api키를 숨길수 있기도 하다
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
