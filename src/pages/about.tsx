/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Nav } from "../components/nav";
import { Helmet } from "react-helmet";
import Gmail from "../assets/img/gmail.svg";
import Github from "../assets/img/github.svg";
import postProfile from "../assets/img/about-profile.jpg";
interface Props {
  name: string;
  backgroundColor: string;
  logoColor: string;
  displayName?: string;
}
const Label = (props: Props) => {
  let { name, backgroundColor, logoColor, displayName } = props;
  displayName = displayName || name;
  return (
    <li>
      <img
        className="label"
        src={`https://img.shields.io/badge/${displayName}-${backgroundColor}?style=flat-round&logo=${name}&logoColor=${logoColor}`}
      />
    </li>
  );
};

const About = () => {
  return (
    <>
      <Nav />
      <section className="content first">
        <h1 className="about-text">About</h1>
        <article className="about">
          <div className="profile-wrap">
            <img className="profile" src={postProfile} title="BokangKim" />
            <h2 className="name">BoKang_Kim</h2>
            <h3>📪 Contact & Channel</h3>
            <ul className="list contactChannel">
              <li>
                <Gmail className="icon small" />
                <a href="mailto:bkbk0329@gmail.com">bkbk0329@gmail.com</a>
              </li>
              <li>
                <Github className="icon small" />
                <a href="https://github.com/bokangkim">
                  https://github.com/bokangkim
                </a>
              </li>
            </ul>
          </div>
          <div className="text-wrap">
            <h2>📋 Introduction</h2>
            <ul>
              <li>게임 엔진 프로그래머를 목표로 하고 있습니다.</li>
              <li>수학, 과학적인 원리를 배우는 것을 좋아합니다.</li>
              <li>
                모든 사람들이 즐길 수 있는 대전 액션 장르의 게임을 만들고
                싶습니다.
              </li>
              <li>Tech 트렌드에 관심이 많습니다.</li>
              <li>코드에 성능과 가독성에 대한 고민을 생활화 합니다.</li>
            </ul>
            <h2>📒 Interested tech stack</h2>
            <ul className="list techStack">
              <li>
                <img
                  className="label"
                  src={`https://img.shields.io/badge/C++-A8B9CC?style=flat-round&logo=Cplusplus&logoColor=black`}
                />
              </li>
              <Label name="Cocos" backgroundColor="55C2E1" logoColor="black" />
              <Label name="HTML5" backgroundColor="E34F26" logoColor="white" />

              <Label
                name="JavaScript"
                backgroundColor="F7DF1E"
                logoColor="black"
              />
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
