export default function app({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <span>hey!!</span>
    </div>
  );
}
