import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">LandingPage</NavLink>
        </li>
        <li>
          <NavLink to="/create-exercise">CreateExercise</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">ExercisesInside</NavLink>
        </li>
      </ul>
    </div>
  );
}

/**
path is the URL (the link in the browser).

"/" is the root URL of the site.

AppLayout is the wrapper/shell (nav + outlet). Pages don’t “appear on AppLayout”, they appear inside its <Outlet />.

children are the pages that render inside <Outlet />.

index: true means default child route (so / shows LandingPage).

Nav changes the URL using <Link to="..."> and React Router swaps what’s inside <Outlet />.
 */
