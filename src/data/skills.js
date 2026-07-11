import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiSpringboot } from 'react-icons/si';

export const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Spring Boot', icon: SiSpringboot, status: 'Learning' },
];

export const fallbackSkillIcon = FaDatabase;