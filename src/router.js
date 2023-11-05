import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PostPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postService} from "./services/postService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UserPage/>, loader: () => userService.getAll()},
            {
                path: 'users/:userId', element: <UserDetailsPage/>, children: [{
                    path: 'posts', element: <PostPage/>
                }]
            },
            {
                path: 'users/:userId/posts/:postId',
                element: <PostDetailsPage/>,
                loader: ({params:{postId}}) => postService.getById(postId)
            }
        ]
    }
])
export {router}