import { useParams } from "react-router-dom"

function PostDetail() {
  const params = useParams();
  const postId = params.postId;
  return (
    <div>
      <h2>PostDetail: {postId}</h2>
    </div>
  )
}

export default PostDetail