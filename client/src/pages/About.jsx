import { Anatytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-col">
          <div className="hero-content">
            <p>
              Welcome,
              {user ? ` ${user.username} to our website` : ` to our website`}
            </p>

            <h1>Why chhose Us?</h1>
            <p className="about-paragraph">
              Welcome to your first project! That's exciting! Let's break it
              down into some key steps to help you get started successfully:
            </p>

            <p className="about-paragraph">
              Welcome to your first project! That's exciting! Let's break it
              down into some key steps to help you get started successfully:
            </p>

            <p className="about-paragraph">
              Welcome to your first project! That's exciting! Let's break it
              down into some key steps to help you get started successfully:
            </p>

            <p className="about-paragraph">
              Welcome to your first project! That's exciting! Let's break it
              down into some key steps to help you get started successfully:
            </p>

            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
          {/* hero image */}
          <div className="hero-image">
            <img
              src="/images/about.png"
              alt="coding"
              width="500"
              height="500"
            />
          </div>
        </div>

        <Anatytics />
      </section>
    </main>
  );
};
