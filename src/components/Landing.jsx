/** @jsx jsx */
import './Landing.css';
import { jsx } from 'theme-ui';
import landingVideoMp4 from '../videos/test-vid.mp4';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-infoWrapper">
        <h1>Bennet Silverman</h1>
        <p>
          Bennet is a comedy filmmaker based in Los Angeles and a Seattle boy at
          heart. He parlayed his award-winning viral shorts into directing for{' '}
          <span className="landing-emphasis">Jimmy Kimmel Live!</span>,{' '}
          <span className="landing-emphasis">Nickelodeon</span>, and serving as
          an EP + director for 10ish seasons of very funny episodic series on
          streaming platforms that don’t exist anymore (may they rest in peace).
          He also brings his EP skills to commercials, writing + directing
          things with people and brands like{' '}
          <span className="landing-emphasis">
            Sony Pictures, Dwayne Johnson, Shakira, Target, Craig Robinson,
            Major League Baseball, Portal A, DriveTime.com, Anthony Edwards
          </span>{' '}
          and <span className="landing-emphasis">Google Play</span> to name a
          few too many. Oh yeah, and he’s a WGA-nominated writer. Nice.
        </p>
      </div>
      <div className="landing-videoWrapper">
        <video autoPlay muted loop playsInLine>
          <source src={landingVideoMp4} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Landing;
