import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ workExperiences, isDark }) {

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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.remove('not-in-view');
        } else {
          entry.target.classList.remove('in-view');
          entry.target.classList.add('not-in-view');
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: [0, 0.1, 1],
    }
  );

  const tags = document.querySelectorAll('.timeline-item');
  tags.forEach(tag => {
    observer.observe(tag);
  });

  return (
    <div className="timeline">
      {workExperiences.map((cardInfo, index) => (
        <div key={index} className="timeline-item">
          <span className="timeline-bullet"></span>
          <div className={isDark ? "experience-card-dark" : "experience-card"}>
            <div className="experience-banner">
              <div className="experience-blurred_div"></div>
              <a href={cardInfo.company_url} target="_blank" rel="noreferrer">
                <div
                  className="experience-div-company"
                  style={{
                    backgroundImage: `url(${cardInfo.logo_path})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'left',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '30%'}}
                >
                </div>
              </a>
            </div>
            <div className="experience-text-details">
              {cardInfo.subExperiences ? (
                cardInfo.subExperiences.map((subExp, i) => (
                  <div key={i} className="sub-experience-section" style={{marginBottom: i < cardInfo.subExperiences.length - 1 ? '20px' : '0'}}>
                     <div className="experience-text-title">
                      <h4
                        className={
                          isDark
                            ? "experience-text-role dark-mode-text"
                            : "experience-text-role"
                        }
                      >
                        {subExp.title}
                      </h4>
                      <div className="experience-text-details-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <h5
                          className={
                            isDark
                              ? "experience-text-date dark-mode-text"
                              : "experience-text-date"
                          }
                          style={{ margin: 0 }}
                        >
                          {subExp.location}
                        </h5>
                        <h5
                          className={
                            isDark
                              ? "experience-text-date dark-mode-text"
                              : "experience-text-date"
                          }
                          style={{ margin: 0 }}
                        >
                          {subExp.duration}
                        </h5>
                      </div>
                    </div>
                    <p
                      className={
                        isDark
                          ? "subTitle experience-text-desc dark-mode-text"
                          : "subTitle experience-text-desc"
                      }
                    >
                      {subExp.description}
                    </p>
                    <ul>
                      <GetDescBullets
                        descBullets={subExp.descPoints}
                        isDark={isDark}
                      />
                    </ul>
                  </div>
                ))
              ) : (
                <>
                  <div className="experience-text-title">
                    <h4
                      className={
                        isDark
                          ? "experience-text-role dark-mode-text"
                          : "experience-text-role"
                      }
                    >
                      {cardInfo.title}
                    </h4>
                    <h5
                      className={
                        isDark
                          ? "experience-text-date dark-mode-text"
                          : "experience-text-date"
                      }
                    >
                      {cardInfo.duration}
                    </h5>
                  </div>
                  <p
                    className={
                      isDark
                        ? "subTitle experience-text-desc dark-mode-text"
                        : "subTitle experience-text-desc"
                    }
                  >
                    {cardInfo.desc}
                  </p>
                  <ul>
                    <GetDescBullets
                      descBullets={cardInfo.descPoints}
                      isDark={isDark}
                    />
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}