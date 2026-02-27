import LandingPage from "../../pages/LandingPage";
import CreateExercise from "../../pages/CreateExercise";
import ExercisesInside from "../../pages/ExercisesInside";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "create-exercise",
        element: <CreateExercise />,
      },
      {
        path: "exercises",
        element: <ExercisesInside />,
      },
    ],
  },
]);
