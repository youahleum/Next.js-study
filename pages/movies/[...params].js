import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();

  //1.  아래처럼만 입력을 해주게 된다면 url로 넘어갔을때 server error가 뜨게 된다
  // const [title, id] = router.query.params;
  //2. 그래서 아래처럼 뒤에  || [] 이렇게 추가해주면 에러가 뜨는것을 막을수 있다
  // 아래는 csr로 렌더링 해준면서 에러를 없애준것
  //   const [title, id] = router.query.params || [];
  //   console.log(router);
  //   return (
  //     <div>
  //       {/* <Seo title={title} /> */}
  //       <h4>{title || "Loading..."}</h4>
  //     </div>
  //   );
  // }

  //3. 위는 csr 방식으로 렌더링해주었다면 아래는 ssr로 렌더링 진행
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
