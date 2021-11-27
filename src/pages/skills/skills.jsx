import React from 'react';
import { SkillsContainer, SkillsTitle, Title,Line, SkillsContent, Skill, SkillImage, SkillName, Content, CircleSkills, Circle } from './skillsElement';
import {FaHtml5,FaCss3, FaSass,FaJs,FaReact,FaGithub,FaGit,FaNodeJs, FaWordpress} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di'
import {SiMysql,SiMicrosoftsqlserver,SiFlutter,SiGraphql,SiNestjs, SiExpress} from 'react-icons/si'
import {FcNext} from 'react-icons/fc'

const Skills = ()=>{

    return (
        <div id="skills">
<SkillsContainer>
    <SkillsTitle>
        <Title>
Mes compétences
        </Title>
        <Line/>
    </SkillsTitle>
    <Content>
    <SkillsContent>
        <Skill>
            <SkillImage color='red'>
                <FaHtml5/>
            </SkillImage>
            <SkillName>Html5</SkillName>
        </Skill>
        <Skill>
            <SkillImage color='#0081f6'><FaCss3/></SkillImage>
            <SkillName>Css3</SkillName>
        </Skill>
        <Skill>
            <SkillImage color='#bd3482'><FaSass/></SkillImage>
            <SkillName>Sass</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#eac950'><FaJs/></SkillImage>
            <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#0da7c0'><FaReact/></SkillImage>
            <SkillName>ReactJS</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='white'><FaGithub/></SkillImage>
            <SkillName>Github</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#0da7c0'><FaReact/></SkillImage>
            <SkillName>React Native</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='gray'><FaGit/></SkillImage>
            <SkillName>Git</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='green'><DiMongodb/></SkillImage>
            <SkillName>Mongodb</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#005a88'><SiMysql/></SkillImage>
            <SkillName></SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#c8606b'><SiMicrosoftsqlserver/></SkillImage>
            <SkillName>SqlServer</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='green'><FaNodeJs/></SkillImage>
            <SkillName>NodeJs</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#0084f8'><FaWordpress/></SkillImage>
            <SkillName>WordPress</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#06bcf4'><SiFlutter/></SkillImage>
            <SkillName>Flutter</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#06bcf4'><SiGraphql/></SkillImage>
            <SkillName>Graphql</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#06bcf4'><FcNext/></SkillImage>
            <SkillName>NextJs</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='#ff0000'><SiNestjs/></SkillImage>
            <SkillName>NestJs</SkillName>
        </Skill>
        <Skill>
        <SkillImage color='white'><SiExpress/></SkillImage>
            <SkillName>ExpressJs</SkillName>
        </Skill>
    </SkillsContent>

    <CircleSkills>
        <Circle color="black" hoverColor="black">
           <p>UI et UX Design</p>
        </Circle>
        <Circle color="blue" hoverColor="blue">
           <p>Developpement Web, Mobile et Desktop</p>
        </Circle>
        <Circle color="green" hoverColor="green">
           <p>Gestion de projets (Scrum)</p>
        </Circle>
    </CircleSkills>
    </Content>
</SkillsContainer>
        </div>
    )
}
export default Skills;