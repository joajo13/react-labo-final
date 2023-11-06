export const Comment = ({ commentOwner, postedAt, commentContent }) => {
  return (
    <div className="border rounded-xl border-gray-300 p-2 mt-2">
      <div className="flex space-x-3 items-center text-sm text-gray-500">
        <img
          src="https://i.imgur.com/9LcmFac.jpeg"
          alt="ProfilePostPic"
          className="h-5 w-5 rounded-md"
        />
        <span>•</span>
        <a className="hover:underline" href="">
          {commentOwner}
        </a>
      </div>
      <p className="text-sm">{commentContent}</p>
      <span className="text-gray-500 text-xs hover:underline">{postedAt}</span>
    </div>
  );
};
