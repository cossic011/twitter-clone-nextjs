import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { handleModalState } from "../features/modal/modalSlice";
import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";
import { useRouter } from "next/router";

const CommentModal = () => {
  const { modalState, postIdState } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [post, setPost] = useState(null);
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    onSnapshot(doc(db, "posts", postIdState), (snapshot) => {
      setPost(snapshot);
    });
  }, [postIdState, db]);

  const sendComment = async () => {
    await addDoc(collection(db, "posts", postIdState, "comments"), {
      comment: input,
      name: session?.user?.name,
      username: session?.user?.username,
      userImg: session?.user?.image,
      timestamp: serverTimestamp(),
      userId: session?.user?.uid,
    });

    dispatch(handleModalState(false));
    setInput("");
    router.push(`/posts/${postIdState}`);
  };

  return (
    <div>
      {modalState && (
        <Modal
          isOpen={modalState}
          onRequestClose={() => dispatch(handleModalState(false))}
          className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 outline-none border-gray-200 rounded-xl shadow-lg"
          ariaHideApp={false}
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div
                onClick={() => dispatch(handleModalState(false))}
                className="hoverEffect w-10 h-10 flex items-center justify-center"
              >
                <XIcon className="h-[23px] text-gray-700" />
              </div>
            </div>
            <div className="p-2 flex items-center space-x-1 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
              <img
                className="h-11 w-11 rounded-full mr-4"
                src={post?.data()?.userImg}
                alt="user img"
              />
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline cursor-pointer">
                {post?.data()?.name}
              </h4>
              <span className="text-sm sm:text-[15px]">
                @{post?.data()?.username} -{" "}
              </span>
              <span className="text-sm sm:text-[15px] hover:underline">
                <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
              </span>
            </div>

            <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">
              {post?.data()?.text}
            </p>

            <div className="flex p-3 space-x-3">
              <img
                src={session?.user?.image}
                alt="User"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95 transition-all"
              />
              <div className="w-full divide-y divide-gray-200">
                <div className="">
                  <textarea
                    rows="2"
                    placeholder="Tweet your reply..."
                    className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <div className="flex">
                    {/* <div onClick={() => filePickerRef.current.click()}> */}
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />

                    {/* </div> */}
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  </div>
                  <button
                    onClick={sendComment}
                    disabled={!input.trim()}
                    className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 transition-all disabled:opacity-50"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentModal;
