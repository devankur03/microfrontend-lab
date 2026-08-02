import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Feedback = React.lazy(() => import("feedback/FeedbackApp"));
const Survey = React.lazy(() => import("survey/SurveyApp"));
function Home() {
    return (<div><h2> Microfrontend Lab</ h2><p> Select an application.</ p>
    </ div>);
}
export default function App() {
    return (<BrowserRouter><h1> Shell Application</ h1><nav><Link to="/">
        Home</ Link>{" | "} < Link to=
            "/feedback" > Feedback</ Link>{" | "} < Link to=
                "/survey" > Survey</ Link></ nav><hr />
        <Suspense fallback={<h3> Loading Remote...</ h3>}><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/survey" element={<Survey />} /></ Routes>
        </ Suspense></ BrowserRouter>);
}