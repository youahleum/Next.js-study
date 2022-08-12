import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Next Movies</title>
      </Head>
      <h1>Hello</h1>
      <style jsx global>
        {`
          a {
            color: yellow;
          }
        `}
      </style>
    </div>
  );
}
