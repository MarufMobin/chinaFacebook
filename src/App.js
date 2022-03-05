import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>        
    </div>
  );
}

export default App;

// create-comment
// {
//     "user_id"          : "1",
//     "post_id"          : "3",
//     "description"      : "third comment"
// }


// edit-comment
// {
//     "comment_id"  :  "1",
//     "description"  :  "comment edited"
// }

// show-comment
// {
//     "post_id" : "1"
// }

// delete-comment
// {
//     "post_id"       : "1",
//     "comment_id"    : "2"
// }

// create-reply :
// {
//     "user_id"          : "1",
//     "comment_id"       : "1",
//     "description"      : "description"
// }

// edit-reply:
// {
//     "reply_id"     : "1",
//     "description"  :  "reply edited"
// }

// show-reply:
// {
//     "comment_id" : "1"
// }

// delete-reply:
// {
//     "comment_id"    : "1",
//     "reply_id"       : "1"
// }