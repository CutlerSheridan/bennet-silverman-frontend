/** @jsx jsx */
import './Landing.css';
import { jsx } from 'theme-ui';

const Landing = () => {
  return (
    <div className="landing">
      <h1>Landing page</h1>
      <p>
        Bennet is a comedy filmmaker based in Los Angeles and a Seattle boy at
        heart. He parlayed his award-winning viral shorts into directing for{' '}
        <span className="landing-emphasis">Jimmy Kimmel Live!</span>,{' '}
        <span className="landing-emphasis">Nickelodeon</span>, and serving as an
        EP + director for 10ish seasons of very funny episodic series on
        streaming platforms that don’t exist anymore (may they rest in peace).
        He also brings his EP skills to commercials, writing + directing things
        with people and brands like Sony Pictures, Dwayne Johnson, Shakira,
        Target, Craig Robinson, Major League Baseball, Portal A, DriveTime.com,
        Anthony Edwards and Google Play to name a few too many. Oh yeah, and
        he’s a WGA-nominated writer. Nice.
      </p>
    </div>
  );
};

export default Landing;
