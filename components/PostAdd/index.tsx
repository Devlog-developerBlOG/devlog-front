/* eslint-disable react/no-children-prop */
import { useState } from "react";
import * as S from "./styled";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import CustomAxios from "../../utils/lib/CustomAxios";
import rehypeRaw from "rehype-raw";

const BlogAdd = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeFile = async (e: any) => {
    e.preventDefault();
    let reader = new FileReader();
    if (e.target.files[0]) {
      let formData = new FormData();
      reader.readAsDataURL(e.target.files[0]);
      formData.append("image", e.target.files[0]);
      try {
        const { data } = await CustomAxios.post("/image/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setDesc(
          `${desc} <img src="${data.imageUrl}" alt="image" width="100%">`
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  console.log(desc);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await CustomAxios.post("/post/", {
        title: title,
        content: desc,
        tag: ["벡엔드", "프론트엔드"],
        thumbnailUrl: "",
      });
      console.log("추가됐습니다!");
      router.push("/post");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <S.BlogAddWapper>
      <S.BlogAdd>
        <S.Box>
          <S.InputBox>
            <textarea
              name="textareaTitle"
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder="제목을 입력해주세요"
            />
          </S.InputBox>
          <S.DescInputBox>
            <textarea
              name="textarea"
              onChange={(e) => setDesc(e.currentTarget.value)}
              placeholder="내용을 입력하세요(markdown)"
              value={desc}
            />
          </S.DescInputBox>
        </S.Box>
        <S.BlogAddImgWapper>
          <form name="files" method="post" encType="multipart/form-data">
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
              accept="image/*"
            />
          </form>
          <label htmlFor="change_img">추가</label>
        </S.BlogAddImgWapper>
        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        <S.Button onClick={onSubmit}>올리기</S.Button>
      </S.BlogAdd>
      <S.BlogAddpreview>
        <h1>{title}</h1>
        <pre>
          <ReactMarkdown
            remarkPlugins={[[remarkGfm]]}
            children={desc}
            rehypePlugins={[rehypeRaw]}
          />
        </pre>
      </S.BlogAddpreview>
    </S.BlogAddWapper>
  );
};

export default BlogAdd;
