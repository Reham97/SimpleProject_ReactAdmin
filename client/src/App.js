import {Admin,Resource} from "react-admin"
import PostList from "./compoents/PostList"
import PostCreate from "./compoents/PostCreate"
import PostEdit from "./compoents/PostEdit"
import restProvider from "ra-data-simple-rest"
function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}></Resource>

    </Admin>
  
  );
}

export default App;
