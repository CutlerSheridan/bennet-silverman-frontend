/** @jsx jsx */
import './Landing.css';
import { jsx, Button } from 'theme-ui';
// import Link from './Link';
// import Vimeo from '@u-wave/react-vimeo';

const Landing = () => {
  return (
    <section id="welcome" className="landing">
      <div className="landing-logoCover"></div>

      <div className="landing-infoWrapper">
        <h1>Bennet Silverman</h1>
        <div className="landing-textAndContactWrapper">
          <p>
            <span aria-hidden="true"></span>
            is a Seattle-born, LA-based comedy writer-director. Award-winning
            shorts launched him into directing for Jimmy Kimmel Live! and
            Nickelodeon, as well as executive producing and directing 10+
            seasons of episodic comedy for streaming platforms that no longer
            exist, collecting a WGA nomination, three Streamys, and a DGA card
            on the way. On the commercial side, he's written and directed
            campaigns with{' '}
            <span className="landing-emphasis">Sony Pictures</span>,{' '}
            <span className="landing-emphasis">Dwayne Johnson</span>,{' '}
            <span className="landing-emphasis">Shakira</span>,{' '}
            <span className="landing-emphasis">Target</span>,{' '}
            <span className="landing-emphasis">Keke Palmer</span>,{' '}
            <span className="landing-emphasis">Portal A</span>,{' '}
            <span className="landing-emphasis">Anthony Edwards</span>, and{' '}
            <span className="landing-emphasis">Royal Kingdom</span>. He's a
            co-founder of the sports + comedy studio{' '}
            <a href="https://benched.co">
              <span className="landing-emphasis">Benched</span>
            </a>
            . Reach him <a href="/contact">here</a>. Nice.
          </p>
        </div>
      </div>

      {/* <div className="landing-videoWrapper">
        <Vimeo
          video="https://player.vimeo.com/video/1053935337"
          className="landing-video"
          autoplay
          playing
          muted
          loop
          playsInline
          responsive
          controls={false}
          width="100%"
          height="100%"
        />
        <div className="landing-videoLink">
          <Link href="https://vimeo.com/1051708949?ts=0&share=copy">
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
      </div> */}

      <div className="landing-chevronWrapper">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Landing;
