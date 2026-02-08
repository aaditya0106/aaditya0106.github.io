import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "../../components/animations";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function StartupProject() {
  const [limit, setLimit] = useState(4); // Show first 4 projects (2 rows) initially

  function showMore() {
    setLimit(bigProjects.projects.length);
  }

  function showLess() {
    setLimit(4);
  }

  // function openUrlInNewTab(url) {
  //   if (!url) {
  //     return;
  //   }
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.slice(0, limit).map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                      <a href={project.gitUrl} target="_blank" rel="noreferrer" style={{"text-decoration":"none"}}>
                        {project.gitUrl === '#' ? "" : " 🔗"}
                      </a>
                    </h5>
                    <ul
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      <GetDescBullets
                        descBullets={project.projectDesc}
                        isDark={isDark}
                      />
                    </ul>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              //onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="blog-more-div">
            {limit < bigProjects.projects.length && (
              <Button text="Show More" newTab={false} onClick={showMore} />
            )}
            {limit > 4 && (
              <Button text="Show Less" newTab={false} onClick={showLess} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
