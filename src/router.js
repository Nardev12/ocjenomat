import { createRouter, createWebHistory } from "vue-router";
import ReviewProfessor from "./pages/ReviewProfessor";
import Main from "./pages/Main";
import CreateProfessor from "./pages/CreateProfessor";
import ReviewFaculty from "./pages/ReviewFaculty";
import ReviewStudent from "./pages/ReviewStudent";
import Professor from "./pages/Professor";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/review/professor",
    component: ReviewProfessor,
  },
  {
    path: "/create/professor",
    component: CreateProfessor,
  },
  {
    path: "/review/faculty",
    component: ReviewFaculty,
  },
  {
    path: "/review/student",
    component: ReviewStudent,
  },
  {
    path: "/professor/all",
    component: Professor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
