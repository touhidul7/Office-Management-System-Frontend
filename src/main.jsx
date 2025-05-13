/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme/theme-provider.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Teachers from "./routes/Page/Teachers/Teachers.jsx";
import { Login } from "./components/app_components/Login.jsx";
// import DashboardContent from "./routes/PageDashboardContent.jsx";
import AddTeacher from "./routes/Page/Teachers/AddTeacher.jsx";
import Students from "./routes/Page/Students/Students.jsx";
import AddStudents from "./routes/Page/Students/AddStudents.jsx";
import Staffs from "./routes/Page/Staffs/Staffs";
import AddStuffs from "./routes/Page/Staffs/AddStuffs";
import Subjects from "./routes/Page/Subjects/Subjects";
import AddSubjects from "./routes/Page/Subjects/AddSubjects";
import Classes from "./routes/Page/Classes/Classes";
import AddClasses from "./routes/Page/Classes/AddClasses";
import Notices from "./routes/Page/Notices/Notices";
import AddNotices from "./routes/Page/Notices/AddNotices";
import Fees from "./routes/Page/Fees/Fees";
import AddFees from "./routes/Page/Fees/AddFees";
import Sections from "./routes/Page/Sections/Sections";
import Results from "./routes/Page/Result/Results";
import AddResults from "./routes/Page/Result/AddResults";
import IdCards from "./routes/Page/IdCard/IdCards";
import Salaries from "./routes/Page/Salary/SalaryReport";
import AddSalaries from "./routes/Page/Salary/PaySalary";
import Reports from "./routes/Page/Report/Reports";
import AddReports from "./routes/Page/Report/AddReports";
import Exams from "./routes/Page/Exam/Exams";
import AddExams from "./routes/Page/Exam/AddExams";
import AddSections from "./routes/Page/Sections/AddSections";
import AddAccounts from "./routes/Page/Accounts/AddAccounts";
import ViewAccountReport from "./routes/Page/Accounts/ViewAccountReport";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./Providers/AuthProvider";
import ClassView from "./routes/Page/Classes/ClassView";
import { Toaster } from "react-hot-toast";
import Settings from "./routes/Page/Settings/Settings";
import StudentProfile from "./routes/Page/Profile/StudentProfile";
import PaySalary from "./routes/Page/Salary/PaySalary";
import SalaryReport from "./routes/Page/Salary/SalaryReport";
import EditClasses from "./routes/Page/Classes/EditClasses";
import AddAttendance from "./routes/Page/Attendance/AddAttendance";
import TeacherProfile from "./routes/Page/Profile/TeacherProfile";
import TsProfile from "./routes/Page/Profile/TeacherProfile";
import StaffProfile from "./routes/Page/Profile/StaffProfile";
import Home from "./routes/Home";
import EditStudents from "./routes/Page/Students/EditStudents";
import EditTeacher from "./routes/Page/Teachers/EditTeacher";
import EditStuff from "./routes/Page/Staffs/EditStuff";
import NotFound from "./routes/Page/NotFound/NotFound";
import TotalTransection from "./routes/Page/TotalTransection/TotalTransection";
import Support from "./routes/Page/Support/Support";
import DashboardContent from "./routes/Page/Dashboard/DashboardContent";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardContent />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "add-teachers",
        element: <AddTeacher />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "add-students",
        element: <AddStudents />,
      },
      {
        path: "stuffs",
        element: <Staffs />,
      },
      {
        path: "add-staffs",
        element: <AddStuffs />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "add-subjects",
        element: <AddSubjects />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "add-classes",
        element: <AddClasses />,
      },
      {
        path: "class-view/:id",
        element: <ClassView />,
      },
      {
        path: "notices",
        element: <Notices />,
      },
      {
        path: "add-notices",
        element: <AddNotices />,
      },
      {
        path: "fees",
        element: <Fees />,
      },
      {
        path: "add-fees",
        element: <AddFees />,
      },
      {
        path: "sections",
        element: <Sections />,
      },
      {
        path: "add-fees",
        element: <AddFees />,
      },
      {
        path: "sections",
        element: <Sections />,
      },
      {
        path: "add-sections",
        element: <AddSections />,
      },
      {
        path: "add-fees",
        element: <AddFees />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "add-results",
        element: <AddResults />,
      },
      {
        path: "id-cards",
        element: <IdCards />,
      },
      {
        path: "salaries-report",
        element: <SalaryReport />,
      },
      {
        path: "pay-salaries",
        element: <PaySalary />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "add-reports",
        element: <AddReports />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "add-exams",
        element: <AddExams />,
      },
      {
        path: "add-accounts",
        element: <AddAccounts />,
      },
      {
        path: "view-accounts-report",
        element: <ViewAccountReport />,
      },
      {
        path: "admin-settings",
        element: <Settings />,
      },
      {
        path: "student-profile/:id",
        element: <StudentProfile />,
      },
      {
        path: "teachers-profile/:id",
        element: <TeacherProfile />,
      },
      {
        path: "staffs-profile/:id",
        element: <StaffProfile />,
      },
      {
        path: "add-attendance",
        element: <AddAttendance />,
      },
      /* Edit Works */
      {
        path: "editClass/:id",
        element: <EditClasses />,
      },
      {
        path: "editStudent/:id",
        element: <EditStudents />,
      },
      {
        path: "teachers-edit/:id",
        element: <EditTeacher />,
      },
      {
        path: "staffs-edit/:id",
        element: <EditStuff />,
      },
      {
        path: "all-transection",
        element: <TotalTransection />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: '*',
        element: <NotFound />,
      },

      /*       {
              path: '/dashboard',
              element: <Dashboard/>
            },
            {
              path: '/teachers',
              element: <Teachers/>
            },
            {
              path: '/customers',
              element: <Customers/>
            },
            {
              path: '/analytics',
              element: <Analytics/>
            },
            {
              path: '/admin_login',
              element: <Admin/>
            },
            {
              path: '/staff_login',
              element: <Staff/>
            } */
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
