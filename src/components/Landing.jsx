/** @jsx jsx */
import './Landing.css';
import { jsx, Button } from 'theme-ui';
import FlexCenter from '../components/FlexCenter';
import Link from './Link';
import landingVideoMp4 from '../videos/test-vid.mp4';
import landingVideoWebm from '../videos/test-vid.webm';
import Vimeo from '@u-wave/react-vimeo';
// import chevron from '../images/chevron-down.svg';

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-logoCover"></div>

      <div className="landing-infoWrapper">
        <h1>Bennet Silverman</h1>
        <div className="landing-textAndContactWrapper">
          <p>
            <span aria-hidden="true"></span>
            is a comedy filmmaker based in Los Angeles and a Seattle boy at
            heart. He parlayed his award-winning viral shorts into directing for{' '}
            <span className="landing-emphasis">Jimmy Kimmel Live!</span>,{' '}
            <span className="landing-emphasis">Nickelodeon</span>, and serving
            as an EP + director for 10ish seasons of very funny episodic series
            on streaming platforms that don’t exist anymore (may they rest in
            peace). He also brings his EP skills to commercials, writing +
            directing things with people and brands like{' '}
            <span className="landing-emphasis">Sony Pictures</span>,{' '}
            <span className="landing-emphasis">Dwayne Johnson</span>,{' '}
            <span className="landing-emphasis">Shakira</span>,{' '}
            <span className="landing-emphasis">Target</span>,{' '}
            <span className="landing-emphasis">Craig Robinson</span>,{' '}
            <span className="landing-emphasis">Major League Baseball</span>,{' '}
            <span className="landing-emphasis">Portal A</span>,{' '}
            <span className="landing-emphasis">DriveTime.com</span>,{' '}
            <span className="landing-emphasis"> Anthony Edwards</span> and{' '}
            <span className="landing-emphasis">Google Play</span> to name a few
            too many. Oh yeah, and he’s a WGA-nominated writer. You can{' '}
            <Link to="/contact">contact him here</Link>. Nice.
          </p>
          {/* <Link to="/contact">
            <Button
              sx={{
                fontSize: [3, 4],
                variant: 'buttons.outlined',
              }}
            >
              Contact
            </Button>
          </Link> */}
        </div>
      </div>

      <div className="landing-videoWrapper">
        {/* <video autoPlay playing muted loop playsInline>
          <source src={landingVideoWebm} type="video/webm" />
          <source src={landingVideoMp4} type="video/mp4" />
        </video> */}
        <Vimeo
          video="https://vimeo.com/347348513"
          className="landing-video"
          autoplay
          playing
          muted
          loop
          playsInline
          responsive
          controls="false"
          width="100%"
          height="100%"
        />
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
    </section>
  );
};

export default Landing;
