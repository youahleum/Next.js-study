import Head from "next/head";

export default function Home() {
  return (
    <div>
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
