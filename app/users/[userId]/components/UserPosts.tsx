type UserPostsProps = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: UserPostsProps) {
  const posts = await promise;

  return (
    <>
      <article className="flex flex-col px-4 gap-6 py-10">
        {posts.map((post, index) => (
          <div key={post.id}>
            <h3 className="font-semibold">Post {index + 1}</h3>

            <div className="py-2 px-4 border border-gray-100 rounded-md">
              <h4 className="text-lg font-medium text-teal-500">
                {post.title}
              </h4>
              <br />
              <p className="text-sm">{post.body}</p>
            </div>
          </div>
        ))}
      </article>
    </>
  );
}
