import { PersonalInfo } from "../../types";
import Card from "../Card";

interface AboutMeProps {
  data: PersonalInfo;
}

function AboutMe({ data }: AboutMeProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card
          title="About Me"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        >
          <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4">
            <div>Name</div>
            <div className="text-[#800000]">{data.name}</div>
            <div>Date of Birth</div>
            <div className="text-[#800000]">{data.dateOfBirth}</div>
            <div>Occupation</div>
            <div className="text-[#800000]">{data.occupation}</div>
          </div>
        </Card>

        <Card
          title="Education"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          }
        >
          <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4">
            <div>School</div>
            <div className="text-[#800000]">Konya Technical University</div>
            <div>Degree</div>
            <div className="text-[#800000]">B.S. in Computer Engineering</div>
            <div>Date</div>
            <div className="text-[#800000]">Aug 2022 - June 2026</div>
          </div>
        </Card>
      </div>

      <Card
        title="Summary"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        }
      >
        <p className="text-[#800000] leading-relaxed">
          Hi there! I'm a passionate Computer Engineering student with a keen
          interest in web development and software engineering. Currently
          pursuing my degree at Konya Technical University, I'm constantly
          exploring new technologies and building projects to enhance my skills.
          I'm particularly enthusiastic about React, TypeScript, and modern web
          technologies. Looking for opportunities to apply my knowledge in
          real-world projects and grow as a developer.
        </p>
      </Card>
    </div>
  );
}

export default AboutMe;
