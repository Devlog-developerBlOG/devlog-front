/* eslint-disable react/no-children-prop */
import { useState } from "react";
import * as S from "./styled";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import CustomAxios from "../../utils/lib/CustomAxios";

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
  const [file, setFile] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const handleChangeFile = async (e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      try {
        const { data } = await CustomAxios.post("/image/post/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
        setDesc(`${desc}${data.imageUrl}`);
        setFile("");
        router.push("/post");
      } catch (e: any) {
        console.log(e.message);
      }
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    let request = {
      title: title,
      content: desc,
      tags: ["벡엔드", "프론트엔드"],
    };
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    try {
      await CustomAxios.post("/post/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
            />
            <label htmlFor="change_img">추가</label>
          </form>
        </S.BlogAddImgWapper>
        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        <S.Button onClick={onSubmit}>올리기</S.Button>
      </S.BlogAdd>
      <S.BlogAddpreview>
        <h1>{title}</h1>
        <pre>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={desc ?? ""} />
        </pre>
      </S.BlogAddpreview>
    </S.BlogAddWapper>
  );
};

export default BlogAdd;
