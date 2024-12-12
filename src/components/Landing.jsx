/** @jsx jsx */
import './Landing.css';
import { jsx, Button } from 'theme-ui';
import FlexCenter from '../components/FlexCenter';
import Link from './Link';
import landingVideoMp4 from '../videos/test-vid.mp4';
import landingVideoWebm from '../videos/test-vid.webm';
// import chevron from '../images/chevron-down.svg';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-logoCover"></div>

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
        <Link to="/contact">
          <Button
            sx={{
              fontSize: [3, 4],
              variant: 'buttons.outlined',
            }}
          >
            Contact
          </Button>
        </Link>
      </div>

      <div className="landing-videoWrapper">
        <video autoPlay muted loop playsInLine>
          <source src={landingVideoWebm} type="video/webm" />
          <source src={landingVideoMp4} type="video/mp4" />
        </video>
        <div className="landing-videoLink">
          <Link href="https://www.vimeo.com">
            <Button
              sx={{
                fontSize: [3, 4],
                variant: 'buttons.onVideo',
              }}
            >
              View Reel
            </Button>
          </Link>
        </div>
      </div>

      <div className="landing-chevronWrapper">
        <i class="fa-solid fa-chevron-down"></i>
        {/* <img src={chevron} alt="" /> */}
      </div>
    </div>
  );
};

export default Landing;
