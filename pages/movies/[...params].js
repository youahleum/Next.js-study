import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  // 3. csr로 받은 props
  // export default function Detail({ params }) {
  const router = useRouter();
  console.log(router);

  //1.  아래처럼만 입력을 해주게 된다면 url로 넘어갔을때 server error가 뜨게 된다
  // const [title, id] = router.query.params;

  //2. 그래서 아래처럼 뒤에  || [] 이렇게 추가해주면 에러가 뜨는것을 막을수 있다
  // 아래는 csr로 렌더링 해준면서 에러를 없애준것
  const [title, id] = router.query.params || [];
  console.log("router.query.params", router.query.params);
  console.log("router.query", router.query);
  return (
    <div>
      <Seo title={title} />
      <img src={`https://image.tmdb.org/t/p/w500${router.query.poster_path}`} />
      <h3>{title || "Loading..."}</h3>
      <div className="overveiw">{router.query.overview}</div>
      <style jsx>{`
        img {
          position:relative;
          left:50%;
          width: 300px;
          margin: 30px 0 0 -150px;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
        }

        h3 {
          font-size: 24px;
          text-align: center;
        }
        div.overveiw{
          font-size:16px
        }
      `}</style>
    </div>
  );
}

//3. 위는 csr 방식으로 렌더링해주었다면 아래는 ssr로 렌더링 진행
//   const [title, id] = params || [];
//   console.log(router);
//   console.log(params);
//   return (
//     <div>
//       <Seo title={title} />
//       <h4>{title}</h4>
//     </div>
//   );
// }

// export function getServerSideProps({ params: { params } }) {
//   return {
//     props: {
//       params,
//     },
//   };
// }
