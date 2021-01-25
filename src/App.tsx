import './App.css';
import { requests } from './request';
import "./Row.scss"
import "./Banner.scss"
import "./Nav.scss"
import { Row } from './Row'
import { Banner } from './Banner';
import { Nav } from './Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} isLargeRow/>
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} isLargeRow/>
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} isLargeRow/>
   </div>
  );
}
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.4/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
export default App;
