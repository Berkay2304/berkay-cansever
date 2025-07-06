import React from 'react';
import html from "../../assets/images/html.png";
import figma from "../../assets/images/figma.png";
import bs from "../../assets/images/bs.png";
import node from "../../assets/images/node.png";
import mongo from "../../assets/images/mongo.png";
import java from "../../assets/images/java.png";
import unity from "../../assets/images/unity.png";
import c from "../../assets/images/c.png";
import cpp from "../../assets/images/cpp.png";
import cs from "../../assets/images/cs.png";
import js from "../../assets/images/js.png";
import css from "../../assets/images/css.png";
import react from "../../assets/images/react.png";
import python from "../../assets/images/python.png";
export default function Skills() {
  return (
    <div className='skills'>
        <div className='heading'>
          <hr />
          <h1>SKILLS</h1>
          <hr style={{marginTop:"-4px"}}/>
        </div>
        <div className='prim-skills'>
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js}  alt="javascript" />
            <img src={react} alt="React" />
            <img src={node} alt="Node.js" />
            <img src={bs} alt="Bootstrap" />
            <img src={mongo} alt="MongoDB" />
            <img src={figma} alt="Figma" />
        </div>
        <br />
        <div className='other-skills-container'>
            <h1>Others:</h1>
            <br />
            <br />
            <div className='other-skills'>
                <img src={c} alt="C" />
                <img src={cpp} alt="C++" />
                <img src={cs}  alt="C#" />
                <img src={unity} alt="Unity" />
                <img src={python} alt="Python" />
                <img src={java} alt="Java" />
            </div>
        </div>
    </div>
  );
}